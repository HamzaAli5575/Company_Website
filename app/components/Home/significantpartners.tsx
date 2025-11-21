"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const SignificantPartners = () => {
  const [isHovered, setIsHovered] = useState(false)

  const partners = [
    { name: 'P@SHA', logo: '/images/Accreditations/pasha.png' },
    { name: 'PSEB', logo: '/images/Accreditations/PSEB.png' },
    { name: 'SECP', logo: '/images/Accreditations/SECP.png' },
    { name: 'Internet Society', logo: '/images/Accreditations/internet-society.png' },
    { name: 'ISO - 27001 : 2022', logo: '/images/Accreditations/iso.png' },
    { name: 'ICCI', logo: '/images/Accreditations/ICCI.png' },
  ]

  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-16 relative overflow-hidden bg-black min-h-screen flex flex-col">
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

      <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-red-600">ACCREDITATIONS</span>
          </h2>
          <p className="text-white max-w-3xl mx-auto text-lg leading-relaxed font-medium">
            Trusted by leading organizations and regulatory bodies in Pakistan&apos;s cybersecurity landscape
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
            className={`flex space-x-8 partners-strip ${isHovered ? 'paused' : 'running'}`}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="shrink-0 group"
              >
                <div className="bg-white backdrop-blur-sm border-2 border-red-600/50 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-black/80 hover:border-red-400 w-64 h-40 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain transition-all duration-300"
                      priority
                    />
                  </div>
                </div>
                {/* Partner Name */}
                <div className="text-center mt-4">
                  <p className="text-white font-medium text-sm group-hover:text-red-600 transition-colors duration-300">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-white text-base font-medium">
            Recognized accreditations and certifications from organizations that validate our security capabilities.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .partners-strip {
          width: calc(200% + 2rem);
          animation: scroll-horizontal 30s linear infinite;
          animation-fill-mode: forwards;
        }

        .partners-strip.paused {
          animation-play-state: paused;
        }

        .partners-strip.running {
          animation-play-state: running;
        }
      `}</style>
    </section>
  )
}

export default SignificantPartners
