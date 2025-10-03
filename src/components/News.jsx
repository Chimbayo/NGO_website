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
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Latest News & Updates
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Stay informed about our latest achievements and community impact
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50"
            >
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-14 h-14 ${item.bgColor} rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`h-7 w-7 ${item.color}`} />
                </div>
                <Badge className="w-fit mb-2" variant="outline">
                  {item.category}
                </Badge>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-gray-700 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </CardDescription>
                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto font-semibold text-primary hover:text-accent"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group">
            View All News
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default News
