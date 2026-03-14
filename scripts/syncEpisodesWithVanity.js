import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const TVMAZE_API = 'https://api.tvmaze.com';
const CHUCK_LORRE_API = 'https://www.chucklorre.com/card-json.php';
const BIG_BANG_THEORY_SHOW_ID = 66;
const BIG_BANG_THEORY_SERIES_TITLE = 'The Big Bang Theory';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const episodesPath = path.join(__dirname, '..', 'src', 'data', 'episodes.json');

function keyForEpisode(season, number) {
  return `S${Number(season)}E${Number(number)}`;
}

function decodeHtmlEntities(input) {
  if (!input) return '';

  const named = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&nbsp;': ' '
  };

  let text = input
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '');

  text = text.replace(/&(amp|lt|gt|quot|apos|nbsp|#39);/gi, (entity) => {
    const normalized = entity.toLowerCase();
    return named[normalized] ?? entity;
  });

  text = text.replace(/&#(\d+);/g, (_, decimal) => {
    const code = Number(decimal);
    return Number.isFinite(code) ? String.fromCodePoint(code) : _;
  });

  text = text.replace(/\r\n/g, '\n').replace(/[ \t]+\n/g, '\n').trim();
  text = text.replace(/^CHUCK LORRE PRODUCTIONS,\s*#\d+\s*/i, '').trim();
  return text;
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: HTTP ${response.status}`);
  }
  return response.json();
}

async function buildDatabase() {
  const [tvMazeEpisodes, chuckLorreCards, existingEpisodes] = await Promise.all([
    fetchJson(`${TVMAZE_API}/shows/${BIG_BANG_THEORY_SHOW_ID}/episodes`),
    fetchJson(CHUCK_LORRE_API),
    fs.readFile(episodesPath, 'utf8').then((raw) => JSON.parse(raw))
  ]);

  const preservedTriviaByKey = new Map(
    existingEpisodes.map((episode) => [
      keyForEpisode(episode.season, episode.number),
      Array.isArray(episode.trivia) ? episode.trivia : []
    ])
  );

  const cardByEpisodeKey = new Map();

  for (const card of Object.values(chuckLorreCards)) {
    const episodes = Object.values(card.episodes || {});
    for (const episode of episodes) {
      if (episode.series_title !== BIG_BANG_THEORY_SERIES_TITLE) continue;
      const episodeKey = keyForEpisode(episode.season_num, episode.episode_num);
      cardByEpisodeKey.set(episodeKey, {
        number: Number(card.num),
        text: decodeHtmlEntities(card.search_txt),
        image: card.img ? `https://www.chucklorre.com/images/cards/${card.img}` : null
      });
    }
  }

  const transformedEpisodes = tvMazeEpisodes.map((episode) => {
    const episodeKey = keyForEpisode(episode.season, episode.number);
    return {
      id: episode.id,
      name: episode.name,
      season: episode.season,
      number: episode.number,
      airdate: episode.airdate,
      runtime: episode.runtime,
      rating: episode.rating?.average ?? null,
      summary: episode.summary,
      image: episode.image?.medium || episode.image?.original || null,
      vanityCard: cardByEpisodeKey.get(episodeKey) ?? null,
      trivia: preservedTriviaByKey.get(episodeKey) ?? []
    };
  });

  const missingVanityCards = transformedEpisodes.filter((episode) => !episode.vanityCard);

  await fs.writeFile(episodesPath, JSON.stringify(transformedEpisodes, null, 2) + '\n', 'utf8');

  console.log(`Saved ${transformedEpisodes.length} episodes to ${episodesPath}`);
  console.log(`Episodes with vanity cards: ${transformedEpisodes.length - missingVanityCards.length}/${transformedEpisodes.length}`);
  if (missingVanityCards.length > 0) {
    console.log('Missing vanity cards for:');
    for (const episode of missingVanityCards) {
      console.log(`- ${keyForEpisode(episode.season, episode.number)} ${episode.name}`);
    }
  }
}

buildDatabase().catch((error) => {
  console.error(error);
  process.exit(1);
});
