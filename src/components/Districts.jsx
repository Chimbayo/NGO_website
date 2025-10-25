import { MapPin } from 'lucide-react'
import { Card, CardContent } from './ui/card'

const Districts = () => {
  const districts = [
    {
      name: 'Lilongwe',
      description: 'Capital city operations and central region coordination',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Mchinji',
      description: 'Cross-border agricultural programs and community development',
      image: '/cad-logo.jpg',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Kasungu',
      description: 'Reforestation and sustainable agriculture initiatives',
      image: '/cad-logo.jpg',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      name: 'Dedza',
      description: 'Climate-smart agriculture and renewable energy projects',
      image: '/cad-logo.jpg',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Mzimba',
      description: 'Northern region environmental conservation programs',
      image: '/cad-logo.jpg',
      gradient: 'from-indigo-500 to-blue-600'
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-lg sm:text-xl font-extrabold text-primary mb-6 text-balance">
            Districts We Operate In
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
            CAD Malawi operates across 5 districts, bringing sustainable development solutions to communities throughout Malawi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {districts.map((district, index) => (
            <Card
              key={index}
              className="group bg-white backdrop-blur-md border-2 border-gray-200 hover:bg-white hover:border-accent transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-accent/20 overflow-hidden"
            >
              <CardContent className="pt-12 pb-8 text-center">
                <div className={`w-14 h-14 bg-gradient-to-br ${district.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-800 mb-4 group-hover:text-accent transition-colors duration-300">
                  {district.name}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {district.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Districts
