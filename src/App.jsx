import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FocusAreas from './components/FocusAreas'
import Projects from './components/Projects'
import News from './components/News'
import Values from './components/Values'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
        <Hero />
        <Values />
        <FocusAreas />
        <Projects />
        <News />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
