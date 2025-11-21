"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Award, Compass, Users, Zap, Shield, Target, TrendingUp } from 'lucide-react'

const WHY_ITEMS = [
  { title: 'Strive for Excellence', Icon: Award, desc: 'We pursue the highest standards in everything we do, ensuring exceptional quality in our cybersecurity solutions.' },
  { title: 'Serve with Integrity', Icon: Compass, desc: 'Honesty, transparency, and accountability guide our actions, building trust with every client we serve.' },
  { title: 'Strength from Diversity', Icon: Users, desc: 'Different perspectives make our solutions stronger, bringing innovative approaches to complex security challenges.' },
  { title: 'Strategic Thinking', Icon: Zap, desc: 'We plan ahead and design security with purpose, creating comprehensive protection for your digital assets.' },
  { title: 'Innovative Solutions', Icon: Shield, desc: 'We embrace creativity to solve complex challenges, developing cutting-edge approaches to cybersecurity.' },
  { title: 'Customer-Centric Approach', Icon: Target, desc: 'Our clients are at the heart of everything we do, ensuring solutions that align with your business goals.' },
]

const WhyChooseUs: React.FC = () => {
  const [index, setIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

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

  const prev = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setIndex((i) => (i - 1 + WHY_ITEMS.length) % WHY_ITEMS.length)
        setIsAnimating(false)
      }, 300)
    }
  }

  const next = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setIndex((i) => (i + 1) % WHY_ITEMS.length)
        setIsAnimating(false)
      }, 300)
    }
  }

  const goToSlide = (i: number) => {
    if (!isAnimating && i !== index) {
      setIsAnimating(true)
      setTimeout(() => {
        setIndex(i)
        setIsAnimating(false)
      }, 300)
    }
  }

  const { title, Icon, desc } = WHY_ITEMS[index]

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [index])

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

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16 flex flex-col min-h-screen">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            WHY CHOOSE <span className="text-red-600">US</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mt-6">
            We secure organizations end-to-end — protecting people, systems and data so businesses can operate with
            confidence. Our services cover threat assessments, secure architecture, incident response and compliance.
          </p>
        </div>

        <div className="relative flex-1 flex items-center justify-center">
          <button 
            aria-label="Previous" 
            onClick={prev} 
            className="group relative z-20 -mr-6 md:-mr-12 p-3 md:p-4 rounded-full bg-black/95 backdrop-blur-sm hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 transition-all duration-300 shadow-lg border border-red-600/50 transform hover:scale-110 hover:rotate-12"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-red-600 group-hover:text-white transition-colors" />
            <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>

          <div className="mx-6 md:mx-12 relative">
            {/* Main Card Container */}
            <div className={`relative transition-all duration-700 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
              {/* Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Glass morphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-red-800/10 backdrop-blur-xl rounded-3xl transform rotate-1"></div>
              
              {/* Main Card */}
              <div className="relative bg-black/60 backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 md:p-12 shadow-2xl w-80 h-80 md:w-96 md:h-96 flex flex-col items-center justify-center text-center mx-auto transition-all duration-500 hover:shadow-red-600/20">
                {/* Icon Container */}
                <div className="relative mb-6 group">
                  {/* Glow Effect for Icon */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  <div className="relative w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center text-white shadow-lg transform transition-all duration-500 hover:scale-110 hover:rotate-3 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute left-[-120%] top-0 w-[300%] h-full bg-gradient-to-r from-white/70 via-white/30 to-transparent opacity-60 -rotate-12 animate-shine"></div>
                    </div>
                    <Icon className="w-12 h-12 md:w-14 md:h-14" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-xl md:text-2xl mb-4 leading-tight group-hover:text-red-300 transition-colors duration-300">{title}</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xs mx-auto group-hover:text-white transition-colors duration-300">{desc}</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -inset-8 md:-inset-10 rounded-3xl pointer-events-none opacity-60">
                <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" aria-hidden>
                  <defs>
                    <radialGradient id="g1" cx="50%" cy="50%">
                      <stop offset="40%" stopColor="#dc2626" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect x="10" y="10" width="180" height="180" fill="none" stroke="url(#g1)" strokeWidth="1" strokeDasharray="1 6" />
                </svg>
              </div>
            </div>
          </div>

          <button 
            aria-label="Next" 
            onClick={next} 
            className="group relative z-20 -ml-6 md:-ml-12 p-3 md:p-4 rounded-full bg-black/95 backdrop-blur-sm hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 transition-all duration-300 shadow-lg border border-red-600/50 transform hover:scale-110 hover:-rotate-12"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-red-600 group-hover:text-white transition-colors" />
            <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center space-x-2 mt-12">
          {WHY_ITEMS.map((_, i) => (
            <button 
              key={i} 
              onClick={() => goToSlide(i)} 
              aria-label={`Go to ${i + 1}`} 
              className={`h-2 rounded-full transition-all duration-500 transform hover:scale-150 ${
                i === index 
                  ? 'bg-gradient-to-r from-red-600 to-red-800 w-12 shadow-lg shadow-red-600/50' 
                  : 'bg-gray-700 hover:bg-gray-600 w-2'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes shine {
          0% { transform: translateX(0%) rotate(-12deg); }
          100% { transform: translateX(100%) rotate(-12deg); }
        }
        .animate-shine { animation: shine 2.6s linear infinite; }
      `}</style>
    </section>
  )
}

export default WhyChooseUs