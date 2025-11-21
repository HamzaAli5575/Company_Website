"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaShieldAlt, FaChartLine, FaClipboardCheck, FaCheckCircle, FaGlobe, FaUsers, FaLock, FaSearch, FaExclamationTriangle, FaClock, FaNetworkWired, FaUserSecret, FaEye, FaTools, FaCertificate, FaFileAlt, FaServer, FaCloud, FaDatabase, FaKey, FaUserCheck, FaBalanceScale, FaUserShield, FaEnvelope, FaFingerprint, FaTrash, FaGavel, FaBuilding, FaHospital, FaUniversity, FaShoppingCart, FaCogs, FaLaptopMedical, FaChartBar, FaRegIdCard, FaSync, FaCreditCard, FaMoneyBillWave, FaShoppingBag, FaLevelUpAlt } from 'react-icons/fa'

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

  const pciRequirements = [
    { icon: FaShieldAlt, title: "Build & Maintain Network", desc: "Install and maintain a firewall configuration to protect cardholder data" },
    { icon: FaUserShield, title: "Protect Cardholder Data", desc: "Protect stored cardholder data and encrypt transmission across networks" },
    { icon: FaLock, title: "Vulnerability Management", desc: "Maintain a vulnerability management program and implement strong access controls" },
    { icon: FaNetworkWired, title: "Monitor & Test Networks", desc: "Regularly monitor and test networks and maintain an information security policy" }
  ]

  const pciLevels = [
    { 
      level: "Level 1", 
      transactions: "Over 6 million Visa transactions annually", 
      description: "Required to undergo an annual on-site assessment by a Qualified Security Assessor (QSA)",
      requirements: ["Annual Report on Compliance (ROC)", "Quarterly network scans", "Attestation of Compliance (AOC)"]
    },
    { 
      level: "Level 2", 
      transactions: "1 million to 6 million Visa transactions annually", 
      description: "Required to complete an annual Self-Assessment Questionnaire (SAQ) and quarterly network scans",
      requirements: ["Annual SAQ", "Quarterly network scans", "Attestation of Compliance (AOC)"]
    },
    { 
      level: "Level 3", 
      transactions: "20,000 to 1 million e-commerce transactions annually", 
      description: "Required to complete an annual Self-Assessment Questionnaire (SAQ) and quarterly network scans",
      requirements: ["Annual SAQ", "Quarterly network scans", "Attestation of Compliance (AOC)"]
    },
    { 
      level: "Level 4", 
      transactions: "Fewer than 20,000 e-commerce transactions annually", 
      description: "Required to complete an annual Self-Assessment Questionnaire (SAQ) and quarterly network scans",
      requirements: ["Annual SAQ", "Quarterly network scans", "Attestation of Compliance (AOC)"]
    }
  ]

  const assessmentProcess = [
    { icon: FaSearch, title: "Scope Definition", desc: "Identify all systems, networks, and processes that store, process, or transmit cardholder data" },
    { icon: FaClipboardCheck, title: "Gap Analysis", desc: "Assess current security controls against PCI DSS requirements" },
    { icon: FaTools, title: "Remediation", desc: "Address identified gaps and implement necessary security controls" },
    { icon: FaCertificate, title: "Validation", desc: "Complete required assessment and obtain validation from QSA or internal assessor" }
  ]

  const benefits = [
    "Reduced Breach Risk",
    "Customer Confidence",
    "Regulatory Compliance",
    "Avoidance of Penalties",
    "Enhanced Security Posture",
    "Competitive Advantage",
    "Improved Processes",
    "Brand Protection"
  ]

  const audiences = [
    "E-commerce Businesses",
    "Retail Merchants",
    "Financial Institutions",
    "Payment Processors",
    "Service Providers",
    "Hospitality Industry",
    "Healthcare Providers",
    "Government Agencies"
  ]

  const pciServices = [
    {
      icon: FaClipboardCheck,
      title: "PCI DSS Gap Analysis",
      description: "Comprehensive assessment of your organization's current security posture against PCI DSS requirements to identify compliance gaps.",
      features: [
        "Detailed gap assessment",
        "Risk prioritization",
        "Remediation roadmap",
        "Compliance scoring",
        "Executive summary"
      ]
    },
    {
      icon: FaFileAlt,
      title: "ROC & SAQ Assistance",
      description: "Expert guidance and support in completing Report on Compliance (ROC) and Self-Assessment Questionnaires (SAQ) for all merchant levels.",
      features: [
        "ROC preparation support",
        "SAQ completion assistance",
        "Evidence gathering",
        "Documentation review",
        "Attestation preparation"
      ]
    },
    {
      icon: FaChartLine,
      title: "Remediation Support",
      description: "Hands-on assistance in implementing necessary security controls to address PCI DSS compliance gaps.",
      features: [
        "Control implementation",
        "Policy development",
        "Technical configuration",
        "Process improvement",
        "Staff training"
      ]
    },
    {
      icon: FaSync,
      title: "Ongoing Compliance",
      description: "Continuous support to maintain PCI DSS compliance and prepare for annual assessments and audits.",
      features: [
        "Continuous monitoring",
        "Periodic assessments",
        "Policy updates",
        "Staff training programs",
        "Audit preparation"
      ]
    }
  ]

  const pciDomains = [
    {
      title: "Build and Maintain a Secure Network",
      description: "Focuses on network security architecture and configuration to protect cardholder data environments.",
      requirements: [
        "Install and maintain firewall configurations",
        "Change default vendor-supplied passwords",
        "Protect cardholder data",
        "Encrypt transmission of cardholder data"
      ]
    },
    {
      title: "Protect Cardholder Data",
      description: "Addresses the protection of stored cardholder data and encryption during transmission.",
      requirements: [
        "Protect stored cardholder data",
        "Encrypt transmission of cardholder data",
        "Maintain vulnerability management program",
        "Develop and maintain secure systems"
      ]
    },
    {
      title: "Maintain a Vulnerability Management Program",
      description: "Ensures regular identification and remediation of security vulnerabilities.",
      requirements: [
        "Use and regularly update anti-virus software",
        "Develop and maintain secure systems",
        "Implement strong access control measures",
        "Restrict access to cardholder data"
      ]
    },
    {
      title: "Implement Strong Access Control Measures",
      description: "Controls access to cardholder data based on business need-to-know and assigns unique IDs.",
      requirements: [
        "Restrict access to cardholder data",
        "Assign unique ID to each person",
        "Restrict physical access to cardholder data",
        "Track and monitor access to network resources"
      ]
    },
    {
      title: "Regularly Monitor and Test Networks",
      description: "Implements regular testing and monitoring of security controls and networks.",
      requirements: [
        "Track and monitor access to network resources",
        "Regularly test security systems and processes",
        "Maintain information security policy",
        "Ensure information security is maintained"
      ]
    },
    {
      title: "Maintain an Information Security Policy",
      description: "Establishes and maintains a formal information security policy that is communicated to all personnel.",
      requirements: [
        "Maintain information security policy",
        "Ensure information security is maintained",
        "Regularly test security systems",
        "Implement strong access controls"
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
            alt="PCI DSS Assessment"
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
            PCI DSS <span className="text-red-600">Assessment</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-justify">
            Comprehensive PCI DSS compliance assessment and validation services
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
                    <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Payment Security</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    PCI DSS Compliance
                  </h2>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  The Payment Card Industry Data Security Standard (PCI DSS) is a set of security standards designed to ensure that all companies that accept, process, store, or transmit credit card information maintain a secure environment. PCI DSS compliance is mandatory for any organization that handles cardholder data, regardless of size or transaction volume.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  Non-compliance with PCI DSS can result in significant fines, increased transaction fees, and even the inability to accept credit card payments. Our PCI DSS assessment services help organizations navigate the complex requirements, implement necessary controls, and achieve and maintain compliance to protect both customers and your business.
                </p>

                <div className="pt-6 space-y-3">
                  {['12 PCI DSS Requirements', '4 Merchant Levels', 'Annual Validation', 'Quarterly Scanning', 'Risk Assessment', 'Compliance Documentation'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div>
                      <span className="text-gray-300 text-justify">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="observe-animate slide-right">
                <div className="relative h-96 md:h-full rounded-2xl overflow-hidden border-2 border-red-600/30 shadow-2xl group">
                  <Image
                    src="/images/services/gapanalysis/gapanalysis.jpg"
                    alt="PCI DSS Assessment"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* PCI Requirements Overview */}
          <div className="mb-20">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Core Requirements</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                PCI DSS <span className="text-red-600">Requirements</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pciRequirements.map((requirement, index) => {
                const Icon = requirement.icon
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
                      {requirement.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors text-justify">
                      {requirement.desc}
                    </p>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* PCI Levels Section */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Merchant Levels</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                PCI DSS <span className="text-red-600">Merchant Levels</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {pciLevels.map((level, index) => (
                <div
                  key={index}
                  className={`observe-animate ${index % 2 === 0 ? 'slide-left' : 'slide-right'} bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-red-600/20 rounded-lg">
                      <FaLevelUpAlt className="text-3xl text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{level.level}</h3>
                      <p className="text-red-500 font-medium">{level.transactions}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed text-justify">
                    {level.description}
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <FaClipboardCheck className="text-red-600" />
                      Requirements
                    </h4>
                    <ul className="space-y-3">
                      {level.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                          <span className="text-gray-300 text-justify">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PCI Domains */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Requirement Domains</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                PCI DSS <span className="text-red-600">Requirement Domains</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pciDomains.map((domain, index) => (
                <div
                  key={index}
                  className={`observe-animate scale-in bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-red-600/50 transition-all`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{domain.title}</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed text-justify">
                    {domain.description}
                  </p>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {domain.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                          <span className="text-gray-300 text-sm text-justify">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment Process */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Assessment Process</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our PCI DSS <span className="text-red-600">Assessment Process</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {assessmentProcess.map((step, index) => {
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

          {/* PCI Services */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Our Services</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our PCI DSS <span className="text-red-600">Services</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {pciServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className={`observe-animate ${index % 2 === 0 ? 'slide-left' : 'slide-right'} bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-red-600/20 rounded-lg">
                        <Icon className="text-3xl text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed text-justify">
                      {service.description}
                    </p>
                    
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <FaClipboardCheck className="text-red-600" />
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                            <span className="text-gray-300 text-justify">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-32 observe-animate">
            <div className="bg-gradient-to-r from-red-600/10 to-black border border-red-600/30 rounded-2xl p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Benefits of PCI DSS <span className="text-red-600">Compliance</span></h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

          {/* Who Needs PCI DSS Section */}
          <div className="mb-32 observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Who Needs <span className="text-red-600">PCI DSS Compliance?</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                Our <span className="text-red-600">PCI DSS Approach</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaGlobe className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Payment Industry Expertise</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Qualified Security Assessors (QSAs)</p>
                  <p className="text-gray-300 text-justify">Payment Industry Specialists</p>
                  <p className="text-gray-300 text-justify">Cross-Platform Experience</p>
                  <p className="text-gray-300 text-justify">Regulatory Knowledge</p>
                  <p className="text-gray-300 text-justify">Global Compliance Experience</p>
                  <p className="text-gray-300 text-justify">Continuous Standard Updates</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaLock className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Security Excellence</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Comprehensive Risk Assessments</p>
                  <p className="text-gray-300 text-justify">Customized Control Implementation</p>
                  <p className="text-gray-300 text-justify">Technical Configuration Support</p>
                  <p className="text-gray-300 text-justify">Policy and Procedure Development</p>
                  <p className="text-gray-300 text-justify">Continuous Monitoring Solutions</p>
                  <p className="text-gray-300 text-justify">Audit Preparation Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* PCI DSS Service Details */}
          <div className="observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                PCI DSS <span className="text-red-600">Compliance Details</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Scope & Complexity</div>
                <p className="text-gray-300 text-justify">PCI DSS compliance scope varies based on transaction volume, payment channels, and cardholder data environment. Our experts help define and minimize your scope while ensuring comprehensive coverage.</p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Validation Timeline</div>
                <p className="text-gray-300 text-justify">PCI DSS validation typically takes 2-4 months depending on organization size, complexity, and current security posture. We provide efficient assessment processes to minimize disruption to your business.</p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Ongoing Compliance</div>
                <p className="text-gray-300 text-justify">PCI DSS requires annual validation and quarterly network scans. Our ongoing compliance services ensure you maintain compliance year-round and are prepared for annual assessments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page