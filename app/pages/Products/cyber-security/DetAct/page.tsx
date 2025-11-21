"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaShieldAlt, FaNetworkWired, FaDatabase, FaEye, FaChartLine, FaList, FaCogs, FaBullseye, FaLink, FaMap, FaBrain, FaClipboardCheck } from 'react-icons/fa'

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
          alt="DetAct HT5317 - Advanced Security Solutions"
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
          DetAct HT5317
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
                Detect by Horizon Technologies offers advanced security solutions for real-time threat detection and risk mitigation. With cutting-edge algorithms and continuous monitoring, it ensures comprehensive protection against cyber threats, keeping your digital environment secure.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-80 rounded-xl overflow-hidden border border-teal-500/30 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-teal-500/25 hover:rotate-1 animate-fadeInUp">
                <Image
                  src="/images/products-cybersecurity/detAct.jpg"
                  alt="DetAct Overview"
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
            {/* NextGen SIEM */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaShieldAlt className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">NextGen SIEM</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                State-of-the-art, Comprehensive, Customized and Indigenous NextGen SIEM solution for advanced security management.
              </p>
            </div>

            {/* NDR & EDR Platform */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaNetworkWired className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">NDR & EDR Platform</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Security Operations Platform for NextGen Threat Detection and Response at Network (NDR) and Endpoint (EDR).
              </p>
            </div>

            {/* Real-time Data Ingestion */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaDatabase className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Real-time Data Ingestion</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Ingests real-time enterprise-wide vast amounts of security information and event data for comprehensive monitoring.
              </p>
            </div>

            {/* Complete Visibility */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaEye className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Complete Visibility</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Gains complete visibility into security data from a single pane with investigation capabilities and real-time monitoring.
              </p>
            </div>

            {/* Advanced Analytics */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaChartLine className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Advanced Analytics</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Applies advanced analytics and hybrid analysis to accurately detect known and unknown threats.
              </p>
            </div>

            {/* Event Prioritization */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaList className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Event Prioritization</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Reduces events into a prioritized list of the most important security incidents for efficient response.
              </p>
            </div>

            {/* Auto Parsing & Normalization */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.7s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaCogs className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Auto Parsing & Normalization</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Automatically parses and normalizes data for consistent analysis and reporting across all security sources.
              </p>
            </div>

            {/* Critical Insights */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaBullseye className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Critical Insights</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Provides actionable insight into the most critical security threats and vulnerabilities in your environment.
              </p>
            </div>

            {/* Threat Intelligence Integration */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.9s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaLink className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Threat Intelligence Integration</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Supports integration of third-party Threat Intelligence feeds via STIX/TAXII/Reports & other standard protocols.
              </p>
            </div>

            {/* MITRE ATT&CK Mapping */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '1.0s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaMap className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">MITRE ATT&CK Mapping</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Maps threats to Industry-standard MITRE ATT&CK framework for improved root cause analysis and response.
              </p>
            </div>

            {/* Threat Intelligence Platform */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '1.1s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaBrain className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Threat Intelligence Platform</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                State of the art Threat Intelligence Platform to manage and capitalize cyber threat information effectively.
              </p>
            </div>

            {/* Compliance Management */}
            <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-teal-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <FaClipboardCheck className="text-xl text-teal-400 group-hover:animate-pulse" />
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Compliance Management</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Drives compliance and manages regulatory requirements with comprehensive reporting and audit capabilities.
              </p>
            </div>
          </div>
        </div>
        
        {/* Brochure Download Button */}
        {/* <div className="mt-12 text-center">
          <a
            href="/brochures/DetAct.pdf"
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
            DetAct Brochure
          </a>
        </div> */}
      </div>
    </section>
    
  </>
  )
}

export default Page