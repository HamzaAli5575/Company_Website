"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaShieldAlt, FaClipboardCheck, FaCheckCircle, FaLock, FaSync, FaFileAlt, FaChartBar, FaUserShield, FaNetworkWired, FaCogs, FaRegLightbulb, FaRegChartBar, FaRegObjectGroup, FaCreditCard, FaDatabase, FaExclamationTriangle } from 'react-icons/fa'

const Page = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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

  // Key Benefits
  const benefits = [
    "Protect Cardholder Data",
    "Reduce Risk of Data Breaches",
    "Build Customer Trust",
    "Avoid Costly Fines and Penalties",
    "Streamline Compliance Processes",
    "Enable Secure Payment Acceptance",
    "Meet Global Payment Standards",
    "Enhance Brand Reputation"
  ]

  // Who Needs PCI DSS
  const audiences = [
    "Merchants",
    "Payment Processors",
    "E-commerce Businesses",
    "Financial Institutions",
    "Service Providers",
    "Retailers",
    "Hospitality Providers",
    "Any Organization Handling Cardholder Data"
  ]

  // PCI DSS Services
  const services = [
    {
      icon: FaClipboardCheck,
      title: "PCI DSS Gap Assessment",
      description: "Comprehensive evaluation of your current security posture against PCI DSS requirements.",
      features: [
        "Gap analysis against PCI DSS controls",
        "Risk assessment and prioritization",
        "Remediation roadmap",
        "Stakeholder workshops",
        "Readiness reporting"
      ]
    },
    {
      icon: FaFileAlt,
      title: "Policy & Documentation Support",
      description: "Development and enhancement of policies, procedures, and documentation to meet PCI DSS standards.",
      features: [
        "Policy drafting & review",
        "Procedure development",
        "Evidence collection guidance",
        "Audit documentation",
        "Compliance checklists"
      ]
    },
    {
      icon: FaShieldAlt,
      title: "Control Implementation & Security Hardening",
      description: "Implementation of technical and organizational controls for PCI DSS compliance.",
      features: [
        "Network segmentation",
        "Access management solutions",
        "Encryption and data protection",
        "Monitoring and alerting",
        "Vulnerability management"
      ]
    },
    {
      icon: FaSync,
      title: "Continuous Compliance Monitoring",
      description: "Ongoing monitoring, periodic reviews, and support to maintain PCI DSS compliance.",
      features: [
        "Regular compliance checks",
        "Vulnerability scanning",
        "Incident tracking",
        "Audit preparation",
        "Reporting to management"
      ]
    }
  ]

  // PCI DSS Pillars
  const pillars = [
    {
      icon: FaLock,
      title: "Secure Cardholder Data",
      desc: "Protect stored and transmitted cardholder data with strong encryption and access controls."
    },
    {
      icon: FaUserShield,
      title: "Access Control Measures",
      desc: "Restrict access to cardholder data by business need-to-know and enforce strong authentication."
    },
    {
      icon: FaNetworkWired,
      title: "Network Security",
      desc: "Build and maintain secure networks and systems to defend against threats."
    },
    {
      icon: FaCogs,
      title: "Continuous Monitoring",
      desc: "Regularly monitor and test networks to detect and respond to security incidents."
    }
  ]

  // PCI DSS Certification Steps
  const processSteps = [
    {
      icon: FaRegLightbulb,
      title: "Scoping & Planning",
      desc: "Define the scope of cardholder data environment and set clear objectives for PCI DSS compliance."
    },
    {
      icon: FaRegObjectGroup,
      title: "Gap Assessment",
      desc: "Identify gaps against PCI DSS requirements and develop a prioritized remediation plan."
    },
    {
      icon: FaRegChartBar,
      title: "Remediation & Implementation",
      desc: "Address gaps, implement controls, and prepare documentation and evidence."
    },
    {
      icon: FaClipboardCheck,
      title: "Validation & Certification",
      desc: "Undergo assessment and achieve PCI DSS certification with ongoing support."
    }
  ]

  // Key Requirements/Frameworks
  const keyRegulations = [
    { title: "PCI DSS", description: "Payment Card Industry Data Security Standard for protecting cardholder data." },
    { title: "Cardholder Data Environment (CDE)", description: "Systems and processes that store, process, or transmit cardholder data." },
    { title: "12 PCI DSS Requirements", description: "Comprehensive set of security controls for payment data protection." },
    { title: "Vulnerability Management", description: "Ongoing identification and remediation of security weaknesses." },
    { title: "Access Control", description: "Restricting access to cardholder data and systems." },
    { title: "Monitoring & Testing", description: "Continuous monitoring and regular testing of security systems and processes." }
  ]

  // PCI DSS 12 Requirements
  const requirements = [
    "Install and maintain a firewall configuration to protect cardholder data",
    "Do not use vendor-supplied defaults for system passwords and other security parameters",
    "Protect stored cardholder data",
    "Encrypt transmission of cardholder data across open, public networks",
    "Protect all systems against malware and regularly update anti-virus software",
    "Develop and maintain secure systems and applications",
    "Restrict access to cardholder data by business need-to-know",
    "Identify and authenticate access to system components",
    "Restrict physical access to cardholder data",
    "Track and monitor all access to network resources and cardholder data",
    "Regularly test security systems and processes",
    "Maintain a policy that addresses information security for all personnel"
  ]

  return (
    <>
      {/* Hero Banner */}
      <header role="banner" className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/VAPT/vapt-banner.jpg"
            alt="PCI DSS Compliance"
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
            PCI DSS <span className="text-red-600">Compliance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-justify">
            Achieve robust payment security and compliance with PCI DSS. Protect cardholder data, reduce risk, and build customer trust with expert guidance.
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
                    <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Payment Security & Compliance</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    PCI DSS Certification & Security
                  </h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  PCI DSS is the global standard for securing payment card data. Any organization that stores, processes, or transmits cardholder data must comply with PCI DSS to protect sensitive information, prevent data breaches, and maintain customer trust.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  Our PCI DSS compliance services provide end-to-end support—from scoping and gap assessment to remediation, documentation, and certification. With deep expertise and proven methodologies, we help you achieve and maintain PCI DSS compliance efficiently and effectively.
                </p>
                <div className="pt-6 space-y-3">
                  {['Gap Assessment', 'Remediation Planning', 'Policy & Documentation', 'Control Implementation', 'Certification Support', 'Continuous Monitoring'].map((item, i) => (
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
                    src="/images/services/PCI/pci-overview.jpg"
                    alt="PCI DSS Compliance Overview"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Regulations */}
          <div className="mb-32 observe-animate">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">PCI DSS Framework</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key <span className="text-red-600">Requirements & Controls</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyRegulations.map((regulation, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-red-600/10 to-red-600/5 border border-red-600/30 rounded-xl hover:shadow-2xl hover:shadow-red-600/20 transition-all group"
                >
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-red-600 mb-2">{regulation.title}</div>
                    <p className="text-gray-300 text-sm text-justify">{regulation.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PCI DSS Pillars */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Core Pillars</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                PCI DSS <span className="text-red-600">Key Pillars</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon
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
                      {pillar.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors text-justify">
                      {pillar.desc}
                    </p>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* PCI DSS 12 Requirements */}
          <div className="mb-32 observe-animate">
            <div className="bg-gradient-to-r from-red-600/10 to-black border border-red-600/30 rounded-2xl p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                The 12 <span className="text-red-600">PCI DSS Requirements</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {requirements.map((req, i) => (
                  <div
                    key={i}
                    className="p-6 bg-black/40 border border-white/10 rounded-xl hover:border-red-600/50 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-red-600/20 rounded-lg group-hover:bg-red-600/30 transition-all">
                        <FaCheckCircle className="text-xl text-red-600" />
                      </div>
                      <p className="text-white font-semibold group-hover:text-red-300 transition-colors text-justify">{req}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PCI DSS Certification Process */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Certification Journey</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                PCI DSS <span className="text-red-600">Certification Process</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => {
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

          {/* PCI DSS Services */}
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
                Our PCI DSS <span className="text-red-600">Compliance Services</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Benefits of <span className="text-red-600">PCI DSS Compliance</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="p-6 bg-black/40 border border-white/10 rounded-xl hover:border-red-600/50 transition-all group"
                  >
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
                <div
                  key={i}
                  className="p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl hover:border-red-600/50 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-600/20 rounded-lg group-hover:bg-red-600/30 transition-all">
                      <FaCreditCard className="text-xl text-red-600" />
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
                  <FaShieldAlt className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Expert-Led Compliance</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Certified PCI DSS professionals</p>
                  <p className="text-gray-300 text-justify">Proven methodologies</p>
                  <p className="text-gray-300 text-justify">End-to-end project management</p>
                  <p className="text-gray-300 text-justify">Stakeholder training & workshops</p>
                  <p className="text-gray-300 text-justify">Continuous improvement focus</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaCogs className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Comprehensive Solutions</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Unified compliance across payment standards</p>
                  <p className="text-gray-300 text-justify">Technical control implementation</p>
                  <p className="text-gray-300 text-justify">Risk assessment & mitigation</p>
                  <p className="text-gray-300 text-justify">Documentation & reporting</p>
                  <p className="text-gray-300 text-justify">Continuous monitoring & support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Details */}
          <div className="observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                PCI DSS <span className="text-red-600">Implementation Details</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Mandatory Requirement</div>
                <p className="text-gray-300 text-justify">
                  PCI DSS compliance is mandatory for any organization handling payment card data. Non-compliance can result in fines, penalties, and reputational damage.
                </p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Implementation</div>
                <p className="text-gray-300 text-justify">
                  The certification process includes scoping, gap assessment, remediation, documentation, and validation. Our structured approach ensures timely and effective compliance.
                </p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Business Value</div>
                <p className="text-gray-300 text-justify">
                  Achieving PCI DSS compliance demonstrates your commitment to payment security, enabling safe transactions and building customer trust.
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