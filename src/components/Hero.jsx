import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = ['/home.jpeg', '/slide.jpeg', '/slide1.jpg']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const handleLearnMore = () => {
    navigate('/values')
  }

  const handleGetInvolved = () => {
    navigate('/contact')
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Sliding Background Images */}
      {images.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: currentImageIndex === index ? 1 : 0
          }}
        />
      ))}
      
      {/* Enhanced Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75 z-[2]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse z-[3]" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse z-[3]" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-[10] container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-[1.15] text-balance text-white">
            Building Resilient Communities
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
            Empowering Malawian communities through sustainable energy, agriculture, and environmental conservation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6 pointer-events-auto">
            <Button
              size="default"
              onClick={handleLearnMore}
              className="group cursor-pointer bg-gradient-to-r from-primary via-accent to-primary bg-size-200 hover:bg-pos-100 text-white font-bold text-sm sm:text-base px-4 sm:px-5 py-3 sm:py-4 rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-500 hover:scale-105 border-2 border-white/30"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="default"
              variant="outline"
              onClick={handleGetInvolved}
              className="group cursor-pointer bg-white/10 backdrop-blur-md border-2 border-white/60 text-white hover:bg-white hover:text-primary font-bold text-sm sm:text-base px-4 sm:px-5 py-3 sm:py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Involved
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
