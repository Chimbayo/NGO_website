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
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About CAD
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong className="text-primary">Community Action for Development (CAD)</strong> is a Malawian non-governmental organization established in 2022, dedicated to addressing the interconnected challenges of energy poverty, food insecurity, and environmental degradation.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that community-driven, innovative, and sustainable solutions are critical for building resilience and reducing poverty. Guided by integrity, inclusivity, and innovation, we empower communities to secure livelihoods, conserve natural resources, and promote green growth.
            </p>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To build a Malawi where every community thrives in dignity, resilience, and sustainability through innovative solutions that reduce poverty, protect the environment, and secure livelihoods for future generations.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardContent className="pt-6 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
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
