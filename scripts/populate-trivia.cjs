const fs = require('fs');
const https = require('https');

const EPISODES_PATH = 'src/data/episodes.json';
const API_BASE = 'https://bigbangtheory.fandom.com/api.php';
const REQUEST_DELAY_MS = 120;
const MAX_TRIVIA_ITEMS = 5;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; TriviaImporter/1.0)'
          }
        },
        (res) => {
          let raw = '';
          res.on('data', (chunk) => {
            raw += chunk;
          });
          res.on('end', () => {
            if (res.statusCode !== 200) {
              reject(new Error(`HTTP ${res.statusCode} for ${url}`));
              return;
            }

            try {
              resolve(JSON.parse(raw));
            } catch (error) {
              reject(new Error(`Invalid JSON for ${url}: ${error.message}`));
            }
          });
        }
      )
      .on('error', reject);
  });
}

function stripWikiMarkup(line) {
  let text = line.trim();

  text = text.replace(/\[\[([^\]|]+\|)?([^\]]+)\]\]/g, '$2');
  text = text.replace(/\{\{[^{}]*\}\}/g, '');
  text = text.replace(/'''+([^']+)'''+/g, '$1');
  text = text.replace(/''([^']+)''/g, '$1');
  text = text.replace(/<ref[^>]*>.*?<\/ref>/gi, '');
  text = text.replace(/<[^>]+>/g, '');
  text = text.replace(/\s+/g, ' ').trim();

  return text;
}

function extractTriviaFromSection(wikitext) {
  if (!wikitext) return [];

  const lines = wikitext.split('\n');
  const items = [];

  for (const line of lines) {
    if (!line.startsWith('*')) continue;

    const cleaned = stripWikiMarkup(line.replace(/^\*+\s*/, ''));
    if (!cleaned || cleaned.length < 12) continue;

    items.push(cleaned);
    if (items.length >= MAX_TRIVIA_ITEMS) break;
  }

  return items;
}

async function fetchEpisodeTrivia(episodeName) {
  const pageTitle = encodeURIComponent(episodeName);
  const sectionsUrl = `${API_BASE}?action=parse&page=${pageTitle}&prop=sections&format=json&formatversion=2`;

  const sectionsData = await fetchJson(sectionsUrl);
  const sections = sectionsData?.parse?.sections || [];
  const triviaSection = sections.find((section) => section.line?.toLowerCase() === 'trivia');

  if (!triviaSection) {
    return [];
  }

  const triviaUrl = `${API_BASE}?action=parse&page=${pageTitle}&prop=wikitext&section=${triviaSection.index}&format=json&formatversion=2`;
  const triviaData = await fetchJson(triviaUrl);
  const wikitext = triviaData?.parse?.wikitext || '';

  return extractTriviaFromSection(wikitext);
}

async function main() {
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8'));

  let enrichedCount = 0;
  let fallbackCount = 0;

  for (let i = 0; i < episodes.length; i += 1) {
    const episode = episodes[i];

    if (Array.isArray(episode.trivia) && episode.trivia.length > 0) {
      continue;
    }

    try {
      const trivia = await fetchEpisodeTrivia(episode.name);

      if (trivia.length > 0) {
        episode.trivia = trivia;
        episode.triviaSource = 'Big Bang Theory Wiki (Fandom)';
        episode.triviaSourceUrl = `https://bigbangtheory.fandom.com/wiki/${encodeURIComponent(episode.name).replace(/%20/g, '_')}`;
        enrichedCount += 1;
      } else {
        episode.trivia = [
          'No verified trivia entry was found for this episode yet. Use the source link to check for future updates.'
        ];
        episode.triviaSource = 'Big Bang Theory Wiki (Fandom)';
        episode.triviaSourceUrl = `https://bigbangtheory.fandom.com/wiki/${encodeURIComponent(episode.name).replace(/%20/g, '_')}`;
        fallbackCount += 1;
      }
    } catch (error) {
      episode.trivia = [
        'Trivia could not be loaded from the external source at generation time.'
      ];
      episode.triviaSource = 'Big Bang Theory Wiki (Fandom)';
      episode.triviaSourceUrl = `https://bigbangtheory.fandom.com/wiki/${encodeURIComponent(episode.name).replace(/%20/g, '_')}`;
      fallbackCount += 1;
      console.error(`Failed trivia for ${episode.name}: ${error.message}`);
    }

    if (i % 20 === 0) {
      console.log(`Processed ${i + 1}/${episodes.length}`);
    }

    await sleep(REQUEST_DELAY_MS);
  }

  fs.writeFileSync(EPISODES_PATH, `${JSON.stringify(episodes, null, 2)}\n`, 'utf8');

  console.log(`Done. Added trivia for ${enrichedCount} episodes, fallback for ${fallbackCount} episodes.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
