import { useState } from 'react'
import { MapPin, Globe, Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { CustomSelect } from './ui/custom-select'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Headquarters',
      content: 'Lilongwe, Malawi',
      gradient: 'from-primary to-accent',
    },
    {
      icon: Globe,
      title: 'Operating Areas',
      content: 'Lilongwe, Mchinji, Kasungu, Dedza, Mzimba',
      gradient: 'from-accent to-primary',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'chimbayokondwani@gmail.com',
      gradient: 'from-primary via-accent to-primary',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+265 999 750 595 / +265 888 604 068',
      gradient: 'from-secondary to-primary',
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setShowError(false)
    setShowSuccess(false)
    
    // EmailJS configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    
    // Log configuration status (without exposing sensitive data)
    console.log('EmailJS Configuration Check:')
    console.log('Service ID present:', !!serviceId)
    console.log('Template ID present:', !!templateId)
    console.log('Public Key present:', !!publicKey)
    
    // Check if EmailJS is configured
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing!')
      console.error('Missing:', {
        serviceId: !serviceId,
        templateId: !templateId,
        publicKey: !publicKey
      })
      setErrorMessage('Email service is not configured. Please contact the administrator.')
      setShowError(true)
      setIsSubmitting(false)
      return
    }
    
    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'chimbayokondwan@gmail.com',
    }
    
    try {
      // Send email using EmailJS
      console.log('Attempting to send email via EmailJS...')
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      
      // Success
      console.log('✓ Email sent successfully!')
      console.log('Response:', response)
      console.log('Timestamp:', new Date().toISOString())
      
      setIsSubmitting(false)
      setShowSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    } catch (error) {
      // Detailed error logging for production debugging
      console.error('=== EMAIL SEND ERROR ===')
      console.error('Error Type:', error.name)
      console.error('Error Message:', error.message)
      console.error('Error Status:', error.status)
      console.error('Error Text:', error.text)
      console.error('Full Error Object:', error)
      console.error('Timestamp:', new Date().toISOString())
      console.error('========================')
      
      setIsSubmitting(false)
      
      // Provide detailed error message to user
      let userMessage = 'Failed to send message. '
      if (error.text) {
        userMessage += `Error: ${error.text}. `
      } else if (error.message) {
        userMessage += `Error: ${error.message}. `
      }
      userMessage += 'Please try again or contact us directly via email.'
      
      setErrorMessage(userMessage)
      setShowError(true)
      
      // Hide error message after 7 seconds
      setTimeout(() => {
        setShowError(false)
      }, 7000)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-lg sm:text-xl font-extrabold text-primary mb-6 text-balance">
            Get In Touch
          </h2>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-base sm:text-lg">
            Have questions or want to get involved? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-primary mb-8">Contact Information</h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="group bg-white backdrop-blur-md border-2 border-gray-200 hover:bg-white hover:border-primary transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/20"
                  >
                    <CardContent className="flex items-start gap-5 p-7">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-700`}>
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">{info.title}</h4>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{info.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional Info Card */}
            <Card className="bg-gradient-to-br from-primary via-primary to-secondary text-white border-0 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl sm:text-2xl font-extrabold">Join Our Mission</CardTitle>
                <CardDescription className="text-gray-100 text-sm sm:text-base">
                  Partner with us to create lasting change in Malawian communities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Partnership Opportunities</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Volunteer Programs</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Donation Support</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50/30">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-extrabold text-primary">Send us a Message</CardTitle>
              <CardDescription className="text-sm sm:text-base text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 animate-fade-in">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-medium">Message sent successfully!</p>
                    <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {showError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 animate-fade-in">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-medium">Error sending message</p>
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g Mapiri chimbayo"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g mapiri@gmail.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <CustomSelect
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Select a subject"
                    options={[
                      { value: '', label: 'Select a subject' },
                      { value: 'partnership', label: 'Partnership Opportunities' },
                      { value: 'volunteering', label: 'Volunteering' },
                      { value: 'donations', label: 'Donations & Support' },
                      { value: 'projects', label: 'Project Information' },
                      { value: 'media', label: 'Media Inquiry' },
                      { value: 'other', label: 'Other' }
                    ]}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Please tell us how we can help you..."
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold text-base sm:text-lg py-5 sm:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact
