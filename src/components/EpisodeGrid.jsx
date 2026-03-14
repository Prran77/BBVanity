import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import episodesData from '../data/episodes.json'
import './EpisodeGrid.css'

const PREVIEW_WIDTH = 360
const PREVIEW_HEIGHT = 420

function EpisodeGrid() {
  const [episodes, setEpisodes] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSeason, setSelectedSeason] = useState('all')
  const [loading, setLoading] = useState(true)
  const [hoveredVanityCard, setHoveredVanityCard] = useState(null)
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setEpisodes(episodesData)
      setLoading(false)
    }, 500)
  }, [])

  const seasons = useMemo(() => {
    const uniqueSeasons = [...new Set(episodes.map(ep => ep.season))].sort((a, b) => a - b)
    return uniqueSeasons
  }, [episodes])

  const filteredEpisodes = useMemo(() => {
    return episodes.filter(episode => {
      const matchesSearch = episode.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           episode.summary?.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesSeason = selectedSeason === 'all' || episode.season === parseInt(selectedSeason, 10)
      return matchesSearch && matchesSeason
    })
  }, [episodes, searchTerm, selectedSeason])

  const getPreviewPosition = (event) => {
    const cursorOffset = 14
    const safetyPadding = 12
    let x = event.clientX + cursorOffset
    let y = event.clientY + cursorOffset

    if (x + PREVIEW_WIDTH > window.innerWidth - safetyPadding) {
      x = event.clientX - PREVIEW_WIDTH - cursorOffset
    }

    if (y + PREVIEW_HEIGHT > window.innerHeight - safetyPadding) {
      y = window.innerHeight - PREVIEW_HEIGHT - safetyPadding
    }

    return {
      x: Math.max(safetyPadding, x),
      y: Math.max(safetyPadding, y)
    }
  }

  const showVanityPreview = (episode, event) => {
    if (!episode?.vanityCard) return

    setHoveredVanityCard({
      episodeName: episode.name,
      season: episode.season,
      number: episode.number,
      vanityCard: episode.vanityCard
    })
    setHoverPosition(getPreviewPosition(event))
  }

  const moveVanityPreview = (event) => {
    if (!hoveredVanityCard) return
    setHoverPosition(getPreviewPosition(event))
  }

  const hideVanityPreview = () => {
    setHoveredVanityCard(null)
  }

  if (loading) {
    return <div className="loading">Loading episodes</div>
  }

  return (
    <div className="episode-grid-container container">
      <div className="filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search episodes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="season-filter">
          <label htmlFor="season-select">Season: </label>
          <select
            id="season-select"
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
            className="season-select"
          >
            <option value="all">All Seasons</option>
            {seasons.map(season => (
              <option key={season} value={season}>
                Season {season}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="results-info">
        Showing {filteredEpisodes.length} episode{filteredEpisodes.length !== 1 ? 's' : ''}
      </div>

      <div className="episode-grid">
        {filteredEpisodes.map(episode => (
          <Link
            key={episode.id}
            to={`/episode/${episode.id}`}
            className="episode-card"
          >
            <div className="episode-image">
              {episode.image ? (
                <img src={episode.image} alt={episode.name} />
              ) : (
                <div className="no-image">
                  <span>TV</span>
                </div>
              )}
              {episode.vanityCard && (
                <div
                  className="vanity-badge vanity-badge-trigger"
                  onMouseEnter={(event) => showVanityPreview(episode, event)}
                  onMouseMove={moveVanityPreview}
                  onMouseLeave={hideVanityPreview}
                >
                  Vanity Card
                </div>
              )}
            </div>

            <div className="episode-info">
              <div className="episode-number">
                S{episode.season.toString().padStart(2, '0')}
                {' '}
                E{episode.number.toString().padStart(2, '0')}
              </div>
              <h3 className="episode-title">{episode.name}</h3>
              {episode.airdate && (
                <p className="episode-airdate">
                  {new Date(episode.airdate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              )}
              {episode.rating && (
                <div className="episode-rating">
                  Rating: {episode.rating}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {hoveredVanityCard && (
        <div
          className="vanity-hover-preview"
          style={{
            top: `${hoverPosition.y}px`,
            left: `${hoverPosition.x}px`
          }}
        >
          <div className="preview-header">
            <span>Card #{hoveredVanityCard.vanityCard.number}</span>
            <span className="preview-episode-tag">
              S{hoveredVanityCard.season.toString().padStart(2, '0')}
              E{hoveredVanityCard.number.toString().padStart(2, '0')}
            </span>
          </div>

          {hoveredVanityCard.vanityCard.image && (
            <img
              src={hoveredVanityCard.vanityCard.image}
              alt={`Vanity Card #${hoveredVanityCard.vanityCard.number}`}
              className="preview-image"
            />
          )}

          {hoveredVanityCard.vanityCard.text && (
            <p className="preview-text">
              {hoveredVanityCard.vanityCard.text.length > 240
                ? `${hoveredVanityCard.vanityCard.text.substring(0, 240)}...`
                : hoveredVanityCard.vanityCard.text}
            </p>
          )}

          <p className="preview-episode-name">{hoveredVanityCard.episodeName}</p>
        </div>
      )}

      {filteredEpisodes.length === 0 && (
        <div className="no-results">
          <h3>No episodes found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
}

export default EpisodeGrid
