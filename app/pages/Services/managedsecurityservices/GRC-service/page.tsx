"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaBalanceScale, FaShieldAlt, FaClipboardCheck, FaChartLine, FaLock, FaUsers, FaCogs, FaFileAlt, FaSearch, FaGlobe, FaCertificate } from 'react-icons/fa'

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
            alt="GRC as a Service"
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
              GRC as a
              <span className="text-red-600 block">Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto whitespace-nowrap">
              Integrated Governance, Risk, and Compliance management solution
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
                  What is GRC as a Service?
                </h2>
              </div>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-justify text-lg">
                  GRC (Governance, Risk, and Compliance) as a Service is a cloud-based solution that helps organizations manage their governance, risk management, and compliance requirements in an integrated manner. This service provides a comprehensive framework to align IT with business objectives, manage risks effectively, and ensure compliance with regulatory requirements.
                </p>
                <p className="text-justify text-lg">
                  Our GRC as a Service offering combines people, processes, and technology to deliver a holistic approach to managing governance, risk, and compliance. We help organizations establish robust governance frameworks, implement effective risk management strategies, and maintain continuous compliance with industry standards and regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Key Components */}
          <div className="mb-20">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Components</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key <span className="text-red-600">Components</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: FaBalanceScale,
                  title: "Governance",
                  description: "Strategic alignment and policy management"
                },
                {
                  icon: FaShieldAlt,
                  title: "Risk Management",
                  description: "Identification and mitigation of risks"
                },
                {
                  icon: FaClipboardCheck,
                  title: "Compliance",
                  description: "Regulatory adherence and standards"
                },
                {
                  icon: FaChartLine,
                  title: "Analytics",
                  description: "Data-driven insights and reporting"
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

          {/* Services Offered */}
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
                Our GRC <span className="text-red-600">Services</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: FaFileAlt,
                  title: "Policy Management",
                  description: "Development and maintenance of security policies and procedures"
                },
                {
                  icon: FaSearch,
                  title: "Risk Assessment",
                  description: "Comprehensive risk identification, analysis, and evaluation"
                },
                {
                  icon: FaLock,
                  title: "Compliance Monitoring",
                  description: "Continuous monitoring of compliance requirements and controls"
                },
                {
                  icon: FaCogs,
                  title: "Control Implementation",
                  description: "Design and implementation of security controls and frameworks"
                },
                {
                  icon: FaGlobe,
                  title: "Regulatory Updates",
                  description: "Keeping track of changing regulations and requirements"
                },
                {
                  icon: FaCertificate,
                  title: "Audit Support",
                  description: "Assistance with internal and external audit processes"
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

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Benefits</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose GRC as a <span className="text-red-600">Service</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: FaChartLine,
                  title: "Improved Visibility",
                  description: "Centralized view of governance, risk, and compliance across the organization"
                },
                {
                  icon: FaUsers,
                  title: "Enhanced Decision Making",
                  description: "Data-driven insights for better strategic and operational decisions"
                },
                {
                  icon: FaShieldAlt,
                  title: "Reduced Risk Exposure",
                  description: "Proactive identification and mitigation of potential risks"
                },
                {
                  icon: FaClipboardCheck,
                  title: "Compliance Assurance",
                  description: "Continuous compliance with industry standards and regulations"
                },
                {
                  icon: FaCogs,
                  title: "Operational Efficiency",
                  description: "Streamlined processes and automated compliance workflows"
                },
                {
                  icon: FaBalanceScale,
                  title: "Cost Optimization",
                  description: "Reduced compliance costs and avoidance of regulatory penalties"
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

          {/* Our Process */}
          <div className="observe-animate">
            <div className="bg-gradient-to-r from-red-600/10 to-black border border-red-600/30 rounded-2xl p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our GRC <span className="text-red-600">Implementation Process</span></h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    step: "1",
                    title: "Assessment",
                    description: "Evaluate current GRC maturity and identify gaps"
                  },
                  {
                    step: "2",
                    title: "Strategy",
                    description: "Develop customized GRC framework and roadmap"
                  },
                  {
                    step: "3",
                    title: "Implementation",
                    description: "Deploy GRC tools and establish processes"
                  },
                  {
                    step: "4",
                    title: "Optimization",
                    description: "Continuous monitoring and improvement of GRC program"
                  }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-black/40 border border-white/10 rounded-xl hover:border-red-600/50 transition-all group">
                    <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center text-2xl font-bold text-red-600 mb-4 mx-auto">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-red-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors text-justify">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-300 text-lg italic">
                  Our GRC as a Service has helped organizations achieve up to 70% improvement in compliance efficiency and 50% reduction in risk exposure.
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