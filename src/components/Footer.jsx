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
    <footer className="bg-gradient-to-br from-[#0f2412] via-[#1e4620] to-[#1a3a1f] text-white border-t-4 border-accent/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-16 mb-12">
          {/* About Section */}
          <div className="space-y-5">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/cad-logo.jpg"
                alt="CAD Malawi Logo"
                className="h-16 w-16 rounded-full object-cover ring-4 ring-white/30 shadow-lg"
              />
              <h3 className="text-2xl font-extrabold">CAD Malawi</h3>
            </div>
            <p className="text-gray-200 leading-relaxed text-base">
              Building resilient communities through sustainable solutions in renewable energy, agriculture, and environmental conservation.
            </p>
            <div className="flex items-center gap-3 text-accent bg-white/5 p-3 rounded-lg backdrop-blur-sm">
              <Heart className="h-6 w-6 flex-shrink-0" />
              <span className="text-sm font-bold">Empowering Communities Since 2022</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-extrabold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-200 hover:text-accent transition-all duration-300 inline-flex items-center group font-medium text-base"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-accent transition-all duration-300 mr-0 group-hover:mr-3 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SDG Alignment & Contact */}
          <div>
            <h4 className="text-xl font-extrabold mb-6 text-accent">SDG Alignment</h4>
            <div className="space-y-3 mb-8">
              {sdgs.map((sdg, index) => (
                <div key={index} className="text-sm text-gray-200 flex items-center gap-3 font-medium">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                  {sdg}
                </div>
              ))}
            </div>
            
            <div className="space-y-3 pt-6 border-t-2 border-white/20">
              <a href="mailto:chimbayokondwan@gmail.com" className="flex items-center gap-3 text-gray-200 hover:text-accent transition-all duration-300 text-sm group">
                <Mail className="h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium">chimbayokondwan@gmail.com</span>
              </a>
              <a href="tel:+265999750595" className="flex items-center gap-3 text-gray-200 hover:text-accent transition-all duration-300 text-sm group">
                <Phone className="h-5 w-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium">+265 999 750 595</span>
              </a>
              <div className="flex items-center gap-3 text-gray-200 text-sm">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium">Lilongwe, Malawi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-white/20 pt-10 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-300 text-sm text-center md:text-left font-medium">
              &copy; {currentYear} Community Action for Development (CAD). All rights reserved.
            </p>
            <p className="text-gray-300 text-sm text-center md:text-right font-medium">
              Registered NGO in Malawi • Making Impact Since 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
