import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import Preloader from './components/Preloader'
import ChatButton from './components/ChatButton'
import ChatOverlay from './components/ChatOverlay'
import { useScrolled } from './hooks/useScrolled'
import { useAOS } from './hooks/useAOS'
import { usePreloader } from './hooks/usePreloader'

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)

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
      <ChatButton onClick={() => setIsChatOpen(true)} />
      {isChatOpen && <ChatOverlay onClose={() => setIsChatOpen(false)} />}
    </div>
  )
}

export default App
