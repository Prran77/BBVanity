/**
 * Script to fetch episode data from TVMaze API
 * Run with: node scripts/fetchEpisodes.js
 */

const fs = require('fs');
const path = require('path');

const TVMAZE_API = 'https://api.tvmaze.com';
const BIG_BANG_THEORY_ID = 66; // TVMaze show ID for The Big Bang Theory

async function fetchEpisodes() {
  console.log('Fetching episodes from TVMaze API...');
  
  try {
    // Use node-fetch for Node.js < 18 or native fetch for Node.js >= 18
    const fetch = globalThis.fetch || (await import('node-fetch')).default;
    
    const response = await fetch(`${TVMAZE_API}/shows/${BIG_BANG_THEORY_ID}/episodes`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const episodes = await response.json();
    console.log(`Fetched ${episodes.length} episodes`);
    
    // Transform and enhance the data
    const transformedEpisodes = episodes.map((episode, index) => {
      return {
        id: episode.id,
        name: episode.name,
        season: episode.season,
        number: episode.number,
        airdate: episode.airdate,
        runtime: episode.runtime,
        rating: episode.rating?.average || null,
        summary: episode.summary,
        image: episode.image?.medium || episode.image?.original || null,
        // Placeholder for vanity cards - to be manually added later
        vanityCard: null,
        trivia: []
      };
    });
    
    // Create data directory if it doesn't exist
    const dataDir = path.join(__dirname, '..', 'src', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // Write to file
    const outputPath = path.join(dataDir, 'episodes.json');
    fs.writeFileSync(outputPath, JSON.stringify(transformedEpisodes, null, 2));
    
    console.log(`✅ Successfully saved ${transformedEpisodes.length} episodes to ${outputPath}`);
    console.log('\nNext steps:');
    console.log('1. Manually add vanity card data to episodes');
    console.log('2. Add trivia for episodes');
    console.log('3. Enhance with fan art and additional information');
    
    return transformedEpisodes;
  } catch (error) {
    console.error('Error fetching episodes:', error);
    process.exit(1);
  }
}

// Run the script
fetchEpisodes();
