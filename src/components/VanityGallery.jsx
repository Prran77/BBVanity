import { useState, useEffect } from 'react'
import episodesData from '../data/episodes.json'
import './VanityGallery.css'

function VanityGallery() {
  const [vanityCards, setVanityCards] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Extract all episodes that have vanity cards
    const cards = episodesData
      .filter(ep => ep.vanityCard)
      .map(ep => ({
        ...ep.vanityCard,
        episodeId: ep.id,
        episodeName: ep.name,
        season: ep.season,
        episodeNumber: ep.number
      }))
    
    setTimeout(() => {
      setVanityCards(cards)
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return <div className="loading">Loading vanity cards</div>
  }

  if (vanityCards.length === 0) {
    return (
      <div className="container">
        <div className="no-results">
          <h2>No vanity cards yet</h2>
          <p>Vanity cards will appear here as episode data is populated.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="vanity-gallery container fade-in">
      <div className="gallery-header">
        <h1>Chuck Lorre Vanity Cards</h1>
        <p className="gallery-description">
          A collection of Chuck Lorre's famous vanity cards from The Big Bang Theory. 
          These brief messages appear at the end of each episode, often containing 
          humorous observations, philosophical musings, or personal anecdotes.
        </p>
        <div className="gallery-stats">
          <span className="stat-badge">{vanityCards.length} Cards</span>
        </div>
      </div>

      <div className="gallery-grid">
        {vanityCards.map((card, index) => (
          <div key={index} className="vanity-card-item">
            <div className="card-image-container">
              {card.image ? (
                <img src={card.image} alt={`Vanity Card #${card.number}`} />
              ) : (
                <div className="card-placeholder">
                  <span>📄</span>
                  <p>Card #{card.number}</p>
                </div>
              )}
            </div>
            
            <div className="card-content">
              <div className="card-number">Card #{card.number}</div>
              
              {card.text && (
                <p className="card-text">
                  {card.text.length > 200 
                    ? `${card.text.substring(0, 200)}...` 
                    : card.text}
                </p>
              )}
              
              <div className="card-episode-info">
                <p>
                  From: <strong>{card.episodeName}</strong>
                </p>
                <p className="episode-tag">
                  S{card.season.toString().padStart(2, '0')}E{card.episodeNumber.toString().padStart(2, '0')}
                </p>
              </div>
              
              <a 
                href={`/episode/${card.episodeId}`} 
                className="view-episode-btn"
              >
                View Episode →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VanityGallery
