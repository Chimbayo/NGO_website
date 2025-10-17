import { Users, Sprout, Battery, TrendingUp, Database, Megaphone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

const Staff = () => {
  const staffPositions = [
    {
      title: 'Executive Director',
      department: 'Leadership',
      icon: Users,
      image: '/CEO.jpg',
      description: 'Provides strategic leadership and oversees all organizational operations and programs.',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Programs Director',
      department: 'Management',
      icon: TrendingUp,
      image: '/CEO.jpg',
      description: 'Oversees implementation of all projects and ensures program quality and impact.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Renewable Energy Specialist',
      department: 'Technical',
      icon: Battery,
      image: '/CEO.jpg',
      description: 'Leads solar installation projects and provides technical expertise on clean energy solutions.',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      title: 'Environmental Scientist',
      department: 'Technical',
      icon: Sprout,
      image: '/CEO.jpg',
      description: 'Manages reforestation initiatives and develops sustainable forest management practices.',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Community Mobilization Officer',
      department: 'Field Operations',
      icon: Megaphone,
      image: '/CEO.jpg',
      description: 'Engages with local communities and facilitates grassroots participation in projects.',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'IT/Database Officer',
      department: 'Support',
      icon: Database,
      image: '/IT-team-leader.jpg',
      description: 'Manages information systems, databases, and provides technical support for operations.',
      gradient: 'from-slate-500 to-gray-700',
    },
  ]

  return (
    <section id="staff" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 text-balance">
            Our Team
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
            Meet the dedicated professionals driving positive change in communities across Malawi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffPositions.map((position, index) => (
            <Card
              key={index}
              className="group bg-white backdrop-blur-md border-2 border-gray-200 hover:bg-white hover:border-primary transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
            >
              {/* Staff Image Header */}
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={position.image} 
                  alt={position.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="shadow-lg" variant="secondary">
                    {position.department}
                  </Badge>
                </div>
                <div className={`absolute bottom-4 right-4 p-3 bg-gradient-to-br ${position.gradient} rounded-full shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <position.icon className="h-6 w-6 text-white" />
                </div>
              </div>

              <CardHeader className="text-center pb-3">
                <CardTitle className="text-lg sm:text-xl md:text-2xl group-hover:text-primary transition-colors duration-300 leading-tight">
                  {position.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-700 text-center leading-relaxed text-sm sm:text-base">
                  {position.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Staff
