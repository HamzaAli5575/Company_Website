"use client"

import React from 'react'
import Image from 'next/image'
import { Shield, Users, Eye, HelpCircle, Building, Award } from 'lucide-react'

const About = () => {
  return (
    <section className="py-8 relative overflow-hidden min-h-screen flex flex-col bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Background1.png"
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-900/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-red-800/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            ABOUT <span className="text-red-600">US</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-white max-w-3xl mx-auto text-lg font-light leading-relaxed">
            We provide cutting-edge cybersecurity solutions to protect businesses from evolving digital threats.
          </p>
        </div>

        {/* Mobile Layout - Stack vertically */}
        <div className="block md:hidden space-y-6">
          {/* Central shield image for mobile */}
          <div className="flex justify-center mb-8">
            <div className="w-64 h-64 relative">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-red-900/30 to-red-900/10 shadow-2xl border-2 border-red-600/30 p-2 backdrop-blur-sm">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-red-900/20 to-black/80">
                  <Image
                    src="/images/cybersecurity-shieldd.png"
                    alt="Cybersecurity Shield"
                    fill
                    className="object-cover filter drop-shadow-2xl"
                    priority
                    unoptimized={false}
                  />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 via-red-500/20 to-red-600/20 rounded-2xl blur-2xl animate-pulse"></div>
            </div>
          </div>

          {/* Mobile Cards Grid */}
          <div className="grid grid-cols-1 gap-6">
            {/* Our Approach */}
            <div className="group bg-black/80 backdrop-blur-md border border-red-600/30 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:border-red-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg">
                    <Shield className="w-7 h-7 text-white transition-transform duration-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-400 transition-colors duration-500">Our Approach</h3>
                  <p className="text-white/80 text-base leading-relaxed group-hover:text-white transition-colors duration-500">
                    Proactive security strategies with 24/7 real-time monitoring and advanced threat detection systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="group bg-black/80 backdrop-blur-md border border-red-600/30 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:border-red-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg">
                    <Building className="w-7 h-7 text-white transition-transform duration-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-400 transition-colors duration-500">Our Mission</h3>
                  <p className="text-white/80 text-base leading-relaxed group-hover:text-white transition-colors duration-500">
                    Delivering cutting-edge cybersecurity solutions to protect businesses from evolving digital threats worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Team */}
            <div className="group bg-black/80 backdrop-blur-md border border-red-600/30 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:border-red-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg">
                    <Users className="w-7 h-7 text-white transition-transform duration-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-400 transition-colors duration-500">Our Team</h3>
                  <p className="text-white/80 text-base leading-relaxed group-hover:text-white transition-colors duration-500">
                    Certified security professionals, ethical hackers, and threat intelligence analysts with 10+ years experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Vision */}
            <div className="group bg-black/80 backdrop-blur-md border border-red-600/30 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:border-red-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg">
                    <Eye className="w-7 h-7 text-white transition-transform duration-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-400 transition-colors duration-500">Our Vision</h3>
                  <p className="text-white/80 text-base leading-relaxed group-hover:text-white transition-colors duration-500">
                    Creating a safer digital ecosystem through innovative security solutions and industry-leading practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Expertise */}
            <div className="group bg-black/80 backdrop-blur-md border border-red-600/30 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:border-red-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg">
                    <HelpCircle className="w-7 h-7 text-white transition-transform duration-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-400 transition-colors duration-500">Our Expertise</h3>
                  <p className="text-white/80 text-base leading-relaxed group-hover:text-white transition-colors duration-500">
                    15+ years in cybersecurity, threat detection, penetration testing, and enterprise risk management solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* What Sets Us Apart */}
            <div className="group bg-black/80 backdrop-blur-md border border-red-600/30 rounded-2xl p-5 shadow-xl hover:shadow-2xl hover:border-red-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg">
                    <Award className="w-7 h-7 text-white transition-transform duration-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-400 transition-colors duration-500">What You Get</h3>
                  <p className="text-white/80 text-base leading-relaxed group-hover:text-white transition-colors duration-500">Sustainability, unmatched work efficiency and protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Hexagonal positioning around central image */}
        <div className="hidden md:block relative flex-1 min-h-[600px] max-h-[80vh] overflow-hidden">
          {/* Central shield image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-64 h-64 relative">
              <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-red-900/30 to-red-900/10 shadow-2xl border-2 border-red-600/30 p-3 backdrop-blur-sm">
                <div className="w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-red-900/20 to-black/80">
                  <Image
                    src="/images/cybersecurity-shieldd.png"
                    alt="Cybersecurity Shield"
                    fill
                    className="object-cover filter drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 via-red-500/20 to-red-600/20 rounded-3xl blur-2xl animate-pulse"></div>
              <div className="absolute inset-2 bg-red-600/10 rounded-3xl blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Hexagonal Layout Cards */}
          
          {/* Top Card - Our Approach */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="group bg-black/80 backdrop-blur-md border border-red-600/30 rounded-2xl p-5 w-80 shadow-xl hover:shadow-2xl hover:border-red-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg">
                    <Shield className="w-7 h-7 text-white transition-transform duration-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-400 transition-colors duration-500">Our Approach</h3>
                  <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-500">
                    Proactive security strategies with 24/7 real-time monitoring and advanced threat detection systems.
                  </p>
                </div>
              </div>
            </div>
            {/* Connecting line */}
            <div className="absolute top-full left-1/2 w-1 h-20 bg-gradient-to-b from-red-600/50 to-transparent -translate-x-1/2"></div>
          </div>

          {/* Top Right Card - Our Mission */}
          <div className="absolute top-1/4 right-0 z-10 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="group bg-black/80 backdrop-blur-md border border-red-600/30 rounded-2xl p-5 w-80 shadow-xl hover:shadow-2xl hover:border-red-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg">
                    <Building className="w-7 h-7 text-white transition-transform duration-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-400 transition-colors duration-500">Our Mission</h3>
                  <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-500">
                    Delivering cutting-edge cybersecurity solutions to protect businesses from evolving digital threats worldwide.
                  </p>
                </div>
              </div>
            </div>
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-20 h-1 bg-gradient-to-l from-red-600/50 to-transparent -translate-y-1/2"></div>
          </div>

          {/* Bottom Right Card - Our Vision */}
          <div className="absolute bottom-1/4 right-0 z-10 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="group bg-black/80 backdrop-blur-md border border-red-600/30 rounded-2xl p-5 w-80 shadow-xl hover:shadow-2xl hover:border-red-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg">
                    <Eye className="w-7 h-7 text-white transition-transform duration-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-400 transition-colors duration-500">Our Vision</h3>
                  <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-500">
                    Creating a safer digital ecosystem through innovative security solutions and industry-leading practices.
                  </p>
                </div>
              </div>
            </div>
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-20 h-1 bg-gradient-to-l from-red-600/50 to-transparent -translate-y-1/2"></div>
          </div>

          {/* Bottom Card - Our Expertise */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="group bg-black/80 backdrop-blur-md border border-red-600/30 rounded-2xl p-5 w-80 shadow-xl hover:shadow-2xl hover:border-red-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg">
                    <HelpCircle className="w-7 h-7 text-white transition-transform duration-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-400 transition-colors duration-500">Our Expertise</h3>
                  <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-500">
                    15+ years in cybersecurity, threat detection, penetration testing, and enterprise risk management solutions.
                  </p>
                </div>
              </div>
            </div>
            {/* Connecting line */}
            <div className="absolute bottom-full left-1/2 w-1 h-20 bg-gradient-to-t from-red-600/50 to-transparent -translate-x-1/2"></div>
          </div>

          {/* Bottom Left Card - Our Team */}
          <div className="absolute bottom-1/4 left-0 z-10 animate-fade-in" style={{animationDelay: '1.0s'}}>
            <div className="group bg-black/80 backdrop-blur-md border border-red-600/30 rounded-2xl p-5 w-80 shadow-xl hover:shadow-2xl hover:border-red-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg">
                    <Users className="w-7 h-7 text-white transition-transform duration-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-400 transition-colors duration-500">Our Team</h3>
                  <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-500">
                    Certified security professionals, ethical hackers, and threat intelligence analysts with 10+ years experience.
                  </p>
                </div>
              </div>
            </div>
            {/* Connecting line */}
            <div className="absolute top-1/2 right-0 w-20 h-1 bg-gradient-to-r from-red-600/50 to-transparent -translate-y-1/2"></div>
          </div>

          {/* Top Left Card - What Sets Us Apart */}
          <div className="absolute top-1/4 left-0 z-10 animate-fade-in" style={{animationDelay: '1.2s'}}>
            <div className="group bg-black/80 backdrop-blur-md border border-red-600/30 rounded-2xl p-5 w-80 shadow-xl hover:shadow-2xl hover:border-red-500/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transition-all duration-500 shadow-lg">
                    <Award className="w-7 h-7 text-white transition-transform duration-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-400 transition-colors duration-500">What You Get</h3>
                  <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-500">Sustainability, unmatched work efficiency and protection</p>
                </div>
              </div>
            </div>
            {/* Connecting line */}
            <div className="absolute top-1/2 right-0 w-20 h-1 bg-gradient-to-r from-red-600/50 to-transparent -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About