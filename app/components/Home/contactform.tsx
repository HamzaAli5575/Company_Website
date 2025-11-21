"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Mail, User, Building, MessageSquare, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '-'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '-'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '-'

      // Check if EmailJS is properly configured
      if (templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS not properly configured. Please set up Template ID and Public Key.')
      }

      const templateParams = {
        name: formData.name, // Matches {{name}} in your template
        email: formData.email, // Customer's email
        company: formData.companyName, // Company name
        message: formData.message, // Matches {{message}} in your template
        time: new Date().toLocaleString(), // Matches {{time}} in your template
        reply_to: formData.email
      }

      console.log('Sending email with params:', templateParams)
      
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      console.log('Email sent successfully:', response)
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        companyName: '',
        message: ''
      })
    } catch (error) {
      console.error('Email sending failed:', error)
      if (error instanceof Error) {
        console.error('Error message:', error.message)
      }
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative w-full py-12 min-h-screen flex flex-col bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Background1.png"
          alt="Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-2xl">
              SEND US A <span className="text-red-600">MESSAGE</span>
            </h2>
            <p className="text-white text-lg leading-relaxed drop-shadow-md max-w-2xl mx-auto">
              Ready to secure your business? Fill out the form below and our cybersecurity experts will get back to you promptly.
            </p>
          </div>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg text-green-300 text-center backdrop-blur-sm">
              Message sent successfully! We&apos;ll get back to you within 24 hours.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-lg text-red-300 text-center backdrop-blur-sm">
              ❌ Failed to send message. Please try again or contact us directly.
            </div>
          )}

          {/* Contact Form */}
          <div className="bg-black/95 backdrop-blur-sm border border-red-600/50 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            {/* Decorative background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-red-700/10 rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-600/20 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-red-700/20 to-transparent rounded-tr-full"></div>
            
            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Name Field */}
                  <div className="space-y-3">
                    <label htmlFor="name" className="flex items-center text-white font-semibold text-sm tracking-wide">
                      <User className="w-5 h-5 mr-3 text-red-400" />
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-3 bg-black/70 border border-red-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:border-red-500/70 text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-3">
                    <label htmlFor="email" className="flex items-center text-white font-semibold text-sm tracking-wide">
                      <Mail className="w-5 h-5 mr-3 text-red-400" />
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-3 bg-black/70 border border-red-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:border-red-500/70 text-base"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Company Name Field */}
                <div className="space-y-3">
                  <label htmlFor="companyName" className="flex items-center text-white font-semibold text-sm tracking-wide">
                    <Building className="w-5 h-5 mr-3 text-red-400" />
                    COMPANY NAME
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-3 bg-black/70 border border-red-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:border-red-500/70 text-base"
                    placeholder="Enter your company name"
                  />
                </div>

                {/* Message/Query Field */}
                <div className="space-y-3">
                  <label htmlFor="message" className="flex items-center text-white font-semibold text-sm tracking-wide">
                    <MessageSquare className="w-5 h-5 mr-3 text-red-400" />
                    MESSAGE / QUERY
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-5 py-3 bg-black/70 border border-red-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 backdrop-blur-sm transition-all duration-300 hover:bg-black/60 hover:border-red-500/70 resize-none text-base"
                    placeholder="Tell us about your cybersecurity needs or ask any questions..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-red-600/50 disabled:to-red-700/50 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:scale-100 disabled:cursor-not-allowed flex items-center space-x-2 text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-red-600/50 text-center">
                <p className="text-gray-300 text-sm leading-relaxed">
                  We typically respond within <span className="text-red-400 font-semibold">24 hours</span>. 
                  <br />For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-700/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm