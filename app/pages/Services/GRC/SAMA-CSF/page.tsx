
"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaShieldAlt, FaClipboardCheck, FaCheckCircle, FaGlobe, FaUsers, FaLock, FaSearch, FaExclamationTriangle, FaNetworkWired, FaUserShield, FaFileAlt, FaSync, FaBalanceScale, FaBuilding, FaGavel, FaChartBar } from 'react-icons/fa'

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

  // Key Components for SAMA CSF
  const keyComponents = [
    { icon: FaShieldAlt, title: "Cybersecurity Framework", desc: "Comprehensive controls and requirements for information security." },
    { icon: FaNetworkWired, title: "Network Security", desc: "Protection of infrastructure and secure network segmentation." },
    { icon: FaUserShield, title: "Access Management", desc: "Identity and access controls for systems and data." },
    { icon: FaExclamationTriangle, title: "Incident Response", desc: "Preparedness and rapid response to incidents and breaches." },
    { icon: FaFileAlt, title: "Documentation & Reporting", desc: "Documentation and reporting to meet audit requirements." },
    { icon: FaSync, title: "Continuous Monitoring", desc: "Ongoing monitoring, vulnerability management, and compliance tracking." },
    { icon: FaBalanceScale, title: "Risk Management", desc: "Risk assessment and mitigation strategies." },
    { icon: FaBuilding, title: "Governance", desc: "Cybersecurity governance and organizational roles." }
  ]

  // Assessment Areas
  const assessmentAreas = [
    { icon: FaClipboardCheck, title: "Gap Analysis", desc: "Identify gaps between current cybersecurity posture and framework requirements." },
    { icon: FaSearch, title: "Control Evaluation", desc: "Assessment of technical and organizational controls." },
    { icon: FaGavel, title: "Policy Review", desc: "Review and enhancement of cybersecurity policies and procedures." },
    { icon: FaChartBar, title: "Maturity Scoring", desc: "Scoring and benchmarking of cybersecurity maturity levels." }
  ]

  // Benefits
  const benefits = [
    "Regulatory Compliance",
    "Reduced Risk of Cyber Threats",
    "Enhanced Security Posture",
    "Improved Incident Response",
    "Audit Readiness",
    "Stakeholder Confidence",
    "Operational Resilience",
    "Competitive Advantage"
  ]

  // Who Needs SAMA CSF
  const audiences = [
    "Banks & Financial Institutions",
    "Insurance Companies",
    "Investment Firms",
    "Fintech Companies",
    "Payment Service Providers",
    "Credit Bureaus",
    "Financial Market Infrastructures",
    "Other Regulated Entities"
  ]

  // SAMA CSF Services
  const complianceServices = [
    {
      icon: FaSearch,
      title: "CSF Gap Assessment",
      description: "Evaluation of cybersecurity controls and processes against framework requirements.",
      features: [
        "Gap analysis",
        "Control effectiveness review",
        "Risk assessment",
        "Remediation roadmap",
        "Prioritization of actions",
        "Executive reporting"
      ]
    },
    {
      icon: FaFileAlt,
      title: "Policy & Documentation Support",
      description: "Development and enhancement of cybersecurity policies, procedures, and documentation.",
      features: [
        "Policy drafting & review",
        "Procedure development",
        "Incident response plans",
        "Awareness training materials",
        "Audit documentation",
        "Compliance checklists"
      ]
    },
    {
      icon: FaShieldAlt,
      title: "Control Implementation",
      description: "Implementation of technical and organizational controls required by the framework.",
      features: [
        "Network segmentation",
        "Access management",
        "Monitoring solutions",
        "Incident response setup",
        "Vulnerability management",
        "Governance frameworks"
      ]
    },
    {
      icon: FaSync,
      title: "Continuous Compliance Monitoring",
      description: "Ongoing monitoring, periodic reviews, and support to maintain compliance.",
      features: [
        "Regular compliance checks",
        "Vulnerability scanning",
        "Incident tracking",
        "Audit preparation",
        "Reporting to management",
        "Annual review support"
      ]
    }
  ]

  // SAMA CSF Requirements
  const samaRequirements = [
    {
      title: "Governance & Organization",
      description: "Establishing cybersecurity governance, roles, and responsibilities.",
      items: [
        "Cybersecurity governance structure",
        "Defined roles and responsibilities",
        "Management oversight",
        "Cybersecurity strategy alignment"
      ]
    },
    {
      title: "Risk Management",
      description: "Identification, assessment, and mitigation of cybersecurity risks.",
      items: [
        "Risk assessment methodology",
        "Risk treatment plans",
        "Risk monitoring and reporting",
        "Continuous improvement"
      ]
    },
    {
      title: "Technical & Operational Controls",
      description: "Implementation of technical and operational controls to protect information assets.",
      items: [
        "Network security controls",
        "Access management",
        "Data protection",
        "Monitoring and logging",
        "Incident response"
      ]
    },
    {
      title: "Compliance & Reporting",
      description: "Ensuring ongoing compliance and timely reporting.",
      items: [
        "Compliance monitoring",
        "Internal audits",
        "Reporting",
        "Remediation tracking"
      ]
    }
  ]

  // Key Regulations
  const keyRegulations = [
    { title: "Cybersecurity Framework", description: "Comprehensive requirements for information security." },
    { title: "CSF Assessment", description: "Self-assessment and validation of cybersecurity maturity." },
    { title: "Circulars & Guidelines", description: "Ongoing regulatory updates and clarifications." },
    { title: "ISO/IEC 27001", description: "International standard for information security management systems." }
  ]

  return (
    <>
      {/* Hero Banner */}
      <header role="banner" className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/VAPT/vapt-banner.jpg"
            alt="SAMA CSF Assessment"
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
            SAMA <span className="text-red-600">CSF Assessment</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-justify">
            Guidance and support for Cybersecurity Framework compliance and assessment.
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
                    <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Cybersecurity Framework</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    CSF Assessment & Compliance
                  </h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  The Cybersecurity Framework requires regulated entities to implement robust controls and perform regular assessments. These assessments ensure organizations have effective cybersecurity, risk management, and are prepared for evolving threats.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  Our CSF Assessment services help organizations identify compliance gaps, strengthen security posture, and achieve regulatory assurance. We guide you through the process, from gap analysis to remediation and reporting.
                </p>
                <div className="pt-6 space-y-3">
                  {['Gap Analysis', 'Control Evaluation', 'Policy Review', 'Maturity Scoring', 'Remediation Planning', 'Reporting'].map((item, i) => (
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
                    src="/images/services/SAMA/sama-overview.jpg"
                    alt="SAMA CSF Cybersecurity"
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
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Regulatory Framework</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key <span className="text-red-600">Regulations & Standards</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

          {/* Key Components */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Core Components</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                CSF <span className="text-red-600">Key Components</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyComponents.map((component, index) => {
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

          {/* Assessment Areas */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Assessment Areas</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                CSF <span className="text-red-600">Assessment Focus</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {assessmentAreas.map((area, index) => {
                const Icon = area.icon
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
                      {area.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors text-justify">
                      {area.desc}
                    </p>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Requirements Section */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Compliance Requirements</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                CSF <span className="text-red-600">Requirements</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {samaRequirements.map((requirement, index) => (
                <div
                  key={index}
                  className={`observe-animate ${index % 2 === 0 ? 'slide-left' : 'slide-right'} bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all`}
                >
                  <h3 className="text-3xl font-bold text-white mb-4">{requirement.title}</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed text-justify">
                    {requirement.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {requirement.items.map((item, i) => (
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
                Our CSF <span className="text-red-600">Services</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Benefits of <span className="text-red-600">Compliance</span>
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

          {/* Who Needs Compliance Section */}
          <div className="mb-32 observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Who Needs <span className="text-red-600">CSF Compliance?</span>
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
                      <FaBuilding className="text-xl text-red-600" />
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
                Our <span className="text-red-600">CSF Compliance Approach</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaShieldAlt className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Regulatory Expertise</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Cybersecurity Specialists</p>
                  <p className="text-gray-300 text-justify">Sector Experience</p>
                  <p className="text-gray-300 text-justify">Gap Analysis & Remediation</p>
                  <p className="text-gray-300 text-justify">Policy & Documentation Support</p>
                  <p className="text-gray-300 text-justify">Audit Preparation</p>
                  <p className="text-gray-300 text-justify">Continuous Compliance Monitoring</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaGlobe className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Comprehensive Solutions</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">End-to-End Compliance Support</p>
                  <p className="text-gray-300 text-justify">Technical Control Implementation</p>
                  <p className="text-gray-300 text-justify">Risk Assessment & Mitigation</p>
                  <p className="text-gray-300 text-justify">Documentation & Reporting</p>
                  <p className="text-gray-300 text-justify">Continuous Monitoring</p>
                  <p className="text-gray-300 text-justify">Liaison & Communication</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Service Details */}
          <div className="observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                CSF <span className="text-red-600">Implementation Details</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Mandatory Requirement</div>
                <p className="text-gray-300 text-justify">
                  CSF assessment is mandatory for all regulated entities. Non-compliance can result in penalties and reputational risk.
                </p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Implementation</div>
                <p className="text-gray-300 text-justify">
                  The assessment process includes gap analysis, remediation, documentation, and reporting. Our structured approach ensures timely and effective compliance.
                </p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Business Resilience</div>
                <p className="text-gray-300 text-justify">
                  Achieving compliance strengthens resilience against cyber threats and enhances trust with stakeholders.
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