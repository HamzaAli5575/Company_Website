"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaMobile, FaNetworkWired, FaDatabase } from 'react-icons/fa'

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
    `
    document.head.appendChild(style)

    return () => {
      observer.disconnect()
      document.head.removeChild(style)
    }
  }, [])

  return (
    <>
      {/* Hero Banner */}
      <header role="banner" className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-black flex items-center justify-center">
        {/* Background banner image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/HIPPA/HIPPA-banner.jpg"
            alt="HIPPA Compliance"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          {/* overlays for theme consistency */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black"></div>
        </div>
        <div className="container mx-auto h-full flex items-center justify-center px-4 relative z-20">
          <h1 className="font-ict text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center w-full">
            HIPPA Compliance
          </h1>
        </div>
      </header>
      {/* Main Content Section */}
      <section className="relative w-full bg-gradient-to-b from-black via-black to-black/95 py-20 md:py-32 min-h-screen flex flex-col">
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
          {/* theme accent overlays */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20 flex-1 flex flex-col justify-center">
          {/* HIPPA Overview Section */}
          <div className="mb-16 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out animate-on-scroll">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-white animate-fadeInUp">
                  HIPPA <span className="text-red-600 hover:animate-pulse">COMPLIANCE</span>
                </h2>
                <p className="text-gray-300 text-base leading-relaxed text-justify opacity-0 animate-fadeInUp hyphens-auto" style={{ animationDelay: '0.2s' }}>
                  Our HIPAA Compliance service helps healthcare organizations and their partners safeguard protected health information (PHI) by aligning their processes, technologies, and policies with the requirements of the Health Insurance Portability and Accountability Act. We conduct comprehensive assessments to identify compliance gaps, review administrative, physical, and technical controls, and provide actionable recommendations to meet HIPAA’s Privacy, Security, and Breach Notification Rules.
                </p>
                <p className="text-white text-base leading-relaxed text-justify opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                  From risk analysis and policy development to security implementation and staff awareness, we support you throughout your compliance journey. With our guidance, your organization can reduce risk of data breaches, maintain patient trust, and ensure full adherence to regulatory obligations.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md h-80 rounded-xl overflow-hidden border border-red-600/50 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-red-600/25 hover:rotate-1 animate-fadeInUp">
                  <Image
                    src="/images/services/HIPPA/HIPPA.jpg"
                    alt="HIPPA Compliance"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-red-600/10 hover:bg-transparent transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Details Section */}
          <div className="mt-20 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out animate-on-scroll">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 animate-fadeInUp">
                Our SERVICE <span className="text-red-600 hover:animate-pulse">DETAILS</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 px-4">
              {/* Application Security Assessment */}
              <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mr-4 border border-red-600/30 group-hover:bg-red-600/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                    <FaMobile className="text-red-400 text-xl group-hover:animate-pulse" />
                  </div>
                  <h2 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors duration-300">
                    Administrative Safeguards
                  </h2>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="group-hover:text-white transition-colors duration-300">Risk Analysis & Risk Management Review</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="group-hover:text-white transition-colors duration-300">HIPAA Policies & Procedures Development</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="group-hover:text-white transition-colors duration-300">Workforce Training & Awareness Programs</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="group-hover:text-white transition-colors duration-300">Incident Response Planning & Reporting</span>
                  </li>
                </ul>
              </div>

              {/* Network Infrastructure Security Assessment */}
              <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mr-4 border border-red-600/30 group-hover:bg-red-600/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                    <FaNetworkWired className="text-red-400 text-xl group-hover:animate-pulse" />
                  </div>
                  <h2 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors duration-300">
                    Physical Safeguards
                  </h2>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="group-hover:text-white transition-colors duration-300">Facility Access Controls & Monitoring</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="group-hover:text-white transition-colors duration-300">Workstation & Device Security</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="group-hover:text-white transition-colors duration-300">Media Disposal & Storage Policies</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="group-hover:text-white transition-colors duration-300">  Physical Security Assessment of Servers & Equipment</span>
                  </li>
                </ul>
              </div>

              {/* Database Security Assessment */}
              <div className="group opacity-0 transform translate-y-6 animate-on-scroll transition-all duration-700 ease-out" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mr-4 border border-red-600/30 group-hover:bg-red-600/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                    <FaDatabase className="text-red-400 text-xl group-hover:animate-pulse" />
                  </div>
                  <h2 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors duration-300">
                    Technical Safeguards
                  </h2>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="group-hover:text-white transition-colors duration-300">Access Control & Authentication Review</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="group-hover:text-white transition-colors duration-300">Encryption & Secure Transmission of PHI</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="group-hover:text-white transition-colors duration-300">Audit Logging & Activity Monitoring</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span className="group-hover:text-white transition-colors duration-300">Data Backup & Recovery Evaluation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Page