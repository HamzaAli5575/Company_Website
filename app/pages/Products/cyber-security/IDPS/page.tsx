"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaShieldAlt, FaNetworkWired, FaFilter, FaCogs, FaUserShield, FaKey, FaUsers, FaServer, FaEye, FaFileAlt, FaExclamationTriangle, FaThermometerHalf } from 'react-icons/fa'

const Page = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Handle main section animations
          if (entry.target.classList.contains('animate-on-scroll')) {
            entry.target.classList.remove('opacity-0', 'translate-y-10', 'translate-y-6')
            entry.target.classList.add('opacity-100', 'translate-y-0')
          }
          
          // Handle fadeInUp animations
          const fadeElements = entry.target.querySelectorAll('.animate-fadeInUp')
          fadeElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.remove('opacity-0')
              el.classList.add('animate-in')
            }, index * 200)
          })
          
          // Add bounce animation to images on scroll
          const images = entry.target.querySelectorAll('.relative img, .relative')
          images.forEach((img) => {
            if (img.classList.contains('relative') && img.querySelector('img')) {
              img.classList.add('animate-bounce-subtle')
            }
          })
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll('.animate-on-scroll')
    animateElements.forEach((el) => observer.observe(el))

    // Add custom CSS animations
    const style = document.createElement('style')
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes bounceSubtle {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }
      
      .animate-fadeInUp {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
      }
      
      .animate-fadeInUp.animate-in {
        opacity: 1;
      }
      
      .animate-bounce-subtle {
        animation: bounceSubtle 2s ease-in-out infinite;
      }
      
      /* Stagger animation delays */
      .animate-on-scroll:nth-child(1) { animation-delay: 0.1s; }
      .animate-on-scroll:nth-child(2) { animation-delay: 0.2s; }
      .animate-on-scroll:nth-child(3) { animation-delay: 0.3s; }
      .animate-on-scroll:nth-child(4) { animation-delay: 0.4s; }
      .animate-on-scroll:nth-child(5) { animation-delay: 0.5s; }
      .animate-on-scroll:nth-child(6) { animation-delay: 0.6s; }
    `
    document.head.appendChild(style)

    return () => {
      observer.disconnect()
      document.head.removeChild(style)
    }
  }, [])

  return (
  <>
  <header role="banner" className="relative w-full overflow-hidden min-h-[120px] md:h-[220px] lg:h-[280px] bg-black pt-16 md:pt-20">
      {/* Background banner image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Products-AI/MCA.jpg"
          alt="IDPS HT-5314 - Intrusion Detection and Prevention System"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* overlay: darker at bottom for banner legibility */}
        <div className="absolute inset-0 z-10 bg-linear-to-b from-black/60 via-black/30 to-transparent pointer-events-none"></div>
      </div>

      <div className="container mx-auto h-full flex items-center justify-center px-4 relative z-20">
        <h1 className="font-ict text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center w-full">
          Intrusion Detection and Prevention System HT5314
        </h1>
      </div>
    </header>
    {/* Main Content Section */}
    <section className="relative w-full py-12">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Background1.png')" }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Product Overview Section */}
        <div className="mb-16 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out animate-on-scroll">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white animate-fadeInUp">
                PRODUCT <span className="text-teal-400 hover:animate-pulse">OVERVIEW</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed text-justify opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                An Intrusion Detection and Prevention System (IDPS) is a network traffic monitoring system that detects suspicious behavior, blocks traffic from Un-trusted sources and sends out awareness notifications. IDPS is placed at a strategic point or points within the network to monitor traffic to and from all devices on the network. Horizon Tech Services IDPS HT–5314 provides security against latest threats and ensures network security at 1 Gbps.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-80 rounded-xl overflow-hidden border border-teal-500/30 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-teal-500/25 hover:rotate-1 animate-fadeInUp">
                <Image
                  src="/images/products-cybersecurity/IDPS.jpg"
                  alt="IDPS Overview"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-teal-600/10 hover:bg-transparent transition-all duration-300"></div>
                <div className="absolute inset-0 bg-linear-to-t from-teal-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-16 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10 animate-fadeInUp">
            KEY <span className="text-teal-400">FEATURES</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {/* Transparent Mode */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaEye className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Transparent Mode</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Operates in transparent mode for seamless network integration without disrupting traffic flow.
              </p>
            </div>

            {/* Ingress and Egress Filtering */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaFilter className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Ingress and Egress Filtering</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Supports both ingress and egress filtering for comprehensive network traffic control and monitoring.
              </p>
            </div>

            {/* Advanced Traffic Filtering */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaNetworkWired className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Advanced Traffic Filtering</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Advanced traffic filtering policies for precise control over network communications and security enforcement.
              </p>
            </div>

            {/* IDPS Rule Management */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaCogs className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">IDPS Rule Management</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Comprehensive IDPS rule management system for customizable threat detection and prevention policies.
              </p>
            </div>

            {/* User Friendly Management UI */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaUserShield className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">User Friendly Management UI</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Intuitive and user-friendly management interface for easy configuration and monitoring of security policies.
              </p>
            </div>

            {/* Access Control & User Management */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaKey className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Access Control & User Management</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Comprehensive access control and user management system for secure administrative operations.
              </p>
            </div>

            {/* User Auditing */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.7s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaUsers className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">User Auditing</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Complete user auditing capabilities for tracking administrative actions and maintaining security compliance.
              </p>
            </div>

            {/* Device Management Configuration */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaServer className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Device Management Configuration</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Advanced device management configuration for optimal performance and security policy enforcement.
              </p>
            </div>

            {/* Syslog Support */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaFileAlt className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Syslog Support</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Comprehensive syslog support for centralized logging and security event management integration.
              </p>
            </div>

            {/* Encrypted Management Channels */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '1.0s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaShieldAlt className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Encrypted Management Channels</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Secure encrypted management channels for protected administrative communications and data integrity.
              </p>
            </div>

            {/* Enriched Logs */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '1.1s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaFileAlt className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Enriched Logs</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Enriched logging capabilities providing detailed security event information for enhanced threat analysis.
              </p>
            </div>

            {/* Operating Environment */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaThermometerHalf className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Operating Environment</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Operating Temperature: 0°C to +40°C | Humidity: Up to 85% for reliable performance in various environments.
              </p>
            </div>
          </div>
        </div>
        
        {/* Brochure Download Button */}
        {/* <div className="mt-12 text-center">
          <a
            href="/brochures/IDPS.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-linear-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <svg 
              className="w-6 h-6" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            IDPS Brochure
          </a>
        </div> */}
      </div>
    </section>
    
  </>
  )
}

export default Page