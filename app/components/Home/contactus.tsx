"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { MapPin, Mail, Phone, Linkedin, Twitter, Send, Clock, Globe, HeadphonesIcon } from 'lucide-react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  // Predefined particles with fixed positions to avoid Math.random() during render
  const particles = [
    { id: 1, left: 10, top: 15, animationDelay: 0.5, animationDuration: 3 },
    { id: 2, left: 20, top: 25, animationDelay: 1.0, animationDuration: 4 },
    { id: 3, left: 30, top: 35, animationDelay: 1.5, animationDuration: 5 },
    { id: 4, left: 40, top: 45, animationDelay: 2.0, animationDuration: 3.5 },
    { id: 5, left: 50, top: 55, animationDelay: 2.5, animationDuration: 4.5 },
    { id: 6, left: 60, top: 65, animationDelay: 3.0, animationDuration: 5.5 },
    { id: 7, left: 70, top: 75, animationDelay: 3.5, animationDuration: 3.2 },
    { id: 8, left: 80, top: 85, animationDelay: 4.0, animationDuration: 4.2 },
    { id: 9, left: 90, top: 5, animationDelay: 4.5, animationDuration: 5.2 },
    { id: 10, left: 15, top: 10, animationDelay: 0.2, animationDuration: 3.8 },
    { id: 11, left: 25, top: 20, animationDelay: 0.7, animationDuration: 4.8 },
    { id: 12, left: 35, top: 30, animationDelay: 1.2, animationDuration: 5.8 },
    { id: 13, left: 45, top: 40, animationDelay: 1.7, animationDuration: 3.3 },
    { id: 14, left: 55, top: 50, animationDelay: 2.2, animationDuration: 4.3 },
    { id: 15, left: 65, top: 60, animationDelay: 2.7, animationDuration: 5.3 },
    { id: 16, left: 75, top: 70, animationDelay: 3.2, animationDuration: 3.7 },
    { id: 17, left: 85, top: 80, animationDelay: 3.7, animationDuration: 4.7 },
    { id: 18, left: 5, top: 90, animationDelay: 4.2, animationDuration: 5.7 },
    { id: 19, left: 95, top: 15, animationDelay: 0.3, animationDuration: 3.4 },
    { id: 20, left: 12, top: 42, animationDelay: 0.8, animationDuration: 4.4 }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Thank you for your message! We will get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1500)
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <Image
          src="/images/Background1.png"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-red-600 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.animationDelay}s`,
                animationDuration: `${particle.animationDuration}s`
              }}
            />
          ))}
        </div>

        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            GET IN <span className="text-red-600">TOUCH</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mt-6">
            Have questions about our cybersecurity services? Reach out to our team of experts and lets discuss how we can help secure your digital assets.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Side - Contact Image & Form */}
            <div className="order-1 lg:order-1">
              {/* Contact Image */}
              <div className="relative mb-8 group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                
                {/* Image Frame */}
                <div className="relative bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-3xl p-2 transform transition-all duration-500 hover:scale-105">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="/images/contact.jpg"
                        alt="Contact Us"
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        priority
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
                        24/7 SUPPORT
                      </div>
                      
                      {/* Bottom Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="text-white">
                          <div className="text-red-400 text-sm font-semibold mb-2">READY TO GET STARTED?</div>
                          <div className="text-xl font-bold mb-1">Lets Secure Your Future</div>
                          <div className="text-gray-300 text-sm">Professional cybersecurity solutions tailored for your business</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="relative">
                {/* Glass morphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-red-800/10 backdrop-blur-xl rounded-3xl transform rotate-1"></div>
                
                <div className="relative bg-black/60 backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                  
                  {submitMessage ? (
                    <div className="bg-green-600/20 border border-green-600/50 rounded-lg p-4 mb-6">
                      <p className="text-green-400">{submitMessage}</p>
                    </div>
                  ) : null}
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-red-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:bg-black/70 transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black/50 border border-red-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:bg-black/70 transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/50 border border-red-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:bg-black/70 transition-all duration-300"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-black/50 border border-red-600/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:bg-black/70 transition-all duration-300 resize-none"
                        placeholder="Tell us more about your requirements..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Information */}
            <div className="order-2 lg:order-2 space-y-8">
              {/* Contact Information Cards */}
              <div className="relative">
                {/* Glass morphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-red-800/10 backdrop-blur-xl rounded-3xl transform rotate-1"></div>
                
                <div className="relative bg-black/60 backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-red-300 transition-colors duration-300">ADDRESS</h4>
                        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          Horizon Tech Services, 3rd Floor - NSTP Building NUST,<br />
                          Khyber Rd, H-12, Islamabad.
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-red-300 transition-colors duration-300">EMAIL</h4>
                        <a
                          href="mailto:pmo@horizon.com.pk"
                          className="text-gray-300 text-sm hover:text-red-400 transition-colors duration-300"
                        >
                          pmo@horizon.com.pk
                        </a>
                      </div>
                    </div>

                    {/* Telephone */}
                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-red-300 transition-colors duration-300">TELEPHONE</h4>
                        <a
                          href="tel:+92514912185"
                          className="text-gray-300 text-sm hover:text-red-400 transition-colors duration-300"
                        >
                          051-8896702
                        </a>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-all duration-300 group-hover:rotate-3">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-red-300 transition-colors duration-300">BUSINESS HOURS</h4>
                        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="relative">
                {/* Glass morphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-red-800/10 backdrop-blur-xl rounded-3xl transform rotate-1"></div>
                
                <div className="relative bg-black/60 backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Follow Us On Social Media</h3>
                  
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/company/85086768/admin/dashboard/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:rotate-3"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                      <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </a>
                    <a
                      href="#"
                      className="group relative w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:rotate-3"
                    >
                      <Twitter className="w-5 h-5 text-white" />
                      <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </a>
                    <a
                      href="#"
                      className="group relative w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:rotate-3"
                    >
                      <Globe className="w-5 h-5 text-white" />
                      <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </a>
                    <a
                      href="#"
                      className="group relative w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:rotate-3"
                    >
                      <HeadphonesIcon className="w-5 h-5 text-white" />
                      <div className="absolute inset-0 bg-white rounded-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </a>
                  </div>
                  
                  <p className="text-gray-300 text-sm mt-6">
                    Stay updated with our latest cybersecurity insights and service offerings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs