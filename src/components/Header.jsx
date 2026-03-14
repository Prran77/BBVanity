import { Link } from 'react-router-dom'
import './Header.css'

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img
            className="logo-image"
            src="/images/bblogo.png"
            alt="Big Bang Theory"
          />
          <span className="subtitle">Vanity Cards Archive</span>
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">Episodes</Link>
          <Link to="/gallery" className="nav-link">Gallery</Link>
          <Link to="/about" className="nav-link">About</Link>

          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? '\u2600' : '\u263D'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
