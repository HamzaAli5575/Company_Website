"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaShieldAlt, FaChartLine, FaClipboardCheck, FaCheckCircle, FaGlobe, FaUsers, FaLock, FaSearch, FaExclamationTriangle, FaClock, FaNetworkWired, FaUserSecret, FaEye, FaTools, FaCertificate, FaFileAlt, FaServer, FaCloud, FaDatabase, FaKey, FaUserCheck, FaBalanceScale, FaUserShield, FaEnvelope, FaFingerprint, FaTrash, FaGavel, FaBuilding, FaHospital, FaUniversity, FaShoppingCart, FaCogs, FaLaptopMedical, FaChartBar, FaRegIdCard, FaSync, FaHeartbeat, FaBell, FaFileContract, FaHandshake, FaHistory, FaPuzzlePiece, FaRegObjectGroup, FaBookOpen, FaExchangeAlt, FaMapMarkedAlt } from 'react-icons/fa'

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
      .text-justify {
        text-align: justify;
      }
    `
    document.head.appendChild(style)

    return () => {
      observer.disconnect()
      document.head.removeChild(style)
    }
  }, [])

  const keyPrinciples = [
    { icon: FaBalanceScale, title: "Lawfulness, Fairness & Transparency", desc: "Process data lawfully, fairly, and in a transparent manner in relation to the data subject" },
    { icon: FaClipboardCheck, title: "Purpose Limitation", desc: "Collect data for specified, explicit, and legitimate purposes only" },
    { icon: FaDatabase, title: "Data Minimization", desc: "Ensure data is adequate, relevant, and limited to what is necessary" },
    { icon: FaCheckCircle, title: "Accuracy", desc: "Keep personal data accurate and up to date with timely corrections" },
    { icon: FaClock, title: "Storage Limitation", desc: "Retain data only for as long as necessary for the specified purposes" },
    { icon: FaShieldAlt, title: "Integrity & Confidentiality", desc: "Process data securely with appropriate technical and organizational measures" },
    { icon: FaUserCheck, title: "Accountability", desc: "Demonstrate compliance with GDPR principles and maintain records" },
    { icon: FaGavel, title: "Data Subject Rights", desc: "Respect and facilitate the exercise of individual data protection rights" }
  ]

  const dataSubjectRights = [
    { icon: FaEye, title: "Right to Access", desc: "Individuals can request access to their personal data and information about processing" },
    { icon: FaSync, title: "Right to Rectification", desc: "Right to have inaccurate personal data corrected or completed" },
    { icon: FaTrash, title: "Right to Erasure", desc: "Also known as 'right to be forgotten' - deletion of personal data under certain conditions" },
    { icon: FaLock, title: "Right to Restriction", desc: "Right to restrict processing of personal data in specific circumstances" },
    { icon: FaExchangeAlt, title: "Right to Data Portability", desc: "Receive personal data in a structured, commonly used format and transmit to another controller" },
    { icon: FaExclamationTriangle, title: "Right to Object", desc: "Object to processing based on legitimate interests, direct marketing, or research purposes" },
    { icon: FaUserSecret, title: "Automated Decision-Making", desc: "Right not to be subject to decisions based solely on automated processing" },
    { icon: FaBell, title: "Right to Be Informed", desc: "Right to clear information about how personal data is being used" }
  ]

  const complianceProcess = [
    { icon: FaSearch, title: "Data Mapping & Gap Analysis", desc: "Comprehensive assessment of current data processing activities and GDPR compliance gaps" },
    { icon: FaFileContract, title: "Policy & Documentation", desc: "Development of GDPR-compliant policies, procedures, and required documentation" },
    { icon: FaTools, title: "Implementation & Training", desc: "Deploy technical and organizational measures with staff training programs" },
    { icon: FaCertificate, title: "Ongoing Compliance & Audit", desc: "Continuous monitoring, assessment, and improvement of GDPR compliance" }
  ]

  const benefits = [
    "Enhanced Data Protection",
    "Increased Customer Trust",
    "Competitive Advantage",
    "Reduced Data Breach Risks",
    "Improved Data Governance",
    "Legal Compliance",
    "Operational Efficiency",
    "Global Market Access"
  ]

  const audiences = [
    "E-commerce Businesses",
    "Healthcare Providers",
    "Financial Institutions",
    "Technology Companies",
    "Marketing Agencies",
    "Educational Institutions",
    "Professional Services",
    "Retail Organizations"
  ]

  const complianceServices = [
    {
      icon: FaSearch,
      title: "GDPR Gap Assessment & Audit",
      description: "Comprehensive evaluation of your current data protection practices against GDPR requirements to identify compliance gaps.",
      features: [
        "Data processing inventory",
        "Compliance gap identification",
        "Risk assessment and analysis",
        "Detailed compliance report",
        "Prioritized action plan"
      ]
    },
    {
      icon: FaFileAlt,
      title: "Policy & Documentation Development",
      description: "Creation of all required GDPR documentation including privacy policies, consent forms, and data processing agreements.",
      features: [
        "Privacy policy creation",
        "Data processing agreements",
        "Consent management forms",
        "Record of processing activities",
        "Data breach response procedures"
      ]
    },
    {
      icon: FaShieldAlt,
      title: "Data Protection Implementation",
      description: "Implementation of technical and organizational measures to ensure ongoing GDPR compliance and data security.",
      features: [
        "Privacy by design integration",
        "Data security controls",
        "Access control implementation",
        "Data encryption solutions",
        "Incident response planning"
      ]
    },
    {
      icon: FaSync,
      title: "Ongoing Compliance Management",
      description: "Continuous monitoring, assessment, and improvement of your GDPR compliance program with expert support.",
      features: [
        "Regular compliance audits",
        "Staff training programs",
        "DPO advisory services",
        "Regulatory updates",
        "Continuous improvement"
      ]
    }
  ]

  const gdprRequirements = [
    {
      title: "Legal Basis for Processing",
      description: "Establish and document a lawful basis for processing personal data under GDPR Article 6.",
      items: [
        "Consent management",
        "Contractual necessity",
        "Legal obligations",
        "Vital interests protection",
        "Public task performance",
        "Legitimate interests"
      ]
    },
    {
      title: "Data Subject Rights Management",
      description: "Implement processes to facilitate and respond to data subject rights requests within required timeframes.",
      items: [
        "Access request procedures",
        "Rectification processes",
        "Erasure mechanisms",
        "Portability workflows",
        "Objection handling",
        "Response time management"
      ]
    },
    {
      title: "Security & Breach Management",
      description: "Implement appropriate technical and organizational measures to ensure data security and breach notification.",
      items: [
        "Encryption and pseudonymization",
        "Access controls",
        "Security testing",
        "Breach detection systems",
        "72-hour notification process",
        "Incident response planning"
      ]
    },
    {
      title: "Accountability & Governance",
      description: "Demonstrate GDPR compliance through documentation, policies, and governance frameworks.",
      items: [
        "Data protection policies",
        "Processing records",
        "Data Protection Impact Assessments",
        "Data Protection Officer appointment",
        "Vendor management",
        "Privacy by design"
      ]
    }
  ]

  const keyStatistics = [
    { number: "€20M", label: "Maximum Fine or 4% of Annual Global Turnover" },
    { number: "72 Hours", label: "Data Breach Notification Deadline" },
    { number: "30 Days", label: "Response Time for Data Subject Requests" },
    { number: "500M+", label: "EU Citizens Protected by GDPR" }
  ]

  return (
    <>
      {/* Hero Banner */}
      <header role="banner" className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/VAPT/vapt-banner.jpg"
            alt="GDPR Compliance"
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
            GDPR <span className="text-red-600">Compliance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-justify">
            Comprehensive General Data Protection Regulation compliance solutions for robust data privacy and protection
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
                    <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">EU Data Protection Law</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    General Data Protection Regulation (GDPR)
                  </h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  The General Data Protection Regulation (GDPR) is the worlds most comprehensive data privacy and security law. Enforced since May 25, 2018, GDPR applies to any organization that processes personal data of EU residents, regardless of where the organization is located. It establishes strict requirements for data protection, privacy rights, and breach notification.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  GDPR compliance is not optional for organizations handling EU citizen data. Non-compliance can result in severe penalties of up to €20 million or 4% of annual global turnover, whichever is higher. Beyond avoiding penalties, GDPR compliance demonstrates your commitment to data privacy, builds customer trust, and provides a competitive advantage in the global marketplace.
                </p>
                <div className="pt-6 space-y-3">
                  {['Data Privacy Rights', 'Breach Notification', 'Consent Management', 'Data Protection Officer', 'Privacy by Design', 'International Data Transfers'].map((item, i) => (
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
                    src="/images/services/gdpr/gdpr-overview.jpg"
                    alt="GDPR Data Protection"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="mb-32 observe-animate">
            <div className="grid md:grid-cols-4 gap-6">
              {keyStatistics.map((stat, index) => (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-red-600/20 to-red-600/5 border border-red-600/30 rounded-xl text-center hover:shadow-2xl hover:shadow-red-600/20 transition-all group"
                >
                  <div className="text-4xl md:text-5xl font-bold text-red-600 mb-3 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-semibold text-justify">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Principles */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Core Principles</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                GDPR <span className="text-red-600">Key Principles</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyPrinciples.map((principle, index) => {
                const Icon = principle.icon
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
                      {principle.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors text-justify">
                      {principle.desc}
                    </p>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Data Subject Rights */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Individual Rights</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Data Subject <span className="text-red-600">Rights</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dataSubjectRights.map((right, index) => {
                const Icon = right.icon
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
                      {right.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors text-justify">
                      {right.desc}
                    </p>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* GDPR Requirements Section */}
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
                GDPR <span className="text-red-600">Requirements</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {gdprRequirements.map((requirement, index) => (
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

          {/* Compliance Process */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Implementation Process</span>
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
                Our GDPR <span className="text-red-600">Services</span>
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
                Benefits of GDPR <span className="text-red-600">Compliance</span>
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
                Who Needs <span className="text-red-600">GDPR Compliance?</span>
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
                Our <span className="text-red-600">GDPR Approach</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaShieldAlt className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Privacy Expertise</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Certified Data Protection Professionals</p>
                  <p className="text-gray-300 text-justify">Deep GDPR Knowledge & Experience</p>
                  <p className="text-gray-300 text-justify">Cross-Industry Privacy Solutions</p>
                  <p className="text-gray-300 text-justify">EU & International Data Protection Laws</p>
                  <p className="text-gray-300 text-justify">Privacy Impact Assessment Specialists</p>
                  <p className="text-gray-300 text-justify">Data Breach Response Expertise</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaCogs className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Implementation Excellence</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Comprehensive Data Mapping</p>
                  <p className="text-gray-300 text-justify">Customized Privacy Frameworks</p>
                  <p className="text-gray-300 text-justify">Technical Security Implementation</p>
                  <p className="text-gray-300 text-justify">Staff Training & Awareness Programs</p>
                  <p className="text-gray-300 text-justify">Ongoing Compliance Monitoring</p>
                  <p className="text-gray-300 text-justify">Regulatory Liaison & Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Service Details */}
          <div className="observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                GDPR <span className="text-red-600">Implementation Details</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Global Reach</div>
                <p className="text-gray-300 text-justify">
                  GDPR applies to any organization processing personal data of EU residents, regardless of location. This extraterritorial reach makes compliance essential for global businesses operating in the digital economy.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Implementation</div>
                <p className="text-gray-300 text-justify">
                  GDPR implementation typically takes 3-6 months depending on organization size and data complexity. Our structured approach ensures comprehensive compliance with minimal business disruption.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Ongoing Support</div>
                <p className="text-gray-300 text-justify">
                  GDPR compliance is an ongoing commitment requiring continuous monitoring, updates, and improvement. We provide long-term support to maintain compliance as regulations and business needs evolve.
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