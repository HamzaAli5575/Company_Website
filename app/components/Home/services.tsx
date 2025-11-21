"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Shield, FileCheck, Lock, Award } from 'lucide-react'

interface Service {
  id: number
  number: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  image: string
}

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const services: Service[] = [
    {
      id: 1,
      number: "01",
      title: "GRC Governance, Risk and Compliance",
      description: "Comprehensive governance, risk, and compliance solutions covering ISO standards, HIPAA, HITRUST, GDPR, and more. We help you establish robust compliance frameworks aligned with global security standards and regulatory requirements.",
      icon: FileCheck,
      image: "/images/services-home/ITconsultancy.jpg"
    },
    {
      id: 2,
      number: "02",
      title: "Security Assessment Service",
      description: "In-depth security assessments including vulnerability assessments, penetration testing, source code reviews, and social engineering tests. Our expert team identifies security gaps and provides actionable recommendations to strengthen your security posture.",
      icon: Shield,
      image: "/images/services-home/conformancevalidation.jpg"
    },
    {
      id: 3,
      number: "03",
      title: "Managed Security Services",
      description: "Strategic security solutions featuring Virtual CISO services and VAPT as a service. Get dedicated security leadership and continuous vulnerability assessments tailored to your organization's needs and risk profile.",
      icon: Lock,
      image: "/images/services-home/conformancevalidation.jpg"
    },
    {
      id: 4,
      number: "04",
      title: "Auditing and Certification",
      description: "Professional auditing and certification services for ISO standards, HIPAA, HITRUST, SOC 1/2/3, PCI DSS, and GDPR. We ensure your organization achieves and maintains certification through expert guidance and comprehensive audit support.",
      icon: Award,
      image: "/images/services-home/network.jpg"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentService = services[currentSlide]
  const IconComponent = currentService.icon

  return (
    <section className="py-8 relative overflow-hidden min-h-screen flex flex-col bg-black">
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

      <div className="container mx-auto px-2 sm:px-4 relative z-10 flex-1 flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            OUR <span className="text-red-600">SERVICES</span>
          </h2>
          <p className="text-white max-w-3xl mx-auto text-sm sm:text-base leading-relaxed px-2 font-medium">
            Comprehensive security and compliance solutions tailored to your organization. From governance frameworks to 
            security assessments, auditing, and certification support—we help you build a secure and compliant foundation.
          </p>
        </div>

        {/* Main Slider Container */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            
            {/* Left Side - Service Content */}
            <div className="order-2 lg:order-1">
              <div className="p-3 sm:p-4 lg:p-6 bg-black/95 backdrop-blur-sm border border-red-600/50 rounded-xl shadow-2xl">
                {/* Service Number */}
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mr-3 sm:mr-4 shadow-lg transform transition-all duration-500 hover:scale-110">
                    <span className="text-white font-bold text-lg sm:text-xl">{currentService.number}</span>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-500 hover:scale-110">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight drop-shadow-lg">
                  {currentService.title}
                </h3>

                {/* Service Description */}
                <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 drop-shadow-md font-medium">
                  {currentService.description}
                </p>

                {/* Service Navigation */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    {services.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 sm:h-3 rounded-full transition-all duration-300 shadow-lg transform hover:scale-125 ${
                          index === currentSlide 
                            ? 'bg-red-600 w-4 sm:w-6 lg:w-8 animate-pulse' 
                            : 'bg-gray-600 hover:bg-gray-500 w-2 sm:w-3'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-black/95 backdrop-blur-sm hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 group shadow-lg transform hover:scale-110 border border-red-600/50"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 group-hover:text-white" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-black/95 backdrop-blur-sm hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 group shadow-lg transform hover:scale-110 border border-red-600/50"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 group-hover:text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Service Image */}
            <div className="order-1 lg:order-2">
              <div className="relative mx-4 sm:mx-0">
                <div className="bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-lg sm:rounded-xl p-1 transform transition-all duration-500 hover:scale-105 border border-red-600/50">
                  <div className="bg-black/95 backdrop-blur-sm rounded-lg sm:rounded-xl overflow-hidden border border-red-600/30">
                    <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
                      <Image
                        src={currentService.image || "/placeholder.svg?height=350&width=500&query=security+services"}
                        alt={currentService.title}
                        fill
                        className="object-cover transition-all duration-700 transform hover:scale-110"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                      
                      {/* Overlay Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                        <div className="flex items-center justify-between text-white">
                          <div>
                            <div className="text-red-600 font-semibold text-xs mb-1">
                              SERVICE {currentService.number}
                            </div>
                            <div className="text-sm sm:text-lg font-bold line-clamp-1">
                              {currentService.title}
                            </div>
                          </div>
                          <div className="text-red-600 text-xs shrink-0 ml-2">
                            {currentSlide + 1} / {services.length}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-12 h-12 sm:w-16 sm:h-16 bg-red-600/20 rounded-full blur-xl animate-pulse hidden sm:block"></div>
                <div className="absolute -bottom-2 -left-2 w-16 h-16 sm:w-20 sm:h-20 bg-red-600/15 rounded-full blur-2xl animate-pulse delay-150 hidden sm:block"></div>
              </div>
            </div>
          </div>

          {/* Service Counter */}
          <div className="flex justify-center mt-6 sm:mt-8 px-4">
            <div className="bg-black/95 backdrop-blur-sm border border-red-600/50 rounded-full px-3 sm:px-4 py-1 sm:py-2">
              <div className="text-white text-xs font-medium">
                <span className="text-red-600">{String(currentSlide + 1).padStart(2, '0')}</span>
                <span className="text-gray-400 mx-1">/</span>
                <span className="text-white">{String(services.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
