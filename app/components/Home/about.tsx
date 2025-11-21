"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Shield, Users, Eye, HelpCircle, Building, Award, Zap, Target, TrendingUp, ChevronRight, ArrowRight, CheckCircle, Star, Globe, Clock, BarChart3, Lock } from 'lucide-react'

const About = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [activeStat, setActiveStat] = useState(0)

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

  const stats = [
    { value: '500+', label: 'Clients Protected', icon: Shield },
    { value: '99.9%', label: 'Security Success Rate', icon: Lock },
    { value: '24/7', label: 'Monitoring Support', icon: Clock },
    { value: '50+', label: 'Security Certifications', icon: Award },
  ]

  const aboutItems = [
    { 
      title: 'Our Approach', 
      icon: Shield, 
      desc: 'Proactive security strategies with 24/7 real-time monitoring and advanced threat detection systems.',
      features: ['Real-time Monitoring', 'Threat Intelligence', 'Incident Response', 'Security Analytics']
    },
    { 
      title: 'Our Mission', 
      icon: Building, 
      desc: 'Delivering cutting-edge cybersecurity solutions to protect businesses from evolving digital threats worldwide.',
      features: ['Global Protection', 'Innovation Focus', 'Client Success', 'Industry Leadership']
    },
    { 
      title: 'Our Team', 
      icon: Users, 
      desc: 'Certified security professionals, ethical hackers, and threat intelligence analysts with multiple years experience.',
      features: ['Certified Experts', 'Ethical Hackers', 'Security Analysts', 'Continuous Training']
    },
    { 
      title: 'Our Vision', 
      icon: Eye, 
      desc: 'Creating a safer digital ecosystem through innovative security solutions and industry-leading practices.',
      features: ['Digital Safety', 'Innovation', 'Industry Standards', 'Future-Ready']
    },
    { 
      title: 'Our Expertise', 
      icon: HelpCircle, 
      desc: '5+ years in cybersecurity, threat detection, penetration testing, and enterprise risk management solutions.',
      features: ['Risk Management', 'Penetration Testing', 'Compliance', 'Security Audits']
    },
    { 
      title: 'What You Get', 
      icon: Award, 
      desc: 'Sustainability, unmatched work efficiency and protection for your digital assets.',
      features: ['Sustainable Solutions', 'Efficiency', 'Comprehensive Protection', 'Peace of Mind']
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [stats.length])

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            ABOUT <span className="text-red-600">US</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mt-6">
            We provide cutting-edge cybersecurity solutions to protect businesses from evolving digital threats.
          </p>
        </div>

        {/* Hero Section with Central Image - Preview Section */}
        <div className="mb-16 md:mb-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative">
                {/* Glass morphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-red-800/10 backdrop-blur-xl rounded-3xl transform rotate-1"></div>
                
                <div className="relative bg-black/60 backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 md:p-10 shadow-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                    Protecting Your Digital Future
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    With over 5 years of experience in cybersecurity, we have established ourselves as a trusted partner for businesses seeking comprehensive protection against digital threats.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {['Risk Management', 'Threat Detection', 'Compliance', 'Incident Response'].map((skill, index) => (
                      <div key={index} className="bg-red-600/10 rounded-lg px-4 py-2 border border-red-600/20">
                        <span className="text-white text-sm font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                  <button className="group relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white font-medium rounded-lg hover:from-red-700 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Central Image */}
            <div className="flex-1 order-1 lg:order-2 flex justify-center">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-800 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                
                {/* Image Frame */}
                <div className="relative bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-3xl p-3 transform transition-all duration-500 hover:scale-105">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-red-900/20 to-black/80">
                    <Image
                      src="/images/cybersecurity-shieldd.png"
                      alt="Cybersecurity Shield"
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      priority
                    />
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute top-1/4 -right-8 transform -translate-y-1/2 animate-bounce delay-500">
                  <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-red-600/30">
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <div className="absolute bottom-1/4 -left-8 transform translate-y-1/2 animate-bounce delay-700">
                  <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-red-600/30">
                    <Award className="w-8 h-8 text-red-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 order-3">
              <div className="relative">
                {/* Glass morphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-red-800/10 backdrop-blur-xl rounded-3xl transform rotate-1"></div>
                
                <div className="relative bg-black/60 backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 md:p-10 shadow-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                    Our Commitment
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    We are dedicated to providing exceptional cybersecurity services that protect your business from evolving threats while ensuring compliance with industry standards.
                  </p>
                  <div className="space-y-4">
                    {[
                      'Advanced threat detection systems',
                      '24/7 security monitoring',
                      'Regular security assessments',
                      'Compliance with international standards'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16 md:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className={`relative group cursor-pointer transition-all duration-500 ${index === activeStat ? 'scale-105' : 'scale-100'}`}
                  onMouseEnter={() => setActiveStat(index)}
                >
                  {/* Glass morphism background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-red-800/10 backdrop-blur-xl rounded-3xl transform rotate-1"></div>
                  
                  <div className="relative bg-black/60 backdrop-blur-xl border border-red-600/30 rounded-3xl p-6 shadow-2xl hover:shadow-red-600/20 transition-all duration-500">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-red-600 mb-2">{stat.value}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Main About Items - All 6 Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {aboutItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveTab(index)}
              >
                {/* Glass morphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-red-800/10 backdrop-blur-xl rounded-3xl transform rotate-1"></div>
                
                <div className={`relative bg-black/60 backdrop-blur-xl border ${activeTab === index ? 'border-red-600' : 'border-red-600/30'} rounded-3xl p-6 shadow-2xl hover:shadow-red-600/20 transition-all duration-500 h-full transform hover:-translate-y-2`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-xl mb-2 group-hover:text-red-400 transition-colors duration-500">{item.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-white transition-colors duration-500">
                    {item.desc}
                  </p>
                  
                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section - Without Buttons */}
        <div className="relative">
          {/* Glass morphism background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-red-800/10 backdrop-blur-xl rounded-3xl transform rotate-1"></div>
          
          <div className="relative bg-black/60 backdrop-blur-xl border border-red-600/30 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Contact our team today to discuss how we can help protect your digital assets and ensure compliance with industry standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About