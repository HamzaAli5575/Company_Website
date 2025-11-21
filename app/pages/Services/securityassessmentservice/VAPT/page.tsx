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
            alt="VAPT"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black"></div>
        </div>

        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              Vulnerability Assessment & Penetration Testing
              <span className="text-red-600 block">(VAPT)</span>
            </h1>
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
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="observe-animate slide-left space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-12 bg-red-600"></div>
                    <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Overview</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    VAPT <span className="text-red-600">Overview</span>
                  </h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Our Security Assessment Services exploit those vulnerabilities in controlled, safe conditions to determine what information is exposed, mimic real attacker techniques without placing the organization in actual jeopardy, and provide clear findings so teams can remediate each weakness effectively.
                  </p>
                  <p className="text-justify">
                    Our Security Assessment Services exploit those vulnerabilities in controlled, safe conditions to determine what information is exposed, mimic real attacker techniques without placing the organization in actual jeopardy, and provide clear findings so teams can remediate each weakness effectively.
                  </p>
                </div>
              </div>

              <div className="observe-animate slide-right">
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden border-2 border-red-600/30 shadow-2xl group">
                  <Image
                    src="/images/services/VAPT/Vapt-analytics.jpg"
                    alt="VAPT Analytics"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Assessment Services */}
          <div className="mb-20">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Testing Types</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Assessment <span className="text-red-600">Services</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Comprehensive testing approaches to identify vulnerabilities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Black-box Testing Card */}
              <div className="observe-animate scale-in group relative overflow-hidden rounded-xl border border-white/10 hover:border-red-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20" style={{ animationDelay: '100ms' }}>
                <div className="relative h-64">
                  <Image
                    src="/images/services/VAPT/blackboxtesting.jpg"
                    alt="Black-box Testing"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white/5 to-white/0">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors duration-300">
                    Black-box Testing
                  </h3>
                  <p className="text-red-400 text-sm font-semibold mb-3">Emulating an External Attacker</p>
                  <p className="text-gray-400 text-sm leading-relaxed text-justify">
                    Simulates real-world attack scenarios by testing from an external perspective with no prior knowledge of internal systems, mimicking how actual attackers would approach your infrastructure.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Grey-box Testing Card */}
              <div className="observe-animate scale-in group relative overflow-hidden rounded-xl border border-white/10 hover:border-red-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20" style={{ animationDelay: '200ms' }}>
                <div className="relative h-64">
                  <Image
                    src="/images/services/VAPT/greyboxtesting.jpg"
                    alt="Grey-box Testing"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white/5 to-white/0">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors duration-300">
                    Grey-box Testing
                  </h3>
                  <p className="text-red-400 text-sm font-semibold mb-3">Emulating Legitimate Users</p>
                  <p className="text-gray-400 text-sm leading-relaxed text-justify">
                    Combines internal and external testing perspectives with limited system knowledge, simulating insider threats and authenticated user access to identify privilege escalation vulnerabilities.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* White-box Testing Card */}
              <div className="observe-animate scale-in group relative overflow-hidden rounded-xl border border-white/10 hover:border-red-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20" style={{ animationDelay: '300ms' }}>
                <div className="relative h-64">
                  <Image
                    src="/images/services/VAPT/whiteboxtesting.jpg"
                    alt="White-box Testing"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white/5 to-white/0">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors duration-300">
                    White-box Testing
                  </h3>
                  <p className="text-red-400 text-sm font-semibold mb-3">Analysis with Full Access</p>
                  <p className="text-gray-400 text-sm leading-relaxed text-justify">
                    Comprehensive analysis with complete access to source code, architecture, and documentation, enabling thorough examination of internal security mechanisms and code-level vulnerabilities.
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div className="observe-animate">
            <div className="bg-gradient-to-r from-red-600/10 to-black border border-red-600/30 rounded-2xl p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Service <span className="text-red-600">Details</span></h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Application Security Assessment */}
                <div className="p-6 bg-black/40 border border-white/10 rounded-xl hover:border-red-600/50 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-red-600/20 rounded-lg group-hover:bg-red-600/30 transition-all">
                      <FaMobile className="text-xl text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                      Application Security<br />Assessment
                    </h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-justify">Web Application Assessment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-justify">Android Application Assessment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-justify">iOS Application Assessment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-justify">Desktop/Legacy Application Assessment</span>
                    </li>
                  </ul>
                </div>

                {/* Network Infrastructure Security Assessment */}
                <div className="p-6 bg-black/40 border border-white/10 rounded-xl hover:border-red-600/50 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-red-600/20 rounded-lg group-hover:bg-red-600/30 transition-all">
                      <FaNetworkWired className="text-xl text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                      Network Infrastructure<br />Security Assessment
                    </h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-justify">External Security Assessment of Network Devices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-justify">Internal Security Assessment of Network Devices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-justify">Security Configuration Audit</span>
                    </li>
                  </ul>
                </div>

                {/* Database Security Assessment */}
                <div className="p-6 bg-black/40 border border-white/10 rounded-xl hover:border-red-600/50 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-red-600/20 rounded-lg group-hover:bg-red-600/30 transition-all">
                      <FaDatabase className="text-xl text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                      Database Security<br />Assessment
                    </h3>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-justify">Database Configuration Audit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-justify">SQL Injection Tests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-justify">Insecure Storage Evaluation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-justify">Password Policy Evaluation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-3 mt-1">•</span>
                      <span className="text-justify">Permissions Evaluation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page