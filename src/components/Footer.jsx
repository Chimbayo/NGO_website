import { Heart, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Focus Areas', href: '#focus' },
    { label: 'Projects', href: '#projects' },
    { label: 'News', href: '#news' },
    { label: 'Core Values', href: '#values' },
    { label: 'Contact', href: '#contact' },
  ]

  const sdgs = [
    'SDG 2: Zero Hunger',
    'SDG 7: Clean Energy',
    'SDG 8: Decent Work',
    'SDG 12: Responsible Consumption',
    'SDG 13: Climate Action',
    'SDG 15: Life on Land',
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
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
    <footer className="bg-gradient-to-br from-[#0f2412] via-[#1e4620] to-[#1a3a1f] text-white border-t-4 border-accent/30">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/cad-logo.jpg"
                alt="CAD Malawi Logo"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/30"
              />
              <h3 className="text-xl font-bold">CAD Malawi</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Building resilient communities through sustainable solutions in renewable energy, agriculture, and environmental conservation.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <Heart className="h-5 w-5" />
              <span className="text-sm font-medium">Empowering Communities Since 2022</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-300 hover:text-accent transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all mr-0 group-hover:mr-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SDG Alignment & Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">SDG Alignment</h4>
            <div className="space-y-2 mb-6">
              {sdgs.map((sdg, index) => (
                <div key={index} className="text-sm text-gray-300 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {sdg}
                </div>
              ))}
            </div>
            
            <div className="space-y-2 pt-4 border-t border-white/10">
              <a href="mailto:chimbayokondwan@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors text-sm">
                <Mail className="h-4 w-4" />
                chimbayokondwan@gmail.com
              </a>
              <a href="tel:+265999750595" className="flex items-center gap-2 text-gray-300 hover:text-accent transition-colors text-sm">
                <Phone className="h-4 w-4" />
                +265 999 750 595
              </a>
              <div className="flex items-center gap-2 text-gray-300 text-sm">
                <MapPin className="h-4 w-4" />
                Lilongwe, Malawi
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Community Action for Development (CAD). All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Registered NGO in Malawi • Making Impact Since 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
