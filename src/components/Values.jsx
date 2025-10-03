import { Shield, Lightbulb, Users, Scale } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

const Values = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparency and accountability in all our operations and community engagements.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Applying practical, creative, and adaptive solutions to complex community challenges.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Community Commitment',
      description: 'Ensuring inclusive participation and ownership at the grassroots level.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Scale,
      title: 'Equity & Inclusion',
      description: 'Promoting fairness and equal opportunity, especially for vulnerable groups.',
      gradient: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <section id="values" className="py-20 bg-gradient-to-br from-[#1e4620] via-primary to-[#3d6b42] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Core Values
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            The principles that guide our work and define our commitment to communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white/20 hover:border-accent/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent/20"
            >
              <CardHeader className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-full mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-accent transition-colors">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-200 text-center leading-relaxed">
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
