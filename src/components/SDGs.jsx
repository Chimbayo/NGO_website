import { Target } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

const SDGs = () => {
  const sdgs = [
    { 
      number: 2, 
      title: 'Zero Hunger', 
      description: 'Strengthening food security and household incomes through sustainable agriculture and climate-resilient techniques.',
      color: 'bg-yellow-500',
      gradient: 'from-yellow-500 to-amber-600'
    },
    { 
      number: 7, 
      title: 'Affordable & Clean Energy', 
      description: 'Promoting clean and affordable energy alternatives to increase adoption of renewable energy technologies in rural Malawi.',
      color: 'bg-yellow-400',
      gradient: 'from-yellow-400 to-yellow-600'
    },
    { 
      number: 8, 
      title: 'Decent Work & Economic Growth', 
      description: 'Creating green enterprises offering sustainable livelihoods and facilitating market linkages for farmers.',
      color: 'bg-red-500',
      gradient: 'from-red-500 to-rose-600'
    },
    { 
      number: 12, 
      title: 'Responsible Consumption & Production', 
      description: 'Encouraging sustainable use of forests, soils, and water resources through community-led conservation.',
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-amber-600'
    },
    { 
      number: 13, 
      title: 'Climate Action', 
      description: 'Reducing carbon emissions and climate vulnerability through reforestation and climate-smart technologies.',
      color: 'bg-green-600',
      gradient: 'from-green-600 to-emerald-700'
    },
    { 
      number: 15, 
      title: 'Life on Land', 
      description: 'Supporting reforestation, restoring degraded lands, and promoting sustainable forest management practices.',
      color: 'bg-green-500',
      gradient: 'from-green-500 to-lime-600'
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 text-balance">
            Our SDG Alignment
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
            CAD Malawi's work directly contributes to 6 United Nations Sustainable Development Goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sdgs.map((sdg, index) => (
            <Card
              key={index}
              className="group bg-white backdrop-blur-md border-2 border-gray-200 hover:bg-white hover:border-primary transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
            >
              <div className="h-32 relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`p-6 bg-gradient-to-br ${sdg.gradient} rounded-full shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <Target className="h-12 w-12 text-white" />
                  </div>
                </div>
                <Badge className={`absolute top-4 left-4 ${sdg.color} text-white text-lg font-bold px-4 py-2`}>
                  SDG {sdg.number}
                </Badge>
              </div>

              <CardHeader className="text-center pb-3">
                <CardTitle className="text-lg sm:text-xl md:text-2xl group-hover:text-primary transition-colors duration-300 leading-tight">
                  {sdg.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-700 text-center leading-relaxed text-sm sm:text-base">
                  {sdg.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SDGs
