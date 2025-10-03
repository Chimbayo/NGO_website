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
    <section id="focus" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Focus Areas
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50"
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${area.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4 shadow-lg">
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-accent transition-colors">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-200 text-base leading-relaxed">
                    {area.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {area.sdgs.map((sdg, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-white/90 text-primary hover:bg-white font-medium"
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
