"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaShieldAlt, FaChartLine, FaClipboardCheck, FaCheckCircle, FaGlobe, FaUsers, FaLock, FaSearch, FaExclamationTriangle, FaClock, FaNetworkWired, FaUserSecret, FaEye, FaTools, FaCertificate, FaFileAlt, FaServer, FaCloud, FaDatabase, FaKey, FaUserCheck, FaBalanceScale, FaUserShield, FaEnvelope, FaFingerprint, FaTrash, FaGavel, FaBuilding, FaHospital, FaUniversity, FaShoppingCart, FaCogs, FaLaptopMedical, FaChartBar, FaRegIdCard, FaSync, FaHeartbeat, FaNotesMedical, FaUserMd, FaAmbulance, FaRobot, FaBrain, FaProjectDiagram, FaLightbulb, FaRegChartBar, FaBalanceScaleRight, FaHandshake, FaHistory, FaPuzzlePiece, FaRegObjectGroup, FaMicroscope, FaPills, FaSyringe, FaHospitalAlt, FaVial, FaStethoscope, FaFileMedical, FaBug, FaCodeBranch } from 'react-icons/fa'

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

  const keyComponents = [
    { icon: FaShieldAlt, title: "Cybersecurity Framework", desc: "Comprehensive security controls aligned with FDA premarket and postmarket requirements" },
    { icon: FaFileMedical, title: "Device Risk Management", desc: "Systematic identification and mitigation of cybersecurity risks throughout device lifecycle" },
    { icon: FaBug, title: "Vulnerability Management", desc: "Proactive detection, assessment, and remediation of security vulnerabilities" },
    { icon: FaSync, title: "Software Updates", desc: "Secure patch management and software update mechanisms for medical devices" },
    { icon: FaUserShield, title: "Access Controls", desc: "Role-based access control and authentication mechanisms for device security" },
    { icon: FaExclamationTriangle, title: "Incident Response", desc: "Rapid detection, containment, and response to cybersecurity incidents" },
    { icon: FaFileAlt, title: "Documentation & Reporting", desc: "Comprehensive documentation meeting FDA submission and reporting requirements" },
    { icon: FaNetworkWired, title: "Network Security", desc: "Protection of medical device networks and communication channels" }
  ]

  const fdaGuidance = [
    { icon: FaClipboardCheck, title: "Premarket Guidance", desc: "Content of premarket submissions for management of cybersecurity in medical devices" },
    { icon: FaSync, title: "Postmarket Guidance", desc: "Postmarket management of cybersecurity in medical devices" },
    { icon: FaExclamationTriangle, title: "Safety Communications", desc: "FDA safety communications and cybersecurity vulnerability reporting" },
    { icon: FaCodeBranch, title: "Software Validation", desc: "Software validation and verification requirements for medical device cybersecurity" }
  ]

  const benefits = [
    "FDA Submission Readiness",
    "Patient Safety Protection",
    "Regulatory Compliance",
    "Risk Mitigation",
    "Market Access",
    "Brand Protection",
    "Liability Reduction",
    "Competitive Advantage"
  ]

  const audiences = [
    "Medical Device Manufacturers",
    "Healthcare Technology Companies",
    "Pharmaceutical Companies",
    "Clinical Laboratories",
    "Healthcare IT Providers",
    "Biotech Companies",
    "Hospital Systems",
    "Research Organizations"
  ]

  const complianceServices = [
    {
      icon: FaSearch,
      title: "FDA Cybersecurity Gap Assessment",
      description: "Comprehensive evaluation of your medical device cybersecurity posture against FDA guidance and regulatory requirements.",
      features: [
        "Premarket submission review",
        "Postmarket compliance assessment",
        "Cybersecurity risk analysis",
        "Vulnerability assessment",
        "Regulatory gap identification",
        "Remediation roadmap"
      ]
    },
    {
      icon: FaFileAlt,
      title: "Regulatory Documentation & Submissions",
      description: "Development of FDA-compliant cybersecurity documentation for premarket submissions and postmarket reporting.",
      features: [
        "Cybersecurity bill of materials (CBOM)",
        "Software bill of materials (SBOM)",
        "Threat modeling documentation",
        "Risk assessment reports",
        "Security architecture documentation",
        "510(k) and PMA cybersecurity sections"
      ]
    },
    {
      icon: FaShieldAlt,
      title: "Cybersecurity Framework Implementation",
      description: "Implementation of comprehensive cybersecurity controls and processes aligned with FDA requirements.",
      features: [
        "Security by design integration",
        "Authentication mechanisms",
        "Encryption implementation",
        "Secure update mechanisms",
        "Logging and monitoring",
        "Incident response procedures"
      ]
    },
    {
      icon: FaSync,
      title: "Continuous Monitoring & Maintenance",
      description: "Ongoing cybersecurity monitoring, vulnerability management, and FDA postmarket compliance support.",
      features: [
        "Vulnerability scanning",
        "Threat intelligence monitoring",
        "Patch management",
        "Security testing",
        "FDA reporting support",
        "Annual compliance reviews"
      ]
    }
  ]

  const fdaRequirements = [
    {
      title: "Premarket Cybersecurity",
      description: "FDA guidance on cybersecurity content required in premarket submissions for medical devices.",
      items: [
        "Cybersecurity risk management",
        "Security architecture design",
        "Software bill of materials (SBOM)",
        "Vulnerability management plan",
        "Security update mechanisms",
        "End-of-support planning"
      ]
    },
    {
      title: "Postmarket Management",
      description: "Ongoing cybersecurity activities required throughout the medical device lifecycle.",
      items: [
        "Vulnerability monitoring",
        "Security patch deployment",
        "Incident response",
        "FDA safety reporting",
        "Coordinated disclosure",
        "Customer notifications"
      ]
    },
    {
      title: "Security Controls",
      description: "Technical and operational security controls for protecting medical device systems.",
      items: [
        "Authentication and authorization",
        "Data encryption",
        "Secure communications",
        "Audit logging",
        "Physical security",
        "Network segmentation"
      ]
    },
    {
      title: "Risk Management",
      description: "Systematic approach to identifying and mitigating cybersecurity risks in medical devices.",
      items: [
        "Threat modeling",
        "Risk assessment",
        "Impact analysis",
        "Control selection",
        "Residual risk evaluation",
        "Risk communication"
      ]
    }
  ]

  const keyRegulations = [
    { title: "21 CFR Part 11", description: "Electronic Records and Electronic Signatures" },
    { title: "21 CFR Part 820", description: "Quality System Regulation (QSR)" },
    { title: "FDA Guidance 2014", description: "Content of Premarket Submissions for Management of Cybersecurity" },
    { title: "FDA Guidance 2016", description: "Postmarket Management of Cybersecurity in Medical Devices" },
    { title: "FDA Guidance 2018", description: "Medical Device Safety Action Plan" },
    { title: "PATCH Act 2022", description: "Protecting and Transforming Cyber Health Care Act" },
    { title: "ISO 14971", description: "Medical Devices - Application of Risk Management" },
    { title: "IEC 62304", description: "Medical Device Software - Software Lifecycle Processes" }
  ]

  return (
    <>
      {/* Hero Banner */}
      <header role="banner" className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/VAPT/vapt-banner.jpg"
            alt="FDA Compliance Cybersecurity"
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
            FDA <span className="text-red-600">Compliance</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-justify">
            Comprehensive cybersecurity compliance solutions for medical devices and healthcare systems
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
                    <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Medical Device Cybersecurity</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    FDA Cybersecurity Compliance for Medical Devices
                  </h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  The FDA has established comprehensive cybersecurity requirements for medical devices to protect patient safety and ensure device security throughout the product lifecycle. These requirements address both premarket submissions and postmarket management, requiring manufacturers to implement robust cybersecurity controls and maintain ongoing vigilance against emerging threats.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  With the increasing connectivity of medical devices and the growing sophistication of cyber threats, FDA compliance has become critical for market access and patient safety. Our FDA cybersecurity compliance services help medical device manufacturers navigate complex regulatory requirements, implement effective security controls, and maintain compliance throughout the device lifecycle.
                </p>
                <div className="pt-6 space-y-3">
                  {['Premarket Submissions', 'Postmarket Management', 'Vulnerability Management', 'Risk Assessment', 'Security Architecture', 'FDA Reporting'].map((item, i) => (
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
                    src="/images/services/fda/fda-overview.jpg"
                    alt="FDA Medical Device Cybersecurity"
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
                Key FDA <span className="text-red-600">Regulations & Standards</span>
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
                FDA Cybersecurity <span className="text-red-600">Key Components</span>
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

          {/* FDA Guidance Areas */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">FDA Guidance</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                FDA Cybersecurity <span className="text-red-600">Guidance Areas</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fdaGuidance.map((guidance, index) => {
                const Icon = guidance.icon
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
                      {guidance.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors text-justify">
                      {guidance.desc}
                    </p>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* FDA Requirements Section */}
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
                FDA <span className="text-red-600">Requirements</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {fdaRequirements.map((requirement, index) => (
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
                Our FDA Compliance <span className="text-red-600">Services</span>
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
                Benefits of FDA <span className="text-red-600">Compliance</span>
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
                Who Needs <span className="text-red-600">FDA Compliance?</span>
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
                      <FaHospital className="text-xl text-red-600" />
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
                Our <span className="text-red-600">FDA Compliance Approach</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaLaptopMedical className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Medical Device Expertise</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">FDA Regulatory Specialists</p>
                  <p className="text-gray-300 text-justify">Medical Device Cybersecurity Experts</p>
                  <p className="text-gray-300 text-justify">IEC 62304 & ISO 14971 Knowledge</p>
                  <p className="text-gray-300 text-justify">Premarket Submission Experience</p>
                  <p className="text-gray-300 text-justify">Postmarket Management Support</p>
                  <p className="text-gray-300 text-justify">Vulnerability Management Expertise</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaShieldAlt className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Comprehensive Solutions</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">End-to-End Compliance Support</p>
                  <p className="text-gray-300 text-justify">Security Architecture Design</p>
                  <p className="text-gray-300 text-justify">Risk Assessment & Mitigation</p>
                  <p className="text-gray-300 text-justify">Documentation & Reporting</p>
                  <p className="text-gray-300 text-justify">Continuous Monitoring</p>
                  <p className="text-gray-300 text-justify">FDA Liaison & Communication</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Service Details */}
          <div className="observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                FDA Compliance <span className="text-red-600">Implementation Details</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Critical Requirement</div>
                <p className="text-gray-300 text-justify">
                  FDA cybersecurity compliance is mandatory for medical device manufacturers seeking US market access. The PATCH Act of 2022 strengthened requirements, making cybersecurity a critical component of device safety and effectiveness.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Implementation</div>
                <p className="text-gray-300 text-justify">
                  FDA compliance implementation typically takes 4-8 months for premarket submissions and requires ongoing postmarket management. Our structured approach ensures comprehensive compliance while minimizing delays to market.
                </p>
              </div>

              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Patient Safety</div>
                <p className="text-gray-300 text-justify">
                  FDA cybersecurity requirements are fundamentally about protecting patient safety. Robust cybersecurity controls ensure medical devices remain safe and effective throughout their lifecycle, protecting patients from cyber threats.
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