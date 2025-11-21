"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaCertificate, FaShieldAlt, FaChartLine, FaClipboardCheck, FaEye, FaArrowRight, FaCheck, FaCog, FaSearch, FaLock, FaUserCheck, FaGavel, FaFileAlt, FaDatabase, FaCloud, FaNetworkWired } from 'react-icons/fa'

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
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes scaleIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      
      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(229, 57, 53, 0.4);
        }
        70% {
          box-shadow: 0 0 0 10px rgba(229, 57, 53, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(229, 57, 53, 0);
        }
      }
      
      .observe-animate {
        opacity: 0;
      }
      
      .observe-animate.animate-in-view {
        animation: fadeIn 0.8s ease-out forwards;
      }
      
      .observe-animate.slide-left {
        animation: slideInLeft 0.8s ease-out forwards;
      }
      
      .observe-animate.slide-right {
        animation: slideInRight 0.8s ease-out forwards;
      }
      
      .observe-animate.scale-in {
        animation: scaleIn 0.8s ease-out forwards;
      }
      
      .text-justify { text-align: justify; }
      
      .phase-card {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }
      
      .phase-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(229, 57, 53, 0.1) 0%, rgba(229, 57, 53, 0) 100%);
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1;
      }
      
      .phase-card:hover::before {
        opacity: 1;
      }
      
      .phase-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }
      
      .phase-icon {
        position: relative;
        z-index: 2;
        transition: all 0.3s ease;
      }
      
      .phase-card:hover .phase-icon {
        transform: scale(1.1);
        color: #e53935;
      }
      
      .phase-content {
        position: relative;
        z-index: 2;
      }
      
      .phase-number {
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 48px;
        font-weight: 800;
        color: rgba(229, 57, 53, 0.1);
        transition: all 0.3s ease;
      }
      
      .phase-card:hover .phase-number {
        color: rgba(229, 57, 53, 0.2);
      }
      
      .service-card {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }
      
      .service-card::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, #e53935, transparent);
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }
      
      .service-card:hover::after {
        transform: translateX(0);
      }
      
      .service-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }
      
      .framework-item {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }
      
      .framework-item::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(229, 57, 53, 0.1), transparent);
        transition: left 0.3s ease;
        z-index: 1;
      }
      
      .framework-item:hover::before {
        left: 0;
      }
      
      .capability-card {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }
      
      .capability-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, rgba(229, 57, 53, 0.1) 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1;
      }
      
      .capability-card:hover::before {
        opacity: 1;
      }
      
      .capability-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }
      
      .stat-number {
        position: relative;
        display: inline-block;
      }
      
      .stat-number::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: #e53935;
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }
      
      .stat-card:hover .stat-number::after {
        transform: scaleX(1);
      }
    `
    document.head.appendChild(style)

    return () => {
      observer.disconnect()
      document.head.removeChild(style)
    }
  }, [])

  const services = [
    {
      icon: FaCertificate,
      title: "ISO 27001 Readiness",
      description: "Security governance models and frameworks, ISMS implementation, and management system integration for certification."
    },
    {
      icon: FaShieldAlt,
      title: "PCI DSS Readiness",
      description: "Comprehensive assessments to identify gaps, actionable recommendations, and control implementation for data protection."
    },
    {
      icon: FaChartLine,
      title: "SAMA MVC Assessment",
      description: "Information asset risk evaluation, technology risk assessments, and supply chain cyber risk evaluations."
    },
    {
      icon: FaClipboardCheck,
      title: "SAMA CRFR Assessment",
      description: "Business impact assessment, continuity planning, disaster recovery, and incident management frameworks."
    },
    {
      icon: FaEye,
      title: "Risk Assessment",
      description: "Comprehensive audits including PCI-DSS, ISO 27001, NIST compliance and ISMS certification services."
    },
    {
      icon: FaShieldAlt,
      title: "FDA Compliance",
      description: "Expert guidance tailored to ensure seamless FDA standards adherence and smooth product approval."
    }
  ]

  return (
    <>
      {/* Hero Banner */}
      <header role="banner" className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/gapanalysis/gapanalysis-banner.jpg"
            alt="Governance, Risk, and Compliance"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black"></div>
        </div>

        <div className="relative z-20 text-center px-4 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto" style={{ letterSpacing: '-0.02em' }}>
            Governance, <span className="text-red-600">Risk & Compliance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-justify">
            Strengthen your security posture and maintain regulatory excellence
          </p>
        </div>
      </header>

      {/* Main Content */}
      <section className="relative w-full bg-gradient-to-b from-black via-black to-black/95 py-20 md:py-32">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* GRC Overview Section - Split Layout */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div className="observe-animate slide-left space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-12 bg-red-600"></div>
                    <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">GRC Overview</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Unified Risk Management & Compliance Framework
                  </h2>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  Governance, Risk, and Compliance (GRC) is a structured approach that aligns IT with business goals while managing risks and ensuring regulatory adherence. It provides tools and processes to unify your organizations governance, risk management, and technological innovation.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  Our comprehensive GRC solutions help organizations build resilient security architectures, maintain continuous compliance, and establish robust governance frameworks tailored to your industry and operational needs.
                </p>

                <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="phase-card p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                    <div className="phase-number">01</div>
                    <div className="phase-icon mb-4">
                      <FaSearch className="text-2xl text-white" />
                    </div>
                    <p className="font-semibold text-white mb-2">Assessment Phase</p>
                    <p className="text-sm text-gray-300 text-justify">Initial compliance gap analysis and risk evaluation</p>
                  </div>
                  <div className="phase-card p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                    <div className="phase-number">02</div>
                    <div className="phase-icon mb-4">
                      <FaCog className="text-2xl text-white" />
                    </div>
                    <p className="font-semibold text-white mb-2">Implementation</p>
                    <p className="text-sm text-gray-300 text-justify">Deploy controls and governance frameworks</p>
                  </div>
                  <div className="phase-card p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                    <div className="phase-number">03</div>
                    <div className="phase-icon mb-4">
                      <FaEye className="text-2xl text-white" />
                    </div>
                    <p className="font-semibold text-white mb-2">Monitoring</p>
                    <p className="text-sm text-gray-300 text-justify">Continuous compliance tracking and auditing</p>
                  </div>
                  <div className="phase-card p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                    <div className="phase-number">04</div>
                    <div className="phase-icon mb-4">
                      <FaCertificate className="text-2xl text-white" />
                    </div>
                    <p className="font-semibold text-white mb-2">Certification</p>
                    <p className="text-sm text-gray-300 text-justify">Achieve and maintain regulatory certifications</p>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="observe-animate slide-right">
                <div className="relative h-96 md:h-full rounded-2xl overflow-hidden border-2 border-red-600/30 shadow-2xl group">
                  <Image
                    src="/images/services/gapanalysis/gapanalysis.jpg"
                    alt="Governance Risk Compliance"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/5 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid Section */}
          <div className="mb-20">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Our Solutions</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive GRC <span className="text-red-600">Services</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto text-justify">
                End-to-end solutions designed to strengthen your security posture and ensure continuous compliance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="service-card observe-animate scale-in group relative p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-6 inline-flex p-4 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="text-2xl text-red-600" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors text-justify">
                      {service.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-32 observe-animate scale-in">
            <div className="bg-gradient-to-r from-red-600/10 to-black border border-red-600/30 rounded-2xl p-12 md:p-16">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="stat-card space-y-3">
                  <p className="stat-number text-4xl md:text-5xl font-bold text-red-600">500+</p>
                  <p className="text-gray-400 text-justify">Compliance Frameworks</p>
                </div>
                <div className="stat-card space-y-3">
                  <p className="stat-number text-4xl md:text-5xl font-bold text-red-600">99%</p>
                  <p className="text-gray-400 text-justify">Success Rate</p>
                </div>
                <div className="stat-card space-y-3">
                  <p className="stat-number text-4xl md:text-5xl font-bold text-red-600">24/7</p>
                  <p className="text-gray-400 text-justify">Support Available</p>
                </div>
                <div className="stat-card space-y-3">
                  <p className="stat-number text-4xl md:text-5xl font-bold text-red-600">5+</p>
                  <p className="text-gray-400 text-justify">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 grid lg:grid-cols-2 gap-8 observe-animate">
            {/* Compliance Checklist */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <FaClipboardCheck className="text-2xl text-red-600" />
                <h3 className="text-2xl font-bold text-white">GRC Readiness Checklist</h3>
              </div>
              <div className="space-y-4">
                {['Governance Structure', 'Risk Assessment Framework', 'Compliance Policies', 'Access Controls', 'Incident Response Plan', 'Audit & Monitoring', 'Documentation & Evidence', 'Training & Awareness'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0">
                    <div className="mt-1 w-5 h-5 rounded-full bg-red-600/30 flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    </div>
                    <span className="text-gray-300 text-justify">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Framework Comparison */}
            <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <FaChartLine className="text-2xl text-red-600" />
                <h3 className="text-2xl font-bold text-white">Compliance Frameworks</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'ISO 27001', focus: 'Information Security' },
                  { name: 'PCI DSS', focus: 'Payment Card Data' },
                  { name: 'HIPAA', focus: 'Healthcare Data' },
                  { name: 'GDPR', focus: 'Data Privacy' },
                  { name: 'SOC 2', focus: 'Service Organizations' },
                  { name: 'NIST', focus: 'Cybersecurity Framework' }
                ].map((framework, i) => (
                  <div key={i} className="framework-item p-3 rounded-lg bg-red-600/5 border border-red-600/20 hover:border-red-600/40 hover:bg-red-600/10 transition-all cursor-pointer group">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-white group-hover:text-red-300 transition-colors text-justify">{framework.name}</p>
                      <span className="text-xs text-gray-400 group-hover:text-gray-300 text-justify">{framework.focus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Comprehensive Capabilities Section */}
          <div className="mt-32 observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our <span className="text-red-600">GRC Solutions</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="capability-card p-8 rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-red-600 mb-4">End-to-End</div>
                <p className="text-gray-300 text-justify">From assessment to certification, we handle every phase of your GRC journey with expert guidance and proven methodologies.</p>
              </div>
              <div className="capability-card p-8 rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-red-600 mb-4">Proactive</div>
                <p className="text-gray-300 text-justify">Stay ahead of threats and regulations with continuous monitoring, automated audits, and real-time compliance reporting.</p>
              </div>
              <div className="capability-card p-8 rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-red-600 mb-4">Expert Team</div>
                <p className="text-gray-300 text-justify">Industry-certified professionals with 5+ years of experience ensuring your organization meets highest security standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page