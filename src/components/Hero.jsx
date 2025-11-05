import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = ['/home.jpeg', '/slide.jpeg', '/slide1.jpg']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const handleLearnMore = (e) => {
    e.preventDefault()
    const valuesSection = document.querySelector('#values')
    if (valuesSection) {
      const offset = 80
      const elementPosition = valuesSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
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
        <div className="max-w-5xl mx-auto space-y-6 animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.15] text-balance">
            Building Resilient
            <span className="block bg-gradient-to-r from-accent via-green-400 to-accent bg-clip-text text-transparent mt-3">
              Communities
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
            Empowering Malawian communities through sustainable energy, agriculture, and environmental conservation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
            <Button
              size="default"
              onClick={handleLearnMore}
              className="group bg-gradient-to-r from-primary via-accent to-primary bg-size-200 hover:bg-pos-100 text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-500 hover:scale-105 border-2 border-white/30"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="default"
              variant="outline"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group bg-white/10 backdrop-blur-md border-2 border-white/60 text-white hover:bg-white hover:text-primary font-bold text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-5 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Involved
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-[10]">
        <div className="w-7 h-11 border-2 border-white/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/5">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero
