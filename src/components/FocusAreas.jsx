import { Zap, TreePine, Wheat } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

const FocusAreas = () => {
  const focusAreas = [
    {
      icon: Zap,
      title: 'Renewable Energy & Climate Action',
      description: 'Promoting clean and affordable energy alternatives while raising awareness on climate-smart technologies and practices.',
      sdgs: ['SDG 7: Clean Energy', 'SDG 13: Climate Action'],
      image: '/energy.jpg',
      gradient: 'from-yellow-500/20 to-orange-500/20',
    },
    {
      icon: TreePine,
      title: 'Environmental Conservation',
      description: 'Supporting reforestation and community-led conservation initiatives, encouraging sustainable use of forests, soils, and water resources.',
      sdgs: ['SDG 15: Life on Land', 'SDG 12: Responsible Consumption'],
      image: '/trees.jpg',
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: Wheat,
      title: 'Sustainable Agriculture',
      description: 'Strengthening smallholder farmer enterprises with climate-resilient techniques and facilitating market linkages and value chain development.',
      sdgs: ['SDG 2: Zero Hunger', 'SDG 8: Decent Work'],
      image: '/agri.jpg',
      gradient: 'from-lime-500/20 to-green-500/20',
    },
  ]

  return (
    <section id="focus" className="py-16 md:py-20 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wide uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 text-balance">
            Our Focus Areas
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
            Transforming communities through three interconnected pillars of sustainable development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-white backdrop-blur-md border-2 border-gray-200 hover:bg-white hover:border-primary transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${area.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/70 transition-all duration-700" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary via-accent to-primary rounded-full mb-6 mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                    <area.icon className="h-12 w-12 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl text-white group-hover:text-accent transition-colors duration-300 leading-tight">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <CardDescription className="text-gray-100 text-center leading-relaxed text-sm sm:text-base">
                    {area.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 pt-3">
                    {area.sdgs.map((sdg, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-white/95 text-primary hover:bg-accent hover:text-white font-semibold transition-all duration-300 shadow-md"
                      >
                        {sdg}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FocusAreas
