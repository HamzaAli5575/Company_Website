"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Shield, FileCheck, Lock, Award, ArrowRight, Zap, Globe, Cpu, BarChart3, Users, TrendingUp } from 'lucide-react'

interface Service {
  id: number
  number: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  image: string
  features: string[]
  stats: { label: string; value: string }[]
}

interface Particle {
  id: number
  left: number
  top: number
  animationDelay: number
  animationDuration: number
}

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const services: Service[] = [
    {
      id: 1,
      number: "01",
      title: "GRC Governance, Risk and Compliance",
      description: "Comprehensive governance, risk, and compliance solutions covering ISO standards, HIPAA, HITRUST, GDPR, and more. We help you establish robust compliance frameworks aligned with global security standards and regulatory requirements.",
      icon: FileCheck,
      image: "/images/services-home/ITconsultancy.jpg",
      features: ["ISO 27001/27002", "HIPAA Compliance", "GDPR Implementation", "Risk Management"],
      stats: [
        { label: "Compliance Rate", value: "99.9%" },
        { label: "Certifications", value: "50+" },
        { label: "Industries Served", value: "5+" }
      ]
    },
    {
      id: 2,
      number: "02",
      title: "Security Assessment Service",
      description: "In-depth security assessments including vulnerability assessments, penetration testing, source code reviews, and social engineering tests. Our expert team identifies security gaps and provides actionable recommendations to strengthen your security posture.",
      icon: Shield,
      image: "/images/services-home/conformancevalidation.jpg",
      features: ["Vulnerability Assessment", "Penetration Testing", "Code Review", "Social Engineering"],
      stats: [
        { label: "Vulnerabilities Found", value: "10K+" },
        { label: "Success Rate", value: "98%" },
        { label: "Response Time", value: "<24h" }
      ]
    },
    {
      id: 3,
      number: "03",
      title: "Managed Security Services",
      description: "Strategic security solutions featuring Virtual CISO services and VAPT as a service. Get dedicated security leadership and continuous vulnerability assessments tailored to your organization's needs and risk profile.",
      icon: Lock,
      image: "/images/services-home/conformancevalidation.jpg",
      features: ["Virtual CISO", "24/7 Monitoring", "Incident Response", "Threat Intelligence"],
      stats: [
        { label: "Clients Protected", value: "500+" },
        { label: "Threats Blocked", value: "1M+" },
        { label: "Uptime", value: "99.99%" }
      ]
    },
    {
      id: 4,
      number: "04",
      title: "Auditing and Certification",
      description: "Professional auditing and certification services for ISO standards, HIPAA, HITRUST, SOC 1/2/3, PCI DSS, and GDPR. We ensure your organization achieves and maintains certification through expert guidance and comprehensive audit support.",
      icon: Award,
      image: "/images/services-home/network.jpg",
      features: ["ISO Audits", "SOC Reports", "PCI DSS", "Custom Audits"],
      stats: [
        { label: "Audits Completed", value: "1000+" },
        { label: "Certifications", value: "200+" },
        { label: "Client Satisfaction", value: "100%" }
      ]
    }
  ]

  // Predefined particles with fixed positions to avoid Math.random() during render
  const particles: Particle[] = [
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % services.length)
        setIsAnimating(false)
      }, 300)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
        setIsAnimating(false)
      }, 300)
    }
  }

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide(index)
        setIsAnimating(false)
      }, 300)
    }
  }

  const currentService = services[currentSlide]
  const IconComponent = currentService.icon

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <Image
          src="/images/Background1.png"
          alt="Background"
          fill
          className="object-cover opacity-30"
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

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        {/* Header with Basic Styling */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            OUR <span className="text-red-600">SERVICES</span>
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mt-6">
            Comprehensive security and compliance solutions tailored to your organization. From governance frameworks to 
            security assessments, auditing, and certification support—we help you build a secure and compliant foundation.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Enhanced Service Content */}
            <div className={`order-2 lg:order-1 transition-all duration-700 ${isAnimating ? 'opacity-0 transform translate-x-10' : 'opacity-100 transform translate-x-0'}`}>
              <div className="relative">
                {/* Glass morphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-red-800/10 backdrop-blur-xl rounded-3xl transform rotate-1"></div>
                
                <div className="relative bg-black/60 backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 md:p-10 shadow-2xl">
                  {/* Service Number and Icon */}
                  <div className="flex items-center mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-3">
                        <span className="text-white font-bold text-2xl">{currentService.number}</span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg animate-bounce">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                    {currentService.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {currentService.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {currentService.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 bg-red-600/10 rounded-lg px-3 py-2 border border-red-600/20 transform transition-all duration-300 hover:scale-105 hover:bg-red-600/20"
                      >
                        <Zap className="w-4 h-4 text-red-600" />
                        <span className="text-white text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {currentService.stats.map((stat, index) => (
                      <div
                        key={index}
                        className="text-center bg-gradient-to-b from-red-600/10 to-transparent rounded-xl p-3 border border-red-600/20"
                      >
                        <div className="text-2xl font-bold text-red-600">{stat.value}</div>
                        <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Enhanced Navigation */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {services.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`h-2 rounded-full transition-all duration-500 transform hover:scale-150 ${
                            index === currentSlide 
                              ? 'bg-gradient-to-r from-red-600 to-red-800 w-12 shadow-lg shadow-red-600/50' 
                              : 'bg-gray-700 hover:bg-gray-600 w-2'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={prevSlide}
                        className="group relative w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg"
                      >
                        <ChevronLeft className="w-5 h-5 text-white group-hover:-translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      </button>
                      <button
                        onClick={nextSlide}
                        className="group relative w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-rotate-12 shadow-lg"
                      >
                        <ChevronRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Image Display */}
            <div className={`order-1 lg:order-2 transition-all duration-700 ${isAnimating ? 'opacity-0 transform -translate-x-10' : 'opacity-100 transform translate-x-0'}`}>
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                  
                  {/* Image Frame */}
                  <div className="relative bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-3xl p-2 transform transition-all duration-500 hover:scale-105">
                    <div className="relative overflow-hidden rounded-2xl">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={currentService.image || "/placeholder.svg?height=400&width=600&query=security+services"}
                          alt={currentService.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-110"
                          priority
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                        
                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
                          {currentService.number}
                        </div>
                        
                        {/* Bottom Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center justify-between text-white">
                            <div className="flex-1">
                              <div className="text-red-400 text-sm font-semibold mb-2">SERVICE DETAILS</div>
                              <div className="text-xl font-bold">{currentService.title}</div>
                            </div>
                            <div className="ml-4">
                              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-red-600/30">
                                <ArrowRight className="w-6 h-6 text-red-600" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-600/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                
                {/* Floating Icons */}
                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 animate-bounce delay-500">
                  <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-red-600/30">
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div className="absolute top-1/3 -right-8 transform -translate-y-1/2 animate-bounce delay-700">
                  <div className="w-14 h-14 bg-red-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-red-600/30">
                    <Lock className="w-7 h-7 text-red-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Counter with Enhanced Design */}
          <div className="flex justify-center mt-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-black/80 backdrop-blur-xl border border-red-600/30 rounded-full px-8 py-3">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400 text-sm font-medium">SERVICE</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-red-600">{String(currentSlide + 1).padStart(2, '0')}</span>
                    <span className="text-gray-500 text-xl">/</span>
                    <span className="text-2xl font-bold text-white">{String(services.length).padStart(2, '0')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services