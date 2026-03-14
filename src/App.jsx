import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import EpisodeGrid from './components/EpisodeGrid'
import EpisodeDetail from './components/EpisodeDetail'
import VanityGallery from './components/VanityGallery'
import About from './components/About'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Router basename="/">
      <div className="app">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<EpisodeGrid />} />
            <Route path="/episode/:id" element={<EpisodeDetail />} />
            <Route path="/gallery" element={<VanityGallery />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
