"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// High-quality cybersecurity background images
const backgroundImages = [
  '/images/HeroSection2.jpeg', // Local high-quality image 2
  '/images/Herosection1.jpeg', // Local high-quality image 1 (note lowercase 'h')
  '/images/HeroSection3.jpeg'  // Local high-quality image 3
]

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  
  const [currentBgIndex, setCurrentBgIndex] = useState(0) // Start with first local image
  const backgroundImage = backgroundImages[currentBgIndex]
  
  // Log current image info
  console.log(`Current background index: ${currentBgIndex}, Image: ${backgroundImage}, Total images: ${backgroundImages.length}`)

  // Animate text on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Rotate background images every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % backgroundImages.length
        console.log(`Cycling from image ${prevIndex} to ${nextIndex}:`, backgroundImages[nextIndex])
        return nextIndex
      })
    }, 15000) // Back to 15 seconds
    return () => clearInterval(interval)
  }, [])

  const features = [
    "Cybersecurity Excellence",
    "Innovative Technology Solutions",
    "Expert IT Consulting",
    "24/7 Security Monitoring"
  ]

  return (
  <section role="region" aria-label="Hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image with Video-like Effect */}
      <div className="absolute inset-0 z-0">
        {/* Hero fallback gradient (visible while images load) */}
        <div className="absolute inset-0 hero-fallback"></div>
        {/* Animated CSS Background overlays */}
        <div className="absolute inset-0 cyber-background"></div>
        <div className="absolute inset-0 bg-linear-to-br from-gray-900/50 via-black/70 to-red-900/50 animate-gradient-shift" aria-hidden="true"></div>
        
        {/* Main Background Image with Video-like Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 animate-slow-zoom" style={{ willChange: 'transform, opacity' }}>
            <Image
              src={backgroundImage}
              alt="Cybersecurity Technology Background"
              fill
              sizes="100vw"
              className="object-cover"
              priority
              quality={90}
              onLoad={() => {
                console.log(`Image loaded successfully: ${backgroundImage}`)
                setImageLoaded(true)
              }}
              onError={(e) => {
                console.error(`Image failed to load: ${backgroundImage}`, e)
                console.error('Available images:', backgroundImages)
                setImageLoaded(false)
                // Try the next image if current one fails
                setTimeout(() => {
                  setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
                }, 1000)
              }}
            />
          </div>
          
          {/* Color overlay to enhance the video effect */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/20 via-transparent to-red-900/20 animate-pulse" aria-hidden="true"></div>
        </div>
        
        {/* Moving Overlay Layers for Video Effect */}
  <div className="absolute inset-0 bg-linear-to-br from-black/80 via-black/60 to-red-900/40" aria-hidden="true"></div>
        
        {/* Animated Tech Grid Overlay */}
  <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute inset-0 animate-grid-move" style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0),
              linear-gradient(90deg, rgba(239,68,68,0.1) 1px, transparent 1px),
              linear-gradient(rgba(239,68,68,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 40px 40px, 40px 40px',
          }}></div>
        </div>
        
        {/* Scanning Line Effect */}
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute w-full h-1 scan-line animate-scan-vertical"></div>
          <div className="absolute w-1 h-full scan-vertical animate-scan-horizontal opacity-80"></div>
        </div>
        
        {/* Floating Tech Elements */}
  <div className="absolute inset-0 opacity-40" aria-hidden="true">
          {/* Security Shield Icons */}
          <div className="absolute top-20 left-10 w-4 h-4 border-2 border-brand rounded animate-pulse"></div>
          <div className="absolute top-32 right-20 w-6 h-6 border border-[var(--accent)] rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-[var(--accent-2)] clip-path-triangle animate-bounce"></div>
          <div className="absolute bottom-60 right-1/3 w-4 h-4 floating-brand rounded-full animate-ping"></div>
          
          {/* Data Flow Lines */}
          <div className="absolute top-1/2 left-0 w-32 h-px scan-line animate-pulse"></div>
          <div className="absolute top-1/3 right-0 w-24 h-px bg-[linear-gradient(90deg,transparent,var(--accent),transparent)] animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Binary Code Effect */}
          <div className="absolute top-16 left-1/3 text-green-400 text-xs font-mono opacity-60 animate-pulse">01101001</div>
          <div className="absolute bottom-32 right-1/4 text-blue-400 text-xs font-mono opacity-60 animate-pulse" style={{ animationDelay: '2s' }}>11010011</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Ensuring{' '}
              <span className="text-transparent bg-clip-text text-brand-gradient animate-pulse">
                Security
              </span>
              <br />
              Inspiring{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                Innovation
              </span>
              <br />
              <span className="text-brand">Driving Trust</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}>
            <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto font-light">
              Leading the way in cybersecurity and technology solutions since 2005! 
              Transforming businesses through cutting-edge security and innovative IT services.
            </p>
          </div>

          {/* Features Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-2 mb-6 transition-all duration-1000 delay-700 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-md p-2.5 border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300 transform hover:scale-105 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <p className="text-white/90 group-hover:text-white font-medium text-xs leading-tight">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
            <div className={`flex justify-center items-center transition-all duration-1000 delay-900 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-20 opacity-0'
          }`}>
            <Link
              href="/services"
              aria-label="Get in touch - Horizon Tech"
                className="cta-primary inline-block px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Get In Touch
            </Link>
          </div>

        </div>
      </div>

      {/* Scroll Indicator - Outside content container */}
      <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1100 ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-20 opacity-0'
      }`}>
        <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-white/60 rounded-full mt-1.5 animate-bounce"></div>
        </div>
        <p className="text-white/60 text-xs mt-1 text-center">Scroll</p>
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      <style jsx>{`
        @keyframes slow-zoom {
          0% { 
            transform: scale(1.1) translate(0, 0); 
          }
          25% { 
            transform: scale(1.15) translate(-2%, -1%); 
          }
          50% { 
            transform: scale(1.12) translate(-1%, 2%); 
          }
          75% { 
            transform: scale(1.18) translate(1%, -1%); 
          }
          100% { 
            transform: scale(1.1) translate(0, 0); 
          }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(15px, 10px) rotate(1deg); }
          50% { transform: translate(30px, 20px) rotate(0deg); }
          75% { transform: translate(45px, 15px) rotate(-1deg); }
          100% { transform: translate(60px, 30px) rotate(0deg); }
        }
        
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite;
        }
        
        .animate-grid-move {
          animation: grid-move 25s linear infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(239, 68, 68, 0.8);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .clip-path-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        
        @keyframes scan-vertical {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes scan-horizontal {
          0% { transform: translateX(-100vw); }
          100% { transform: translateX(100vw); }
        }
        
        .animate-scan-vertical {
          animation: scan-vertical 8s ease-in-out infinite;
        }
        
        .animate-scan-horizontal {
          animation: scan-horizontal 12s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        @keyframes gradient-shift {
          0% {
            background: linear-gradient(135deg, #1f2937 0%, #000000 50%, #7f1d1d 100%);
          }
          25% {
            background: linear-gradient(135deg, #1e3a8a 0%, #000000 50%, #991b1b 100%);
          }
          50% {
            background: linear-gradient(135deg, #065f46 0%, #000000 50%, #7c2d12 100%);
          }
          75% {
            background: linear-gradient(135deg, #581c87 0%, #000000 50%, #dc2626 100%);
          }
          100% {
            background: linear-gradient(135deg, #1f2937 0%, #000000 50%, #7f1d1d 100%);
          }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 15s ease-in-out infinite;
        }

        /* Respect user preference to reduce motion: turn off decorative animations but keep slow-zoom for background movement */
        @media (prefers-reduced-motion: reduce) {
          .animate-grid-move,
          .animate-gradient-shift,
          .animate-scan-vertical,
          .animate-scan-horizontal,
          .animate-spin-slow { animation: none !important; }
        }
        
        .cyber-background {
          background: 
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
            linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #020617 50%, #450a0a 75%, #0f172a 100%);
          background-size: 100% 100%, 100% 100%, 100% 100%, 400% 400%;
          animation: cyber-bg-shift 25s ease-in-out infinite;
        }
        
        @keyframes cyber-bg-shift {
          0% { background-position: 0% 0%, 0% 0%, 0% 0%, 0% 50%; }
          25% { background-position: 100% 0%, 0% 100%, 100% 0%, 50% 50%; }
          50% { background-position: 100% 100%, 100% 0%, 0% 100%, 100% 50%; }
          75% { background-position: 0% 100%, 100% 100%, 100% 100%, 150% 50%; }
          100% { background-position: 0% 0%, 0% 0%, 0% 0%, 0% 50%; }
        }
      `}</style>
    </section>
  )
}

export default HeroSection