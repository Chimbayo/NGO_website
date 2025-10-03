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
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Transforming communities through impactful initiatives across Malawi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary overflow-hidden bg-gradient-to-br from-white to-gray-50"
            >
              {/* Icon Header with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <project.icon className="h-24 w-24 text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>

              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">
                  {project.badge}
                </Badge>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">{project.location}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-gray-700 leading-relaxed">
                  {project.description}
                </CardDescription>

                {/* Project Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  {Object.entries(project.stats).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key}</div>
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
