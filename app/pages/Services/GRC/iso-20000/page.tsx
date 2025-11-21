"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaCogs, FaClipboardCheck, FaUsers, FaChartLine, FaShieldAlt, FaFileAlt, FaTools, FaGlobe, FaStar, FaAward, FaLightbulb, FaRocket, FaHandshake } from 'react-icons/fa'

const Page = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.observe-animate')
    elements.forEach((el) => observer.observe(el))

    const style = document.createElement('style')
    style.textContent = `
      @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes slideInRight {
        from { opacity: 0; transform: translateX(50px); }
        to { opacity: 1; transform: translateX(0); }
      }
      @keyframes scaleIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .observe-animate { opacity: 0; }
      .observe-animate.animate-in-view { animation: fadeIn 0.8s ease-out forwards; }
      .observe-animate.slide-left { animation: slideInLeft 0.8s ease-out forwards; }
      .observe-animate.slide-right { animation: slideInRight 0.8s ease-out forwards; }
      .observe-animate.scale-in { animation: scaleIn 0.8s ease-out forwards; }
      .text-justify { text-align: justify; }
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
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/VAPT/vapt-banner.jpg"
            alt="ISO 20000"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black"></div>
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1200 800">
              <defs>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-red-600"/>
                </pattern>
              </defs>
              <rect width="1200" height="800" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              ISO 20000
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto whitespace-nowrap">
              IT Service Management System certification
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="relative w-full bg-gradient-to-b from-black via-black to-black/95 py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Overview Section */}
          <div className="mb-32">
            <div className="observe-animate slide-left space-y-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Overview</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  What is <span className="text-red-600">ISO 20000</span>?
                </h2>
              </div>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-justify text-lg">
                  ISO 20000 is the international standard for IT Service Management (ITSM). It provides a framework for organizations to establish, implement, maintain, and continually improve an IT Service Management System (ITSMS). This standard helps organizations deliver high-quality IT services that meet business and customer requirements.
                </p>
                <p className="text-justify text-lg">
                  ISO 20000 is based on the ITIL framework and focuses on aligning IT services with the needs of the business. It covers the entire service lifecycle, from service strategy and design to transition, operation, and continual improvement. By implementing ISO 20000, organizations can enhance service quality, improve efficiency, and demonstrate their commitment to excellence in IT service delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-20">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Features</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service <span className="text-red-600">Excellence</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: FaCogs,
                  title: "Service Management",
                  description: "Comprehensive IT service lifecycle management"
                },
                {
                  icon: FaClipboardCheck,
                  title: "Process Alignment",
                  description: "Alignment with ITIL best practices"
                },
                {
                  icon: FaUsers,
                  title: "Customer Focus",
                  description: "Customer-centric service delivery"
                },
                {
                  icon: FaChartLine,
                  title: "Continual Improvement",
                  description: "Ongoing service enhancement"
                }
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="observe-animate scale-in group relative p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-red-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="mb-6 inline-flex p-4 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="text-2xl text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors text-justify">
                      {item.description}
                    </p>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Services</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service <span className="text-red-600">Solutions</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: FaShieldAlt,
                  title: "Gap Assessment",
                  description: "Comprehensive evaluation of your current IT service management practices against ISO 20000 requirements to identify gaps and create a certification roadmap."
                },
                {
                  icon: FaFileAlt,
                  title: "Documentation",
                  description: "Complete ITSMS documentation suite including service management policies, procedures, SLAs, OLAs, and service catalog development."
                },
                {
                  icon: FaUsers,
                  title: "Training",
                  description: "IT service management training covering ISO 20000 requirements, service lifecycle processes, roles and responsibilities, and continual improvement practices."
                },
                {
                  icon: FaTools,
                  title: "Process Implementation",
                  description: "Design and implementation of IT service management processes including incident, problem, change, and service level management."
                },
                {
                  icon: FaGlobe,
                  title: "Service Integration",
                  description: "Integration of service management processes across the organization and alignment with business objectives and customer requirements."
                },
                {
                  icon: FaStar,
                  title: "Continual Improvement",
                  description: "Establishment of continual improvement mechanisms including service measurement, reporting, and optimization programs."
                }
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="observe-animate scale-in group relative p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-red-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="mb-6 inline-flex p-4 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="text-2xl text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors text-justify">
                      {item.description}
                    </p>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Implementation Process */}
          <div className="mb-20">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Process</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service <span className="text-red-600">Transformation</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Assessment",
                  description: "Evaluate current IT service management maturity and identify gaps against ISO 20000 requirements"
                },
                {
                  step: "2",
                  title: "Planning",
                  description: "Develop implementation roadmap and prioritize service improvement initiatives"
                },
                {
                  step: "3",
                  title: "Implementation",
                  description: "Deploy service management processes, documentation, and tools across the organization"
                },
                {
                  step: "4",
                  title: "Certification",
                  description: "Prepare for and support certification audit to achieve ISO 20000 compliance"
                }
              ].map((item, i) => (
                <div key={i} className="observe-animate scale-in group relative p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-red-600/50 transition-all duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center text-2xl font-bold text-red-600 mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-red-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors text-justify">
                    {item.description}
                  </p>
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="observe-animate">
            <div className="bg-gradient-to-r from-red-600/10 to-black border border-red-600/30 rounded-2xl p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Service <span className="text-red-600">Advantages</span></h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: FaLightbulb,
                    title: "Service Excellence",
                    description: "Demonstrated commitment to delivering high-quality IT services"
                  },
                  {
                    icon: FaRocket,
                    title: "Operational Efficiency",
                    description: "Streamlined processes and optimized resource utilization"
                  },
                  {
                    icon: FaHandshake,
                    title: "Customer Success",
                    description: "Enhanced service quality and improved customer relationships"
                  }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-black/40 border border-white/10 rounded-xl hover:border-red-600/50 transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-red-600/20 rounded-lg group-hover:bg-red-600/30 transition-all">
                        <item.icon className="text-xl text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors text-justify">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-300 text-lg italic">
                  Our ISO 20000 certification services help organizations achieve excellence in IT service delivery while improving operational efficiency and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page