import { useState, useEffect } from 'react'
import { Users, Calendar, Target, Globe, Sprout, Battery, TrendingUp, Database, Megaphone, X, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const About = () => {
  const [showStaff, setShowStaff] = useState(false)
  const [showDistricts, setShowDistricts] = useState(false)
  const [showSDGs, setShowSDGs] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentDistrictSlide, setCurrentDistrictSlide] = useState(0)
  const [currentSDGSlide, setCurrentSDGSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isDistrictPlaying, setIsDistrictPlaying] = useState(true)
  const [isSDGPlaying, setIsSDGPlaying] = useState(true)

  const stats = [
    { icon: Globe, number: '5', label: 'Districts Operating', clickable: true },
    { icon: Users, number: '7', label: 'Staff & Volunteers', clickable: true },
    { icon: Calendar, number: '2023', label: 'Year Registered' },
    { icon: Target, number: '6', label: 'SDGs Aligned', clickable: true },
  ]

  const staffPositions = [
    {
      title: 'Executive Director',
      name: 'Dr. Kondwani Chimbayo',
      department: 'Leadership',
      icon: Users,
      image: '/CEO.jpg',
      description: 'Provides strategic leadership and oversees all organizational operations and programs.',
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Programs Director',
      department: 'Management',
      icon: TrendingUp,
      image: '/CEO.jpg',
      description: 'Oversees implementation of all projects and ensures program quality and impact.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Renewable Energy Specialist',
      department: 'Technical',
      icon: Battery,
      image: '/CEO.jpg',
      description: 'Leads renewable energy projects and provides technical expertise on clean energy solutions.',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      title: 'Environmental Scientist',
      department: 'Technical',
      icon: Sprout,
      image: '/CEO.jpg',
      description: 'Manages reforestation initiatives and develops sustainable forest management practices.',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Agriculture Extension Officer',
      name: 'Mr. Dalitso Chriford',
      department: 'Technical',
      icon: Sprout,
      image: '/Agr-ex-Officer.jpg',
      description: 'Provides technical support to farmers and implements climate-smart agriculture programs.',
      gradient: 'from-lime-500 to-green-600',
    },
    {
      title: 'Community Mobilization Officer',
      department: 'Field Operations',
      icon: Megaphone,
      image: '/CEO.jpg',
      description: 'Engages with local communities and facilitates grassroots participation in projects.',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'IT/Data Officer',
      name: 'Mr. Peter Chimbayo',
      department: 'Support',
      icon: Database,
      image: '/IT-team-leader.jpg',
      description: 'Manages information systems, databases, and provides technical support for operations.',
      gradient: 'from-slate-500 to-gray-700',
    },
  ]

  const districts = ['Lilongwe', 'Mchinji', 'Kasungu', 'Dedza', 'Mzimba']
  const sdgs = [
    { number: 2, title: 'Zero Hunger', description: 'Strengthening food security and household incomes through sustainable agriculture and climate-resilient techniques.' },
    { number: 7, title: 'Affordable & Clean Energy', description: 'Promoting clean and affordable energy alternatives to increase adoption of renewable energy technologies in rural Malawi.' },
    { number: 8, title: 'Decent Work & Economic Growth', description: 'Creating green enterprises offering sustainable livelihoods and facilitating market linkages for farmers.' },
    { number: 12, title: 'Responsible Consumption & Production', description: 'Encouraging sustainable use of forests, soils, and water resources through community-led conservation.' },
    { number: 13, title: 'Climate Action', description: 'Reducing carbon emissions and climate vulnerability through reforestation and climate-smart technologies.' },
    { number: 15, title: 'Life on Land', description: 'Supporting reforestation, restoring degraded lands, and promoting sustainable forest management practices.' },
  ]

  // Auto-play slideshow for Staff
  useEffect(() => {
    if (!showStaff || !isPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % staffPositions.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [showStaff, isPlaying, staffPositions.length])

  // Auto-play slideshow for Districts
  useEffect(() => {
    if (!showDistricts || !isDistrictPlaying) return
    
    const interval = setInterval(() => {
      setCurrentDistrictSlide((prev) => (prev + 1) % districts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [showDistricts, isDistrictPlaying, districts.length])

  // Auto-play slideshow for SDGs
  useEffect(() => {
    if (!showSDGs || !isSDGPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSDGSlide((prev) => (prev + 1) % sdgs.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [showSDGs, isSDGPlaying, sdgs.length])

  // Reset slide when Staff modal opens and prevent body scroll
  useEffect(() => {
    if (showStaff) {
      setCurrentSlide(0)
      setIsPlaying(true)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showStaff])

  // Reset slide when Districts modal opens and prevent body scroll
  useEffect(() => {
    if (showDistricts) {
      setCurrentDistrictSlide(0)
      setIsDistrictPlaying(true)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showDistricts])

  // Reset slide when SDGs modal opens and prevent body scroll
  useEffect(() => {
    if (showSDGs) {
      setCurrentSDGSlide(0)
      setIsSDGPlaying(true)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showSDGs])

  // Staff navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % staffPositions.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + staffPositions.length) % staffPositions.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Districts navigation
  const nextDistrictSlide = () => {
    setCurrentDistrictSlide((prev) => (prev + 1) % districts.length)
  }

  const prevDistrictSlide = () => {
    setCurrentDistrictSlide((prev) => (prev - 1 + districts.length) % districts.length)
  }

  const goToDistrictSlide = (index) => {
    setCurrentDistrictSlide(index)
  }

  // SDGs navigation
  const nextSDGSlide = () => {
    setCurrentSDGSlide((prev) => (prev + 1) % sdgs.length)
  }

  const prevSDGSlide = () => {
    setCurrentSDGSlide((prev) => (prev - 1 + sdgs.length) % sdgs.length)
  }

  const goToSDGSlide = (index) => {
    setCurrentSDGSlide(index)
  }

  return (
    <section id="about" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 text-balance">
            About CAD Malawi
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-7 animate-slide-in-left">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              <strong className="text-primary font-bold">Community Action for Development (CAD)</strong> is a Malawian non-governmental organization established in 2022 and registered by the Malawi government in 2023. Stationed in Lilongwe, CAD addresses the intertwined challenges of energy poverty, food insecurity, and environmental degradation that trap communities in cycles of poverty, resource depletion, and vulnerability to climate change.
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              We believe that community-driven, innovative, and sustainable solutions are critical for building resilience and reducing poverty. Guided by integrity, inclusivity, and innovation, we empower communities to secure livelihoods, conserve natural resources, and promote green growth for present and future generations.
            </p>

            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-l-4 border-primary p-7 rounded-r-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                To build a Malawi where every community thrives in dignity, resilience, and sustainability through innovative solutions that reduce poverty, protect the environment, and secure livelihoods for future generations.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {stats.map((stat, index) => (
              <Card
                key={index}
                onClick={() => {
                  if (stat.clickable) {
                    if (stat.label === 'Staff & Volunteers') setShowStaff(true)
                    else if (stat.label === 'Districts Operating') setShowDistricts(true)
                    else if (stat.label === 'SDGs Aligned') setShowSDGs(true)
                  }
                }}
                className={`group text-center bg-white/95 backdrop-blur-md border-2 border-gray-200 hover:bg-white hover:border-accent transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-accent/30 overflow-hidden relative ${
                  stat.clickable ? 'cursor-pointer' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-700" />
                <CardContent className="pt-8 pb-8 relative z-10">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary via-accent to-primary rounded-full mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                    <stat.icon className="h-12 w-12 text-white" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-semibold uppercase tracking-wide">
                    {stat.label}
                  </div>
                  {stat.clickable && (
                    <div className="text-xs text-accent font-semibold mt-2">Click to view</div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Staff Modal/Overlay */}
        {showStaff && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9999] animate-fade-in" onClick={() => setShowStaff(false)}>
            <div className="w-full h-screen flex flex-col bg-gray-50 pt-20" onClick={(e) => e.stopPropagation()}>
              {/* Header - Always Visible */}
              <div className="bg-gradient-to-r from-primary to-accent px-3 py-4 flex items-center justify-between shadow-2xl flex-shrink-0 w-full">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white truncate">Our Team</h3>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowStaff(false)
                  }}
                  className="text-white hover:bg-white/30 bg-white/10 rounded-full h-14 w-14 transition-all duration-300 hover:rotate-90 hover:scale-110 flex-shrink-0 ml-2 sm:ml-4 border-2 border-white/30"
                  aria-label="Close staff modal"
                >
                  <X className="h-8 w-8 stroke-[3]" />
                </Button>
              </div>

              {/* Staff Slideshow */}
              <div className="flex-1 relative flex items-center justify-center py-4 px-2 overflow-y-auto">
                {/* Main Slide */}
                <div className="relative w-full flex items-center justify-center">
                  <div className="flex transition-transform duration-700 ease-in-out w-full" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {staffPositions.map((position, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2 flex items-center justify-center">
                        <div className="max-w-3xl w-full">
                          <Card className="bg-white border-2 border-gray-200 shadow-2xl flex flex-col md:flex-row">
                            {/* Staff Image Header */}
                            <div className="md:w-1/2 h-48 sm:h-56 md:h-auto relative overflow-hidden bg-gray-100">
                              <img 
                                src={position.image} 
                                alt={position.title}
                                className="w-full h-full object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                              <div className="absolute top-4 left-4">
                                <Badge className="shadow-lg bg-white/95 text-primary border-0 font-semibold text-sm" variant="secondary">
                                  {position.department}
                                </Badge>
                              </div>
                              <div className={`absolute bottom-4 right-4 p-3 bg-gradient-to-br ${position.gradient} rounded-xl shadow-xl`}>
                                <position.icon className="h-6 w-6 text-white" />
                              </div>
                            </div>

                            {/* Content Section */}
                            <div className="md:w-1/2 flex flex-col justify-center p-4 sm:p-6">
                              <div className="text-center md:text-left">
                                {position.name && (
                                  <div className="text-primary font-extrabold text-lg sm:text-xl md:text-2xl mb-2 leading-tight">
                                    {position.name}
                                  </div>
                                )}
                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 leading-snug">
                                  {position.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
                                  {position.description}
                                </p>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-xl rounded-full h-12 w-12 sm:h-14 sm:w-14 z-20"
                >
                  <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-xl rounded-full h-12 w-12 sm:h-14 sm:w-14 z-20"
                >
                  <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </Button>

                {/* Side Indicators */}
                <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
                  {staffPositions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-primary scale-150' 
                          : 'bg-gray-400 hover:bg-gray-600'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Play/Pause Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-white shadow-xl rounded-full h-10 w-10 sm:h-12 sm:w-12 z-20"
                >
                  {isPlaying ? <Pause className="h-4 w-4 sm:h-5 sm:w-5 text-primary" /> : <Play className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Districts Operating Modal */}
        {showDistricts && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9999] animate-fade-in" onClick={() => setShowDistricts(false)}>
            <div className="w-full h-screen flex flex-col bg-gray-50 pt-20" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gradient-to-r from-primary to-accent px-3 py-4 flex items-center justify-between shadow-2xl flex-shrink-0 w-full">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white truncate">Districts Operating</h3>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowDistricts(false)
                  }}
                  className="text-white hover:bg-white/30 bg-white/10 rounded-full h-14 w-14 transition-all duration-300 hover:rotate-90 hover:scale-110 flex-shrink-0 ml-2 sm:ml-4 border-2 border-white/30"
                  aria-label="Close districts modal"
                >
                  <X className="h-8 w-8 stroke-[3]" />
                </Button>
              </div>

              {/* Districts Slideshow */}
              <div className="flex-1 relative flex items-center justify-center py-4 px-2 overflow-y-auto">
                {/* Main Slide */}
                <div className="relative w-full flex items-center justify-center">
                  <div className="flex transition-transform duration-700 ease-in-out w-full" style={{ transform: `translateX(-${currentDistrictSlide * 100}%)` }}>
                    {districts.map((district, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2 flex items-center justify-center">
                        <div className="max-w-2xl w-full">
                          <Card className="bg-white border-2 border-gray-200 shadow-2xl">
                            <CardHeader className="text-center py-12">
                              <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                                <Globe className="h-16 w-16 text-white" />
                              </div>
                              <CardTitle className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{district}</CardTitle>
                              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
                                Active projects in renewable energy, reforestation, and climate-smart agriculture.
                              </p>
                            </CardHeader>
                          </Card>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevDistrictSlide}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-xl rounded-full h-12 w-12 sm:h-14 sm:w-14 z-20"
                >
                  <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextDistrictSlide}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-xl rounded-full h-12 w-12 sm:h-14 sm:w-14 z-20"
                >
                  <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </Button>

                {/* Side Indicators */}
                <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
                  {districts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToDistrictSlide(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                        index === currentDistrictSlide 
                          ? 'bg-primary scale-150' 
                          : 'bg-gray-400 hover:bg-gray-600'
                      }`}
                      aria-label={`Go to district ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Play/Pause Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsDistrictPlaying(!isDistrictPlaying)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-white shadow-xl rounded-full h-10 w-10 sm:h-12 sm:w-12 z-20"
                >
                  {isDistrictPlaying ? <Pause className="h-4 w-4 sm:h-5 sm:w-5 text-primary" /> : <Play className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* SDGs Aligned Modal */}
        {showSDGs && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9999] animate-fade-in" onClick={() => setShowSDGs(false)}>
            <div className="w-full h-screen flex flex-col bg-gray-50 pt-20" onClick={(e) => e.stopPropagation()}>
              <div className="bg-gradient-to-r from-primary to-accent px-3 py-4 flex items-center justify-between shadow-2xl flex-shrink-0 w-full">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white truncate">SDGs Aligned</h3>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowSDGs(false)
                  }}
                  className="text-white hover:bg-white/30 bg-white/10 rounded-full h-14 w-14 transition-all duration-300 hover:rotate-90 hover:scale-110 flex-shrink-0 ml-2 sm:ml-4 border-2 border-white/30"
                  aria-label="Close SDGs modal"
                >
                  <X className="h-8 w-8 stroke-[3]" />
                </Button>
              </div>

              {/* SDGs Slideshow */}
              <div className="flex-1 relative flex items-center justify-center py-4 px-2 overflow-y-auto">
                {/* Main Slide */}
                <div className="relative w-full flex items-center justify-center">
                  <div className="flex transition-transform duration-700 ease-in-out w-full" style={{ transform: `translateX(-${currentSDGSlide * 100}%)` }}>
                    {sdgs.map((sdg, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2 flex items-center justify-center">
                        <div className="max-w-2xl w-full">
                          <Card className="bg-white border-2 border-gray-200 shadow-2xl">
                            <CardHeader className="text-center py-12">
                              <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                                <span className="text-5xl font-extrabold text-white">{sdg.number}</span>
                              </div>
                              <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">{sdg.title}</CardTitle>
                              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto px-4">
                                {sdg.description}
                              </p>
                            </CardHeader>
                          </Card>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevSDGSlide}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-xl rounded-full h-12 w-12 sm:h-14 sm:w-14 z-20"
                >
                  <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextSDGSlide}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-xl rounded-full h-12 w-12 sm:h-14 sm:w-14 z-20"
                >
                  <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </Button>

                {/* Side Indicators */}
                <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
                  {sdgs.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSDGSlide(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                        index === currentSDGSlide 
                          ? 'bg-primary scale-150' 
                          : 'bg-gray-400 hover:bg-gray-600'
                      }`}
                      aria-label={`Go to SDG ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Play/Pause Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSDGPlaying(!isSDGPlaying)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 hover:bg-white shadow-xl rounded-full h-10 w-10 sm:h-12 sm:w-12 z-20"
                >
                  {isSDGPlaying ? <Pause className="h-4 w-4 sm:h-5 sm:w-5 text-primary" /> : <Play className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default About
