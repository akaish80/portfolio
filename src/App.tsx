import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import Preloader from './components/Preloader'
import { useScrolled } from './hooks/useScrolled'
import { useAOS } from './hooks/useAOS'
import { usePreloader } from './hooks/usePreloader'

const App: React.FC = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  // Initialize hooks for global behaviors
  useScrolled()
  useAOS()
  usePreloader()

  return (
    <div className="app-root">
      <Preloader />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      <Footer />
      <ScrollTop />
    </div>
  )
}

export default App
