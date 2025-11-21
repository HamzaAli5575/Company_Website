"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaEye, FaShieldAlt, FaLock, FaServer, FaDatabase, FaCode, FaGlobe, FaChartLine, FaExclamationTriangle, FaNetworkWired, FaSearch, FaCloud, FaBrain, FaBug, FaChartBar, FaUserSecret, FaClock, FaCheckCircle, FaUsers, FaTools, FaHeadset, FaCogs } from 'react-icons/fa'

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
            src="/images/Background1.png"
            alt="Background"
            fill
            className="object-cover"
            priority
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
              Managed Security
              <span className="text-red-600 block">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Expert protection for your digital assets
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
            <div className="observe-animate slide-left space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Overview</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  What are Managed Security Services?
                </h2>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Managed Security Services (MSS) are third-party services that monitor and manage security systems for organizations. As a Managed Security Service Provider (MSSP), we offer comprehensive security solutions that help businesses protect their digital assets without the need to build and maintain an in-house security team.
                </p>
                <p className="text-justify">
                  Our MSS offerings include 24/7 security monitoring, incident response, vulnerability management, and compliance management. By leveraging our expertise and advanced security technologies, organizations can enhance their security posture while reducing costs and complexity.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-red-600/10 to-black border border-red-600/30 rounded-lg p-4">
                <p className="text-sm text-gray-300">
                  <span className="font-bold text-red-400">Did you know?</span> Organizations that use managed security services reduce security incident costs by an average of 52% compared to those that handle security in-house.
                </p>
              </div>
            </div>
          </div>

          {/* Service Offerings */}
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
                Service <span className="text-red-600">Offerings</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: FaShieldAlt,
                  title: "Security Monitoring",
                  description: "24/7 surveillance",
                  details: "Continuous monitoring of your network and systems to detect and respond to threats in real-time."
                },
                {
                  icon: FaLock,
                  title: "Incident Response",
                  description: "Rapid threat mitigation",
                  details: "Expert response team to quickly identify, contain, and remediate security incidents."
                },
                {
                  icon: FaSearch,
                  title: "Vulnerability Management",
                  description: "Proactive defense",
                  details: "Regular scanning and assessment to identify and address vulnerabilities before they're exploited."
                },
                {
                  icon: FaServer,
                  title: "Infrastructure Management",
                  description: "Comprehensive protection",
                  details: "Management of firewalls, intrusion detection systems, and other security infrastructure."
                },
                {
                  icon: FaCloud,
                  title: "Cloud Security",
                  description: "Hybrid protection",
                  details: "Security solutions tailored for cloud environments and hybrid infrastructure deployments."
                },
                {
                  icon: FaChartBar,
                  title: "Compliance Management",
                  description: "Regulatory adherence",
                  details: "Assistance with meeting industry standards and regulatory requirements for security."
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
                    <p className="text-red-400 text-sm font-semibold mb-3 group-hover:text-red-300 transition-colors">
                      {item.description}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors text-justify">
                      {item.details}
                    </p>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* How Our Service Works */}
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
                How Our Service <span className="text-red-600">Works</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Assess",
                  description: "We evaluate your current security posture and identify gaps and vulnerabilities in your infrastructure."
                },
                {
                  step: "2",
                  title: "Design",
                  description: "Our experts create a customized security strategy tailored to your specific business needs and risks."
                },
                {
                  step: "3",
                  title: "Implement",
                  description: "We deploy and configure the necessary security tools and establish monitoring protocols."
                },
                {
                  step: "4",
                  title: "Manage",
                  description: "Our team provides ongoing monitoring, maintenance, and incident response to keep you protected."
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

          {/* Why Choose Our Managed Security Services */}
          <div className="observe-animate">
            <div className="bg-gradient-to-r from-red-600/10 to-black border border-red-600/30 rounded-2xl p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Why Choose Our <span className="text-red-600">Managed Security Services</span></h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: FaClock,
                    value: "24/7",
                    title: "Security Operations",
                    description: "Our Security Operations Center monitors your infrastructure around the clock, every day of the year."
                  },
                  {
                    icon: FaCheckCircle,
                    value: "40%",
                    title: "Cost Reduction",
                    description: "Organizations typically reduce security costs by up to 40% compared to building in-house capabilities."
                  },
                  {
                    icon: FaUsers,
                    value: "100+",
                    title: "Security Experts",
                    description: "Our team of certified security professionals brings expertise across all domains of cybersecurity."
                  }
                ].map((item, i) => (
                  <div key={i} className="p-6 bg-black/40 border border-white/10 rounded-xl hover:border-red-600/50 transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-red-600/20 rounded-lg group-hover:bg-red-600/30 transition-all">
                        <item.icon className="text-xl text-red-600" />
                      </div>
                      <div className="text-4xl font-bold text-red-600">{item.value}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
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
                  Our managed security services have helped organizations reduce security incident response time by 60% and prevent 90% of potential breaches.
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