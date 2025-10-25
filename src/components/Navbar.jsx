import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const Navbar = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/values', label: 'Values' },
    { href: '/focus-areas', label: 'Focus Areas' },
    { href: '/projects', label: 'Projects' },
    { href: '/news', label: 'News' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const handleNavClick = () => {
    setMobileMenuOpen(false)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white backdrop-blur-lg shadow-2xl border-b-4 border-primary/20'
          : 'bg-gradient-to-r from-[#1e4620] via-[#2c5530] to-[#3d6b42] shadow-2xl'
      )}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={handleNavClick}>
            <img
              src="/cad-logo.jpg"
              alt="CAD Malawi Logo"
              className="h-14 w-14 rounded-full object-cover ring-2 ring-white/50 shadow-lg group-hover:ring-4 group-hover:ring-accent/50 transition-all duration-300"
            />
            <span className={cn(
              'text-xl font-extrabold transition-colors duration-300',
              isScrolled ? 'text-primary' : 'text-white'
            )}>
              Community Action for Development
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    onClick={handleNavClick}
                    className={cn(
                      'font-semibold transition-all duration-300 relative pb-1 text-base',
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
                        'absolute bottom-0 left-0 right-0 h-1 rounded-full shadow-lg',
                        isScrolled ? 'bg-primary shadow-primary/50' : 'bg-accent shadow-accent/50'
                      )} />
                    )}
                  </NavLink>
                </li>
              )
            })}
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={cn('h-7 w-7 transition-transform duration-300', isScrolled ? 'text-gray-700' : 'text-white')} />
            ) : (
              <Menu className={cn('h-7 w-7 transition-transform duration-300', isScrolled ? 'text-gray-700' : 'text-white')} />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 animate-fade-in">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href
                return (
                  <li key={link.href}>
                    <NavLink
                      to={link.href}
                      onClick={handleNavClick}
                      className={cn(
                        'block px-5 py-3 rounded-lg font-semibold transition-all duration-300',
                        isActive
                          ? isScrolled
                            ? 'bg-primary/10 text-primary font-bold border-l-4 border-primary shadow-md'
                            : 'bg-white/20 text-accent font-bold border-l-4 border-accent shadow-md'
                          : isScrolled
                          ? 'text-gray-700 hover:bg-gray-100'
                          : 'text-white hover:bg-white/10'
                      )}
                    >
                      {link.label}
                    </NavLink>
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
