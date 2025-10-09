import { Battery, Sprout, Leaf, MapPin } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

const Projects = () => {
  const projects = [
    {
      icon: Battery,
      badge: 'Clean Energy',
      title: 'Solar Power Initiative',
      location: 'Lilongwe District',
      description: 'Installing solar panels in rural schools and health centers, providing reliable electricity to over 1,200 beneficiaries and improving access to essential services.',
      gradient: 'from-yellow-400 to-orange-500',
      stats: { beneficiaries: '1,200+', installations: '15' },
    },
    {
      icon: Sprout,
      badge: 'Reforestation',
      title: 'Community Forest Restoration',
      location: 'Mchinji & Kasungu',
      description: 'Working with local communities to plant indigenous trees, restore degraded lands, and establish sustainable forest management practices.',
      gradient: 'from-green-400 to-emerald-600',
      stats: { trees: '50,000+', hectares: '200' },
    },
    {
      icon: Leaf,
      badge: 'Agriculture',
      title: 'Climate-Smart Farming',
      location: 'Dedza District',
      description: 'Training smallholder farmers in drought-resistant crops, organic farming techniques, and water conservation methods to improve food security.',
      gradient: 'from-lime-400 to-green-600',
      stats: { farmers: '500+', villages: '12' },
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wide uppercase">
              Our Impact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 text-balance">
            Our Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
            Transforming communities through impactful initiatives across Malawi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-white backdrop-blur-md border-2 border-gray-200 hover:bg-white hover:border-primary transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
            >
              {/* Icon Header with Gradient */}
              <div className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-500" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                <project.icon className="h-28 w-28 text-white relative z-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 drop-shadow-2xl" />
              </div>

              <CardHeader className="text-center">
                <Badge className="w-fit mb-3 shadow-md mx-auto" variant="secondary">
                  {project.badge}
                </Badge>
                <CardTitle className="text-xl sm:text-2xl md:text-3xl group-hover:text-primary transition-colors duration-300 leading-tight">
                  {project.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-gray-600 mt-2 justify-center">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-xs sm:text-sm font-semibold">{project.location}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-5">
                <CardDescription className="text-gray-700 text-center leading-relaxed text-sm sm:text-base">
                  {project.description}
                </CardDescription>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 pt-5 border-t-2 border-gray-100">
                  {Object.entries(project.stats).map(([key, value], idx) => (
                    <div key={idx} className="text-center p-3 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-500">
                      <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{value}</div>
                      <div className="text-[10px] sm:text-xs text-gray-600 capitalize font-semibold mt-1">{key}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
