import { Users, Calendar, Target, Globe } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const About = () => {
  const stats = [
    { icon: Globe, number: '5', label: 'Districts Operating' },
    { icon: Users, number: '7', label: 'Staff & Volunteers' },
    { icon: Calendar, number: '2022', label: 'Year Established' },
    { icon: Target, number: '6', label: 'SDGs Aligned' },
  ]

  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wide uppercase">
              Who We Are
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 text-balance">
            About CAD Malawi
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-7 animate-slide-in-left">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              <strong className="text-primary font-bold">Community Action for Development (CAD)</strong> is a Malawian non-governmental organization established in 2022, dedicated to addressing the interconnected challenges of energy poverty, food insecurity, and environmental degradation.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              We believe that community-driven, innovative, and sustainable solutions are critical for building resilience and reducing poverty. Guided by integrity, inclusivity, and innovation, we empower communities to secure livelihoods, conserve natural resources, and promote green growth.
            </p>

            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-l-4 border-primary p-7 rounded-r-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">Our Vision</h3>
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
                className="group text-center bg-white/95 backdrop-blur-md border-2 border-gray-200 hover:bg-white hover:border-accent transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-accent/30 overflow-hidden relative"
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
