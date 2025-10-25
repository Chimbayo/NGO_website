import { Link } from 'react-router-dom'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Focus Areas', href: '/focus-areas' },
    { label: 'Projects', href: '/projects' },
    { label: 'News', href: '/news' },
    { label: 'Core Values', href: '/values' },
    { label: 'Contact', href: '/contact' },
  ]

  const sdgs = [
    'SDG 2: Zero Hunger',
    'SDG 7: Affordable & Clean Energy',
    'SDG 8: Decent Work & Economic Growth',
    'SDG 12: Responsible Consumption & Production',
    'SDG 13: Climate Action',
    'SDG 15: Life on Land',
  ]

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-gradient-to-br from-[#0f2412] via-[#1e4620] to-[#1a3a1f] text-white border-t-2 border-accent/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-6">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/cad-logo.jpg"
                alt="CAD Malawi Logo"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/30 shadow-lg"
              />
              <h3 className="text-lg font-extrabold">CAD Malawi</h3>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed mb-3">
              Building resilient communities through sustainable solutions in renewable energy, agriculture, and environmental conservation.
            </p>
            <div className="flex items-center gap-2 text-accent text-xs font-semibold">
              <Heart className="h-4 w-4" />
              <span>Empowering Communities Since 2022</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-3 text-accent">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    onClick={handleNavClick}
                    className="text-gray-200 hover:text-accent transition-colors text-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & SDGs */}
          <div>
            <h4 className="text-base font-bold mb-3 text-accent">Contact</h4>
            <div className="space-y-2 mb-4">
              <a href="mailto:chimbayokondwan@gmail.com" className="flex items-center gap-2 text-gray-200 hover:text-accent transition-colors text-xs group">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="truncate">chimbayokondwan@gmail.com</span>
              </a>
              <a href="tel:+265999750595" className="flex items-center gap-2 text-gray-200 hover:text-accent transition-colors text-xs group">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+265 999 750 595</span>
              </a>
              <div className="flex items-center gap-2 text-gray-200 text-xs">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Lilongwe, Malawi</span>
              </div>
            </div>
            <p className="text-xs text-gray-300 font-semibold">Aligned with SDGs 2, 7, 8, 12, 13, 15</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-300">
            <p>&copy; {currentYear} CAD Malawi. All rights reserved.</p>
            <p>Established 2022 • Registered NGO 2023</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
