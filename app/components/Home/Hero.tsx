"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url('/images/Hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className="absolute inset-0 z-0" style={{
        background: `radial-gradient(circle at center, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)`
      }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="relative flex items-center justify-center min-h-[72vh]">
          <div className="w-full max-w-4xl z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-transparent"
            >
              <h1 
                className="text-5xl md:text-6xl leading-tight text-white font-bold mb-6"
                style={{
                  textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.6)'
                }}
              >
                Horizon Tech Services - The Digital Fortress
              </h1>

              <p 
                className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed"
                style={{
                  textShadow: '0 2px 10px rgba(0,0,0,0.7)'
                }}
              >
                <span className="text-white font-semibold">Advanced cybersecurity solutions</span> to protect your business from evolving threats. From <span className="text-red-400 font-medium">vulnerability assessments</span> to <span className="text-red-400 font-medium">24/7 monitoring</span> — we safeguard your digital assets with cutting-edge security technologies.
              </p>

              <div className="flex gap-4 justify-center flex-wrap">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-red-600/50"
                >
                  Let us Talk!
                </Link>
                <Link 
                  href="/services" 
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right bottom stats card */}
          <div className="absolute right-4 bottom-4 z-20 hidden lg:block">
            <div className="stats-card p-4 w-64 bg-black/80 border border-red-600/30 text-white rounded-lg shadow-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-red-600">500+</div>
              <div className="text-sm font-medium text-white">Threats Neutralized</div>
              <div className="mt-2 text-xs text-gray-400">
                Trusted by enterprises worldwide to defend against cyber attacks and data breaches.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
