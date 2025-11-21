"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaShieldAlt, FaClipboardCheck, FaCheckCircle, FaLock, FaSync, FaFileAlt, FaChartBar, FaUserShield, FaNetworkWired, FaCogs, FaRegLightbulb, FaRegChartBar, FaRegObjectGroup } from 'react-icons/fa'

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

  // Key Features/Benefits
  const benefits = [
    "Accelerated HITRUST Certification",
    "End-to-End Compliance Management",
    "Reduced Risk of Data Breaches",
    "Enhanced Trust with Stakeholders",
    "Streamlined Regulatory Alignment",
    "Continuous Security Monitoring",
    "Expert Guidance at Every Step",
    "Competitive Advantage in the Market"
  ]

  // Who Needs HITRUST
  const audiences = [
    "Healthcare Providers",
    "Health Tech Companies",
    "Insurance Organizations",
    "Pharmaceutical Firms",
    "Cloud Service Providers",
    "Financial Services",
    "Business Associates",
    "Any Organization Handling Sensitive Data"
  ]

  // HITRUST Services
  const services = [
    {
      icon: FaClipboardCheck,
      title: "HITRUST Readiness Assessment",
      description: "Comprehensive evaluation of your current security and compliance posture against HITRUST CSF requirements.",
      features: [
        "Gap analysis against HITRUST CSF controls",
        "Risk assessment and prioritization",
        "Remediation roadmap",
        "Stakeholder workshops",
        "Readiness reporting"
      ]
    },
    {
      icon: FaFileAlt,
      title: "Policy & Documentation Support",
      description: "Development and enhancement of policies, procedures, and documentation to meet HITRUST standards.",
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
      title: "Control Implementation & Automation",
      description: "Implementation of technical and organizational controls, with automation for continuous compliance.",
      features: [
        "Security control deployment",
        "Access management solutions",
        "Encryption and data protection",
        "Monitoring and alerting",
        "Automated evidence collection"
      ]
    },
    {
      icon: FaSync,
      title: "Continuous Compliance Monitoring",
      description: "Ongoing monitoring, periodic reviews, and support to maintain HITRUST compliance.",
      features: [
        "Regular compliance checks",
        "Vulnerability scanning",
        "Incident tracking",
        "Audit preparation",
        "Reporting to management"
      ]
    }
  ]

  // HITRUST CSF Pillars
  const pillars = [
    {
      icon: FaLock,
      title: "Comprehensive Security Controls",
      desc: "Over 150 security and privacy controls mapped to multiple regulations and standards."
    },
    {
      icon: FaUserShield,
      title: "Risk-Based Approach",
      desc: "Tailored controls and requirements based on your organization's risk profile and data environment."
    },
    {
      icon: FaNetworkWired,
      title: "Integrated Compliance",
      desc: "Alignment with HIPAA, GDPR, PCI DSS, ISO, NIST, and more for unified compliance."
    },
    {
      icon: FaCogs,
      title: "Continuous Improvement",
      desc: "Ongoing monitoring, assessment, and enhancement of your security posture."
    }
  ]

  // HITRUST Certification Process Steps
  const processSteps = [
    {
      icon: FaRegLightbulb,
      title: "Discovery & Planning",
      desc: "Understand your environment, define scope, and set clear objectives for HITRUST certification."
    },
    {
      icon: FaRegObjectGroup,
      title: "Gap Assessment",
      desc: "Identify gaps against HITRUST CSF controls and develop a prioritized remediation plan."
    },
    {
      icon: FaRegChartBar,
      title: "Remediation & Implementation",
      desc: "Address gaps, implement controls, and prepare documentation and evidence."
    },
    {
      icon: FaClipboardCheck,
      title: "Validation & Certification",
      desc: "Undergo validated assessment and achieve HITRUST certification with ongoing support."
    }
  ]

  // Key Regulations/Frameworks
  const keyRegulations = [
    { title: "HITRUST CSF", description: "Comprehensive security and privacy framework for managing risk and compliance." },
    { title: "HIPAA", description: "Health Insurance Portability and Accountability Act compliance alignment." },
    { title: "GDPR", description: "General Data Protection Regulation for privacy and data protection." },
    { title: "PCI DSS", description: "Payment Card Industry Data Security Standard for payment security." },
    { title: "ISO 27001", description: "International standard for information security management systems." },
    { title: "NIST", description: "National Institute of Standards and Technology cybersecurity framework." }
  ]

  return (
    <>
      {/* Hero Banner */}
      <header role="banner" className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/VAPT/vapt-banner.jpg"
            alt="HITRUST Compliance"
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
            HITRUST <span className="text-red-600">Compliance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-justify">
            Achieve trusted, unified compliance and security with HITRUST CSF. Accelerate certification, reduce risk, and build stakeholder confidence with expert guidance.
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
                    <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Unified Security & Compliance</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    HITRUST CSF Compliance & Certification
                  </h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  HITRUST CSF is the gold standard for organizations seeking to demonstrate robust security, privacy, and compliance across multiple regulations. By unifying requirements from HIPAA, GDPR, PCI DSS, ISO, and more, HITRUST enables organizations to streamline compliance, reduce audit fatigue, and build trust with partners and clients.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  Our HITRUST compliance services deliver end-to-end support—from readiness assessment and gap analysis to remediation, documentation, and certification. With deep expertise and proven methodologies, we accelerate your journey to HITRUST certification and empower your organization to maintain continuous compliance.
                </p>
                <div className="pt-6 space-y-3">
                  {['Readiness Assessment', 'Gap Analysis', 'Remediation Planning', 'Policy & Documentation', 'Control Implementation', 'Certification Support'].map((item, i) => (
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
                    src="/images/services/HITRUST/hitrust-overview.jpg"
                    alt="HITRUST Compliance Overview"
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
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Framework Alignment</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key <span className="text-red-600">Frameworks & Standards</span>
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

          {/* HITRUST CSF Pillars */}
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
                HITRUST CSF <span className="text-red-600">Key Pillars</span>
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

          {/* HITRUST Certification Process */}
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
                HITRUST <span className="text-red-600">Certification Process</span>
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

          {/* HITRUST Services */}
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
                Our HITRUST <span className="text-red-600">Compliance Services</span>
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
                Benefits of <span className="text-red-600">HITRUST Compliance</span>
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

          {/* Who Needs HITRUST Section */}
          <div className="mb-32 observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Who Needs <span className="text-red-600">HITRUST Compliance?</span>
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
                      <FaUserShield className="text-xl text-red-600" />
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
                Our <span className="text-red-600">HITRUST Approach</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaShieldAlt className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Expert-Led Compliance</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Certified HITRUST professionals</p>
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
                  <p className="text-gray-300 text-justify">Unified compliance across frameworks</p>
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
                HITRUST <span className="text-red-600">Implementation Details</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Mandatory Requirement</div>
                <p className="text-gray-300 text-justify">
                  HITRUST certification is increasingly required for organizations handling sensitive data. Non-compliance can result in lost business opportunities and reputational risk.
                </p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Implementation</div>
                <p className="text-gray-300 text-justify">
                  The certification process includes readiness assessment, gap remediation, documentation, and validated assessment. Our structured approach ensures timely and effective compliance.
                </p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Business Value</div>
                <p className="text-gray-300 text-justify">
                  Achieving HITRUST compliance demonstrates your commitment to security and privacy, opening doors to new partnerships and markets.
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