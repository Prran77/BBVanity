import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import episodesData from '../data/episodes.json'
import './EpisodeDetail.css'

function EpisodeDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [episode, setEpisode] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const foundEpisode = episodesData.find((ep) => ep.id === parseInt(id, 10))
    setTimeout(() => {
      setEpisode(foundEpisode)
      setLoading(false)
    }, 300)
  }, [id])

  if (loading) {
    return <div className="loading">Loading episode details</div>
  }

  if (!episode) {
    return (
      <div className="error">
        <h2>Episode not found</h2>
        <p>The episode you are looking for does not exist.</p>
        <Link to="/" className="back-button">Back to Episodes</Link>
      </div>
    )
  }

  const nextEpisode = episodesData.find((ep) => ep.id === episode.id + 1)
  const prevEpisode = episodesData.find((ep) => ep.id === episode.id - 1)

  return (
    <div className="episode-detail container fade-in">
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>

      <div className="detail-header">
        <div className="detail-image">
          {episode.image ? (
            <img src={episode.image} alt={episode.name} />
          ) : (
            <div className="no-image-large">
              <span>TV</span>
            </div>
          )}
        </div>

        <div className="detail-info">
          <div className="episode-meta">
            <span className="season-badge">Season {episode.season}</span>
            <span className="episode-badge">Episode {episode.number}</span>
          </div>

          <h1 className="detail-title">{episode.name}</h1>

          {episode.airdate && (
            <p className="detail-airdate">
              Aired:{' '}
              {new Date(episode.airdate).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          )}

          {episode.rating && (
            <div className="detail-rating">
              Rating: {episode.rating}/10
            </div>
          )}
        </div>
      </div>

      <div className="detail-content">
        {episode.summary && (
          <section className="detail-section">
            <h2>Summary</h2>
            <div
              className="summary-text"
              dangerouslySetInnerHTML={{ __html: episode.summary }}
            />
          </section>
        )}

        {episode.vanityCard && (
          <section className="detail-section vanity-section">
            <h2>Chuck Lorre Vanity Card</h2>
            <div className="vanity-card-display">
              {episode.vanityCard.image ? (
                <img
                  src={episode.vanityCard.image}
                  alt={`Vanity Card #${episode.vanityCard.number}`}
                  className="vanity-image"
                />
              ) : (
                <div className="vanity-placeholder">
                  <span>Card</span>
                  <p>Vanity Card #{episode.vanityCard.number}</p>
                </div>
              )}
              {episode.vanityCard.text && (
                <div className="vanity-text">
                  <p><strong>Card #{episode.vanityCard.number}</strong></p>
                  <p>{episode.vanityCard.text}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {episode.trivia && episode.trivia.length > 0 && (
          <section className="detail-section">
            <h2>Trivia</h2>
            <ul className="trivia-list">
              {episode.trivia.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
            {episode.triviaSourceUrl && (
              <p className="trivia-source">
                Source:{' '}
                <a
                  href={episode.triviaSourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {episode.triviaSource || 'Episode Trivia Source'}
                </a>
              </p>
            )}
          </section>
        )}
      </div>

      <div className="episode-navigation">
        {prevEpisode && (
          <Link to={`/episode/${prevEpisode.id}`} className="nav-episode prev">
            <span className="nav-label">Previous</span>
            <span className="nav-title">{prevEpisode.name}</span>
          </Link>
        )}
        {nextEpisode && (
          <Link to={`/episode/${nextEpisode.id}`} className="nav-episode next">
            <span className="nav-label">Next</span>
            <span className="nav-title">{nextEpisode.name}</span>
          </Link>
        )}
      </div>
    </div>
  )
}

export default EpisodeDetail
