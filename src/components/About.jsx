import { useNavigate } from 'react-router-dom'
import { Users, Calendar, Target, Globe } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const About = () => {
  const navigate = useNavigate()

  const stats = [
    { icon: Globe, number: '5', label: 'Districts Operating', clickable: true, route: '/about/districts' },
    { icon: Users, number: '7', label: 'Staff & Volunteers', clickable: true, route: '/about/staff' },
    { icon: Calendar, number: '2023', label: 'Year Registered' },
    { icon: Target, number: '6', label: 'SDGs Aligned', clickable: true, route: '/about/sdgs' },
  ]

  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 text-balance">
            About CAD Malawi
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-7 animate-slide-in-left">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              <strong className="text-primary font-bold">Community Action for Development (CAD)</strong> is a Malawian non-governmental organization established in 2022 and registered by the Malawi government in 2023. Stationed in Lilongwe, CAD addresses the intertwined challenges of energy poverty, food insecurity, and environmental degradation that trap communities in cycles of poverty, resource depletion, and vulnerability to climate change.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              We believe that community-driven, innovative, and sustainable solutions are critical for building resilience and reducing poverty. Guided by integrity, inclusivity, and innovation, we empower communities to secure livelihoods, conserve natural resources, and promote green growth for present and future generations.
            </p>

            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-l-4 border-primary p-7 rounded-r-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                To build a Malawi where every community thrives in dignity, resilience, and sustainability through innovative solutions that reduce poverty, protect the environment, and secure livelihoods for future generations.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {stats.map((stat, index) => (
              <Card
                key={index}
                onClick={() => {
                  if (stat.clickable && stat.route) {
                    navigate(stat.route)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                className={`group text-center bg-white/95 backdrop-blur-md border-2 border-gray-200 hover:bg-white hover:border-accent transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-accent/30 overflow-hidden relative ${
                  stat.clickable ? 'cursor-pointer' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-700" />
                <CardContent className="pt-8 pb-8 relative z-10">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary via-accent to-primary rounded-full mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                    <stat.icon className="h-12 w-12 text-white" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-semibold uppercase tracking-wide">
                    {stat.label}
                  </div>
                  {stat.clickable && (
                    <div className="text-xs text-accent font-semibold mt-2">Click to view</div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
