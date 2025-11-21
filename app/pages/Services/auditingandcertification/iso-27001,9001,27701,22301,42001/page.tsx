"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaCertificate, FaShieldAlt, FaChartLine, FaClipboardCheck, FaBookmark, FaGraduationCap, FaCheckCircle, FaGlobe, FaUsers, FaLock, FaUserShield, FaDatabase, FaCogs, FaServer, FaSync } from 'react-icons/fa'

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

  const certificationSteps = [
    { icon: FaClipboardCheck, title: "Gap Analysis", desc: "Comprehensive assessment of your current security posture against ISO standards" },
    { icon: FaChartLine, title: "Remediation Planning", desc: "Developing a strategic roadmap to address identified gaps and vulnerabilities" },
    { icon: FaShieldAlt, title: "Implementation", desc: "Executing security controls and processes to meet ISO requirements" },
    { icon: FaCertificate, title: "Certification", desc: "Final audit and official certification by accredited bodies" }
  ]

  const benefits = [
    "Enhanced Security Posture",
    "Global Market Access",
    "Regulatory Compliance",
    "Customer Trust & Confidence",
    "Competitive Advantage",
    "Risk Management"
  ]

  const audiences = [
    "Financial Institutions",
    "Healthcare Providers",
    "Government Agencies",
    "Technology Companies",
    "Manufacturing Sector",
    "Service Providers"
  ]

  const isoStandards = [
    {
      id: "iso-27001",
      icon: FaShieldAlt,
      title: "ISO 27001",
      subtitle: "Information Security Management",
      description: "ISO 27001 is the international standard for information security management systems (ISMS). It provides a framework for managing sensitive company information so that it remains secure.",
      keyPoints: [
        "Risk assessment and treatment methodology",
        "Comprehensive set of security controls",
        "Legal and regulatory compliance requirements",
        "Continuous improvement through PDCA cycle"
      ],
      benefits: [
        "Protects against security threats and vulnerabilities",
        "Demonstrates commitment to information security",
        "Helps comply with legal and regulatory requirements",
        "Improves business continuity management"
      ]
    },
    {
      id: "iso-27701",
      icon: FaUserShield,
      title: "ISO 27701",
      subtitle: "Privacy Information Management",
      description: "ISO 27701 is an extension to ISO 27001 for privacy information management. It helps organizations manage personal data and comply with privacy regulations like GDPR.",
      keyPoints: [
        "Privacy information management system (PIMS)",
        "Controller and processor requirements",
        "GDPR compliance support",
        "Enhanced privacy protection measures"
      ],
      benefits: [
        "Builds trust with customers and stakeholders",
        "Demonstrates compliance with privacy regulations",
        "Reduces risk of data breaches and fines",
        "Provides competitive advantage in privacy-conscious markets"
      ]
    },
    {
      id: "iso-9001",
      icon: FaCheckCircle,
      title: "ISO 9001",
      subtitle: "Quality Management",
      description: "ISO 9001 is the international standard for quality management systems (QMS). It helps organizations ensure they meet customer and other stakeholder needs.",
      keyPoints: [
        "Customer focus and satisfaction",
        "Process approach and continuous improvement",
        "Evidence-based decision making",
        "Relationship management"
      ],
      benefits: [
        "Improved product quality and consistency",
        "Increased customer satisfaction",
        "Enhanced operational efficiency",
        "Reduced waste and costs"
      ]
    },
    {
      id: "iso-20000",
      icon: FaCogs,
      title: "ISO 20000",
      subtitle: "IT Service Management",
      description: "ISO 20000 is the international standard for IT service management (ITSM). It helps organizations deliver effective IT services that meet business and customer requirements.",
      keyPoints: [
        "Service delivery and support processes",
        "Service level management",
        "Incident and problem management",
        "Change and release management"
      ],
      benefits: [
        "Improved IT service quality and reliability",
        "Better alignment between IT and business objectives",
        "Reduced service disruptions and downtime",
        "Enhanced customer satisfaction"
      ]
    },
    {
      id: "iso-22301",
      icon: FaSync,
      title: "ISO 22301",
      subtitle: "Business Continuity Management",
      description: "ISO 22301 is the international standard for business continuity management systems (BCMS). It helps organizations prepare for, respond to, and recover from disruptive incidents.",
      keyPoints: [
        "Business impact analysis",
        "Risk assessment and treatment",
        "Business continuity strategies",
        "Testing and exercising plans"
      ],
      benefits: [
        "Improved resilience to disruptions",
        "Reduced downtime and financial losses",
        "Enhanced stakeholder confidence",
        "Compliance with regulatory requirements"
      ]
    }
  ]

  return (
    <>
      {/* Hero Banner */}
      <header role="banner" className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/gapanalysis/gapanalysis-banner.jpg"
            alt="ISO Certification Journey"
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
            ISO <span className="text-red-600">Certification Journey</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-justify">
            Navigate the path to internationally recognized security excellence with our comprehensive ISO certification services
          </p>
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
                    <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Certification Excellence</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Achieve Global Security Standards
                  </h2>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  ISO certification demonstrates your organizations commitment to information security best practices. Our expert-led journey guides you through every phase of the certification process, ensuring seamless implementation and compliance with international standards.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  With a proven methodology tailored to your unique business requirements, we help you transform your security posture while minimizing operational disruption. Our comprehensive approach covers everything from initial assessment to final certification and beyond.
                </p>

                <div className="pt-6 space-y-3">
                  {isoStandards.map((standard, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div>
                      <span className="text-gray-300 text-justify">{standard.title} - {standard.subtitle}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="observe-animate slide-right">
                <div className="relative h-96 md:h-full rounded-2xl overflow-hidden border-2 border-red-600/30 shadow-2xl group">
                  <Image
                    src="/images/services/gapanalysis/gapanalysis.jpg"
                    alt="ISO Certification Process"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Certification Journey Steps */}
          <div className="mb-20">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Certification Process</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your ISO <span className="text-red-600">Certification Journey</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificationSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={index}
                    className="observe-animate scale-in group relative p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-red-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-600/20"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-6 inline-flex p-4 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="text-2xl text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors text-justify">
                      {step.desc}
                    </p>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ISO Standards Section */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">ISO Standards</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive <span className="text-red-600">ISO Certification Standards</span>
              </h2>
            </div>

            <div className="space-y-12">
              {isoStandards.map((standard, index) => {
                const Icon = standard.icon
                return (
                  <div
                    key={standard.id}
                    className={`observe-animate ${index % 2 === 0 ? 'slide-left' : 'slide-right'} bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-red-600/20 rounded-lg">
                        <Icon className="text-3xl text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{standard.title}</h3>
                        <p className="text-red-500 font-medium text-lg">{standard.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed text-justify">
                      {standard.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <FaClipboardCheck className="text-red-600" />
                          Key Components
                        </h4>
                        <ul className="space-y-3">
                          {standard.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                              <span className="text-gray-300 text-justify">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <FaCheckCircle className="text-red-600" />
                          Benefits
                        </h4>
                        <ul className="space-y-3">
                          {standard.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                              <span className="text-gray-300 text-justify">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-32 observe-animate">
            <div className="bg-gradient-to-r from-red-600/10 to-black border border-red-600/30 rounded-2xl p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Why Pursue ISO <span className="text-red-600">Certification?</span></h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="p-6 bg-black/40 border border-white/10 rounded-xl hover:border-red-600/50 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-red-600/20 rounded-lg group-hover:bg-red-600/30 transition-all">
                        <FaCheckCircle className="text-xl text-red-600" />
                      </div>
                      <p className="text-white font-semibold group-hover:text-red-300 transition-colors text-justify">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Who Benefits Section */}
          <div className="mb-32 observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Who Benefits from ISO <span className="text-red-600">Certification?</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audiences.map((audience, i) => (
                <div key={i} className="p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl hover:border-red-600/50 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-600/20 rounded-lg group-hover:bg-red-600/30 transition-all">
                      <FaUsers className="text-xl text-red-600" />
                    </div>
                    <p className="text-white font-semibold group-hover:text-red-300 transition-colors text-justify">{audience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-32 observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-red-600">Certification Approach</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaGlobe className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Global Expertise</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Certified ISO Lead Implementers</p>
                  <p className="text-gray-300 text-justify">Industry-Specific Knowledge</p>
                  <p className="text-gray-300 text-justify">Global Regulatory Compliance</p>
                  <p className="text-gray-300 text-justify">Cross-Border Certification Experience</p>
                  <p className="text-gray-300 text-justify">Continuous Support & Maintenance</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaLock className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Security Excellence</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Risk-Based Implementation</p>
                  <p className="text-gray-300 text-justify">Comprehensive Gap Analysis</p>
                  <p className="text-gray-300 text-justify">Customized Security Frameworks</p>
                  <p className="text-gray-300 text-justify">Continuous Monitoring Solutions</p>
                  <p className="text-gray-300 text-justify">Ongoing Compliance Management</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certification Details */}
          <div className="observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Certification <span className="text-red-600">Details</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Flexible Timeline</div>
                <p className="text-gray-300 text-justify">Certification journey tailored to your organizations pace, typically 6-12 months depending on scope and complexity.</p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Comprehensive Support</div>
                <p className="text-gray-300 text-justify">End-to-end assistance from initial assessment through certification and ongoing maintenance of your ISO compliance.</p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Measurable Results</div>
                <p className="text-gray-300 text-justify">Demonstrable improvements in security posture, operational efficiency, and market positioning through certification.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page