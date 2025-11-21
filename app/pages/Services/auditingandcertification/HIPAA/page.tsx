"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaShieldAlt, FaChartLine, FaClipboardCheck, FaCheckCircle, FaGlobe, FaUsers, FaLock, FaSearch, FaExclamationTriangle, FaClock, FaNetworkWired, FaUserSecret, FaEye, FaTools, FaCertificate, FaFileAlt, FaServer, FaCloud, FaDatabase, FaKey, FaUserCheck, FaBalanceScale, FaUserShield, FaEnvelope, FaFingerprint, FaTrash, FaGavel, FaBuilding, FaHospital, FaUniversity, FaShoppingCart, FaCogs, FaLaptopMedical, FaChartBar, FaRegIdCard, FaSync, FaHeartbeat, FaNotesMedical, FaUserMd, FaAmbulance } from 'react-icons/fa'

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

  const complianceComponents = [
    { icon: FaShieldAlt, title: "Risk Analysis", desc: "Comprehensive assessment of potential risks to ePHI" },
    { icon: FaUserShield, title: "Administrative Safeguards", desc: "Policies and procedures for managing PHI" },
    { icon: FaLock, title: "Technical Safeguards", desc: "Technology and policies to protect ePHI" },
    { icon: FaBuilding, title: "Physical Safeguards", desc: "Physical measures to protect facilities and equipment" }
  ]

  const complianceProcess = [
    { icon: FaSearch, title: "Gap Analysis", desc: "Assessment against HIPAA and PHIPA requirements" },
    { icon: FaClipboardCheck, title: "Remediation", desc: "Addressing identified compliance gaps" },
    { icon: FaTools, title: "Implementation", desc: "Deploying necessary controls and policies" },
    { icon: FaCertificate, title: "Validation", desc: "Ongoing monitoring and compliance verification" }
  ]

  const benefits = [
    "Regulatory Compliance",
    "Reduced Breach Risk",
    "Enhanced Patient Trust",
    "Avoidance of Penalties",
    "Improved Data Security",
    "Streamlined Operations",
    "Competitive Advantage",
    "Comprehensive Documentation"
  ]

  const audiences = [
    "Healthcare Providers",
    "Health Plans",
    "Healthcare Clearinghouses",
    "Business Associates",
    "Health IT Vendors",
    "Medical Practices",
    "Hospitals",
    "Canadian Health Organizations"
  ]

  const complianceServices = [
    {
      icon: FaClipboardCheck,
      title: "HIPAA/PHIPA Risk Assessment",
      description: "Comprehensive evaluation of your organization's compliance with HIPAA and PHIPA requirements, including identification of potential risks and vulnerabilities.",
      features: [
        "Comprehensive risk analysis",
        "Vulnerability identification",
        "Threat assessment",
        "Impact analysis",
        "Remediation recommendations"
      ]
    },
    {
      icon: FaFileAlt,
      title: "Policy & Procedure Development",
      description: "Creation and implementation of customized policies and procedures to meet HIPAA and PHIPA requirements for your organization.",
      features: [
        "Custom policy development",
        "Procedure documentation",
        "Privacy and security policies",
        "Breach notification procedures",
        "Employee training materials"
      ]
    },
    {
      icon: FaChartLine,
      title: "Compliance Program Implementation",
      description: "End-to-end implementation of HIPAA and PHIPA compliance programs, including technical, administrative, and physical safeguards.",
      features: [
        "Safeguard implementation",
        "Employee training programs",
        "Business associate agreements",
        "Incident response planning",
        "Compliance monitoring"
      ]
    },
    {
      icon: FaSync,
      title: "Ongoing Compliance Management",
      description: "Continuous support to maintain HIPAA and PHIPA compliance, including regular assessments, updates, and training.",
      features: [
        "Periodic compliance reviews",
        "Policy updates and maintenance",
        "Continuous risk monitoring",
        "Regulatory change management",
        "Annual compliance training"
      ]
    }
  ]

  const hipaaRules = [
    {
      title: "HIPAA Privacy Rule",
      description: "Establishes national standards to protect individuals' medical records and other personal health information.",
      items: [
        "Protected Health Information (PHI) protection",
        "Patient rights regarding PHI",
        "Use and disclosure limitations",
        "Authorization requirements",
        "Minimum necessary standard",
        "Notice of privacy practices"
      ]
    },
    {
      title: "HIPAA Security Rule",
      description: "Sets national standards for protecting electronic protected health information (ePHI) that is created, received, used, or maintained by a covered entity.",
      items: [
        "Administrative safeguards",
        "Technical safeguards",
        "Physical safeguards",
        "Organizational requirements",
        "Policies and procedures",
        "Documentation requirements"
      ]
    },
    {
      title: "HIPAA Breach Notification Rule",
      description: "Requires covered entities and business associates to notify affected individuals, the Secretary of HHS, and in some cases the media, following a breach of unsecured PHI.",
      items: [
        "Breach discovery procedures",
        "Notification timelines",
        "Content requirements",
        "Documentation requirements",
        "Risk assessment process",
        "Mitigation requirements"
      ]
    },
    {
      title: "PHIPA Compliance",
      description: "Ontario's Personal Health Information Protection Act establishes rules for the collection, use, and disclosure of personal health information by health information custodians.",
      items: [
        "Health information custodian obligations",
        "Consent requirements",
        "Use and disclosure rules",
        "Individual rights of access",
        "Custodian accountability",
        "Compliance and enforcement"
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
            alt="HIPAA and PHIPA Compliance"
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
            HIPAA & <span className="text-red-600">PHIPA Compliance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-justify">
            Comprehensive solutions for healthcare privacy and regulatory compliance
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
                    <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Healthcare Compliance</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    HIPAA & PHIPA Compliance
                  </h2>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  The Health Insurance Portability and Accountability Act (HIPAA) and Ontarios Personal Health Information Protection Act (PHIPA) establish critical standards for protecting sensitive patient health information. These regulations require healthcare organizations and their business associates to implement comprehensive safeguards to ensure the privacy, security, and integrity of protected health information (PHI).
                </p>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  Non-compliance with HIPAA and PHIPA can result in significant penalties, reputational damage, and loss of patient trust. Our HIPAA and PHIPA compliance services help healthcare organizations navigate these complex regulatory requirements, implement necessary controls, and maintain ongoing compliance to protect both patients and your organization.
                </p>

                <div className="pt-6 space-y-3">
                  {['HIPAA Privacy Rule', 'HIPAA Security Rule', 'Breach Notification Rule', 'PHIPA Requirements', 'Risk Assessments', 'Compliance Programs'].map((item, i) => (
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
                    alt="HIPAA and PHIPA Compliance"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Components */}
          <div className="mb-20">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Compliance Components</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                HIPAA & PHIPA <span className="text-red-600">Compliance Components</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceComponents.map((component, index) => {
                const Icon = component.icon
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
                      {component.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors text-justify">
                      {component.desc}
                    </p>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* HIPAA Rules Section */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Regulatory Framework</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                HIPAA Rules & <span className="text-red-600">PHIPA Requirements</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {hipaaRules.map((rule, index) => (
                <div
                  key={index}
                  className={`observe-animate ${index % 2 === 0 ? 'slide-left' : 'slide-right'} bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all`}
                >
                  <h3 className="text-3xl font-bold text-white mb-4">{rule.title}</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed text-justify">
                    {rule.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {rule.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                        <span className="text-gray-300 text-justify">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Process */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Compliance Process</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Compliance <span className="text-red-600">Process</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceProcess.map((step, index) => {
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

          {/* Compliance Services */}
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
                Our HIPAA & PHIPA <span className="text-red-600">Services</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {complianceServices.map((service, index) => {
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Benefits of HIPAA & PHIPA <span className="text-red-600">Compliance</span></h2>
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

          {/* Who Needs Compliance Section */}
          <div className="mb-32 observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Who Needs <span className="text-red-600">HIPAA & PHIPA Compliance?</span>
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
                Our <span className="text-red-600">Compliance Approach</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaGlobe className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Healthcare Expertise</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Certified HIPAA Professionals</p>
                  <p className="text-gray-300 text-justify">PHIPA Compliance Specialists</p>
                  <p className="text-gray-300 text-justify">Healthcare Industry Experience</p>
                  <p className="text-gray-300 text-justify">Regulatory Knowledge</p>
                  <p className="text-gray-300 text-justify">Cross-Border Compliance</p>
                  <p className="text-gray-300 text-justify">Continuous Regulatory Updates</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaLock className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Compliance Excellence</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Comprehensive Risk Assessments</p>
                  <p className="text-gray-300 text-justify">Customized Policy Development</p>
                  <p className="text-gray-300 text-justify">Technical Safeguard Implementation</p>
                  <p className="text-gray-300 text-justify">Employee Training Programs</p>
                  <p className="text-gray-300 text-justify">Incident Response Planning</p>
                  <p className="text-gray-300 text-justify">Ongoing Compliance Monitoring</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Service Details */}
          <div className="observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                HIPAA & PHIPA <span className="text-red-600">Compliance Details</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Regulatory Scope</div>
                <p className="text-gray-300 text-justify">HIPAA applies to covered entities and business associates in the United States, while PHIPA applies to health information custodians in Ontario, Canada. Our services address both regulatory frameworks for organizations operating in either jurisdiction.</p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Penalties</div>
                <p className="text-gray-300 text-justify">HIPAA violations can result in fines up to $1.5 million per year per violation category, while PHIPA violations can result in fines up to $200,000 for individuals and $1 million for organizations. Our services help you avoid these costly penalties.</p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Implementation</div>
                <p className="text-gray-300 text-justify">Our compliance implementation process typically takes 3-6 months depending on organization size and complexity. We provide a structured approach with minimal disruption to your operations while ensuring comprehensive compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page