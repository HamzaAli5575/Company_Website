"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Award, Shield, CheckCircle, Star } from 'lucide-react'

const SignificantPartners = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const partners = [
    { name: 'P@SHA', logo: '/images/Accreditations/pasha.png', description: 'Pakistan Software Houses Association' },
    { name: 'PSEB', logo: '/images/Accreditations/PSEB.png', description: 'Pakistan Software Export Board' },
    { name: 'SECP', logo: '/images/Accreditations/SECP.png', description: 'Securities and Exchange Commission of Pakistan' },
    { name: 'Internet Society', logo: '/images/Accreditations/internet-society.png', description: 'Global Internet Standards Organization' },
    { name: 'ISO - 27001 : 2022', logo: '/images/Accreditations/iso.png', description: 'International Organization for Standardization' },
    { name: 'ICCI', logo: '/images/Accreditations/ICCI.png', description: 'Islamabad Chamber of Commerce and Industry' },
  ]

  const duplicatedPartners = [...partners, ...partners]

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prev) => (prev + 1) % partners.length)
      }
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isHovered, partners.length])

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
            <span className="text-red-600">ACCREDITATIONS</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mt-6">
            Trusted by leading organizations and regulatory bodies in Pakistans cybersecurity landscape
          </p>
        </div>

        {/* Partners Carousel Container */}
        <div 
          className="relative overflow-hidden flex-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Moving Partners Strip */}
          <div 
            className={`flex space-x-8 transition-transform duration-500 ease-in-out ${isHovered ? '' : 'animate-scroll-horizontal'}`}
            style={{
              transform: isHovered ? 'translateX(0)' : `translateX(-${activeIndex * 100}%)`,
              width: '200%'
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className={`shrink-0 group transition-all duration-500 ${index === activeIndex ? 'scale-105' : 'scale-100'}`}
                onMouseEnter={() => setActiveIndex(index % partners.length)}
              >
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Partner Card */}
                  <div className="relative bg-white backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 shadow-2xl hover:shadow-red-600/20 transition-all duration-500 hover:scale-105 w-64 h-48 flex flex-col items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        fill
                        className="object-contain transition-all duration-500 group-hover:scale-110"
                        priority
                      />
                    </div>
                    
                    {/* Partner Badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Partner Name and Description */}
                  <div className="text-center mt-4 px-4">
                    <h3 className="text-white font-bold text-lg group-hover:text-red-400 transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors duration-300">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur-xl opacity-20"></div>
            <div className="relative bg-black/80 backdrop-blur-xl border border-red-600/30 rounded-full px-8 py-3">
              <p className="text-gray-300 text-base font-medium">
                Recognized accreditations and certifications from organizations that validate our security capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-gradient-to-r from-red-600 to-red-800 w-12 shadow-lg shadow-red-600/50' 
                  : 'bg-gray-700 hover:bg-gray-600 w-2'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-horizontal {
          animation: scroll-horizontal 30s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default SignificantPartners