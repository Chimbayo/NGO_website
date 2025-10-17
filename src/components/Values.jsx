import { Shield, Lightbulb, Users, Scale } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const Values = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparency and accountability in all our operations and community engagements.',
      gradient: 'from-primary to-accent',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Applying practical, creative, and adaptive solutions to complex community challenges.',
      gradient: 'from-accent to-primary',
    },
    {
      icon: Users,
      title: 'Community Commitment',
      description: 'Ensuring inclusive participation and ownership at the grassroots level.',
      gradient: 'from-primary via-accent to-primary',
    },
    {
      icon: Scale,
      title: 'Equity & Inclusion',
      description: 'Promoting fairness and equal opportunity, especially for vulnerable groups.',
      gradient: 'from-secondary to-primary',
    },
  ]

  return (
    <section id="values" className="py-16 md:py-20 bg-gradient-to-br from-[#1e4620] via-primary to-[#3d6b42] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-balance">
            Our Core Values
          </h2>
          <p className="text-gray-100 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
            The principles that guide our work and define our commitment to communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-accent transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/30"
            >
              <CardHeader className="text-center">
                <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${value.gradient} rounded-full mb-6 mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700`}>
                  <value.icon className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl text-white group-hover:text-accent transition-colors duration-300 leading-tight">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-100 text-center leading-relaxed text-sm sm:text-base">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values
