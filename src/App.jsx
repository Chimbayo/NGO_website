import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ValuesPage from './pages/ValuesPage'
import FocusAreasPage from './pages/FocusAreasPage'
import ProjectsPage from './pages/ProjectsPage'
import NewsPage from './pages/NewsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import StaffPage from './pages/StaffPage'
import DistrictsPage from './pages/DistrictsPage'
import SDGsPage from './pages/SDGsPage'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar isScrolled={isScrolled} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/values" element={<ValuesPage />} />
          <Route path="/focus-areas" element={<FocusAreasPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/staff" element={<StaffPage />} />
          <Route path="/about/districts" element={<DistrictsPage />} />
          <Route path="/about/sdgs" element={<SDGsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
