import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const Navbar = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#focus', label: 'Focus Areas' },
    { href: '#projects', label: 'Projects' },
    { href: '#news', label: 'News' },
    { href: '#values', label: 'Values' },
    { href: '#contact', label: 'Contact' },
  ]

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-gradient-to-r from-[#1e4620] via-[#2c5530] to-[#3d6b42] shadow-xl'
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3" onClick={(e) => handleNavClick(e, '#home')}>
            <img
              src="/cad-logo.jpg"
              alt="CAD Malawi Logo"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-white/50"
            />
            <span className={cn(
              'text-xl font-bold transition-colors',
              isScrolled ? 'text-primary' : 'text-white'
            )}>
              CAD Malawi
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      'font-medium transition-all relative pb-1',
                      isActive
                        ? isScrolled
                          ? 'text-primary font-bold'
                          : 'text-accent font-bold'
                        : isScrolled
                        ? 'text-gray-700 hover:text-primary'
                        : 'text-white hover:text-accent'
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className={cn(
                        'absolute bottom-0 left-0 right-0 h-0.5 rounded-full',
                        isScrolled ? 'bg-primary' : 'bg-accent'
                      )} />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={cn('h-6 w-6', isScrolled ? 'text-gray-700' : 'text-white')} />
            ) : (
              <Menu className={cn('h-6 w-6', isScrolled ? 'text-gray-700' : 'text-white')} />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1)
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        'block px-4 py-2 rounded-md font-medium transition-colors',
                        isActive
                          ? isScrolled
                            ? 'bg-primary/10 text-primary font-bold border-l-4 border-primary'
                            : 'bg-white/20 text-accent font-bold border-l-4 border-accent'
                          : isScrolled
                          ? 'text-gray-700 hover:bg-gray-100'
                          : 'text-white hover:bg-white/10'
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
