"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Award, Compass, Users, Zap } from 'lucide-react'

const WHY_ITEMS = [
  { title: 'Strive for Excellence', Icon: Award, desc: 'We pursue the highest standards in everything we do.' },
  { title: 'Serve with Integrity', Icon: Compass, desc: 'Honesty, transparency and accountability guide our actions.' },
  { title: 'Strength from Diversity', Icon: Users, desc: 'Different perspectives make our solutions stronger.' },
  { title: 'Strategic Thinking', Icon: Zap, desc: 'We plan ahead and design security with purpose.' },
  { title: 'Innovative Solutions', Icon: Award, desc: 'We embrace creativity to solve complex challenges.' },
  { title: 'Customer-Centric Approach', Icon: Compass, desc: 'Our clients are at the heart of everything we do.' },
]

const WhyChooseUs: React.FC = () => {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + WHY_ITEMS.length) % WHY_ITEMS.length)
  const next = () => setIndex((i) => (i + 1) % WHY_ITEMS.length)

  const { title, Icon, desc } = WHY_ITEMS[index]

  return (
    <section className="relative py-20 bg-black min-h-screen flex flex-col">
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

      <div className="container mx-auto px-2 sm:px-4 relative z-10 flex-1 flex flex-col">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            WHY CHOOSE <span className="text-red-600">US</span>
          </h2>
          <p className="text-white max-w-3xl mx-auto text-sm sm:text-base leading-relaxed px-2 font-medium">
            We secure organizations end-to-end — protecting people, systems and data so businesses can operate with
            confidence. Our services cover threat assessments, secure architecture, incident response and compliance.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto flex items-center justify-center flex-1">
          <button aria-label="Previous" onClick={prev} className="-mr-6 md:-mr-12 p-2 md:p-3 rounded-full bg-black/95 backdrop-blur-sm hover:bg-red-600 transition-all duration-300 shadow-lg border border-red-600/50">
            <ChevronLeft className="w-5 h-5 text-red-600 hover:text-white" />
          </button>

          <div className="mx-6 md:mx-12">
            <div className="relative group">
              <div className="rounded-lg w-64 h-64 md:w-80 md:h-80 bg-black/95 backdrop-blur-sm border-2 border-red-600/50 flex flex-col items-center justify-center text-center p-6 mx-auto transition-transform duration-400 transform hover:scale-105 shadow-2xl hover:border-red-400 hover:bg-black/80">
                <div className="absolute inset-0 -z-10 rounded-lg bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.08)_0%,transparent_40%)]" />
                <div className="relative rounded-lg w-28 h-28 md:w-32 md:h-32 flex items-center justify-center bg-gradient-to-br from-red-600 to-red-800 text-white shadow-inner mb-4 transform transition-all duration-300 group-hover:scale-110 ring-1 ring-white/10 overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute left-[-120%] top-0 w-[300%] h-full bg-linear-to-r from-white/70 via-white/30 to-transparent opacity-60 -rotate-12 animate-shine" />
                  </div>
                  <Icon className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <h3 className="text-white font-bold text-lg md:text-xl leading-snug drop-shadow-lg group-hover:text-red-300 transition-colors duration-300">{title}</h3>
                <p className="text-white text-sm md:text-base mt-2 max-w-56 mx-auto font-medium group-hover:text-red-100 transition-colors duration-300">{desc}</p>
              </div>

              <div className="absolute -inset-6 md:-inset-8 rounded-lg pointer-events-none opacity-60">
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

          <button aria-label="Next" onClick={next} className="-ml-6 md:-ml-12 p-2 md:p-3 rounded-full bg-black/95 backdrop-blur-sm hover:bg-red-600 transition-all duration-300 shadow-lg border border-red-600/50">
            <ChevronRight className="w-5 h-5 text-red-600 hover:text-white" />
          </button>
        </div>

        <div className="flex items-center justify-center space-x-2 mt-8">
          {WHY_ITEMS.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)} 
              aria-label={`Go to ${i + 1}`} 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-red-600 w-3' : 'bg-gray-600 hover:bg-gray-500'}`} 
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shine { 0% { transform: translateX(0%) rotate(-12deg); } 100% { transform: translateX(100%) rotate(-12deg); } }
        .animate-shine { animation: shine 2.6s linear infinite; }
      `}</style>
    </section>
  )
}

export default WhyChooseUs
