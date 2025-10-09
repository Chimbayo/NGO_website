import { Calendar, ArrowRight, Award, Users, Lightbulb } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const News = () => {
  const newsItems = [
    {
      date: 'September 15, 2025',
      title: 'CAD Wins National Environmental Award',
      excerpt: 'Our reforestation project in Kasungu has been recognized with the prestigious National Environmental Excellence Award for outstanding contribution to forest restoration.',
      category: 'Achievement',
      icon: Award,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      date: 'August 28, 2025',
      title: 'New Partnership with Local Farmers Cooperative',
      excerpt: 'CAD announces strategic partnership with Dedza Farmers Cooperative to expand climate-smart agriculture training to 1,000 additional smallholder farmers.',
      category: 'Partnership',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      date: 'August 10, 2025',
      title: 'Solar Installation Milestone Reached',
      excerpt: 'Successfully completed installation of solar panels in 15 rural health centers, bringing clean energy to communities serving over 50,000 people.',
      category: 'Milestone',
      icon: Lightbulb,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ]

  return (
    <section id="news" className="py-16 md:py-20 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-5 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wide uppercase">
              Latest Updates
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 text-balance">
            Latest News & Updates
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
            Stay informed about our latest achievements and community impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="group bg-white backdrop-blur-md border-2 border-gray-200 hover:bg-white hover:border-primary transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/20"
            >
              <CardHeader className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 ${item.bgColor} rounded-full mb-5 mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-lg`}>
                  <item.icon className={`h-10 w-10 ${item.color}`} />
                </div>
                <Badge className="w-fit mb-3 shadow-sm mx-auto" variant="outline">
                  {item.category}
                </Badge>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 justify-center">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span className="font-medium">{item.date}</span>
                </div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-tight">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-5">
                <CardDescription className="text-gray-700 text-center leading-relaxed line-clamp-3 text-sm sm:text-base">
                  {item.excerpt}
                </CardDescription>
                <div className="flex justify-center">
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto font-bold text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="group border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            View All News
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default News
