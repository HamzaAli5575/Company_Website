"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaShieldAlt, FaChartLine, FaClipboardCheck, FaCheckCircle, FaGlobe, FaUsers, FaLock, FaSearch, FaExclamationTriangle, FaClock, FaNetworkWired, FaUserSecret, FaEye, FaTools, FaCertificate, FaFileAlt, FaServer, FaCloud, FaDatabase, FaKey, FaUserCheck, FaBalanceScale, FaUserShield, FaEnvelope, FaFingerprint, FaTrash, FaGavel, FaBuilding, FaHospital, FaUniversity, FaShoppingCart, FaCogs, FaLaptopMedical, FaChartBar, FaRegIdCard, FaSync, FaHeartbeat, FaNotesMedical, FaUserMd, FaAmbulance, FaRobot, FaBrain, FaProjectDiagram, FaLightbulb, FaRegChartBar, FaBalanceScaleRight, FaHandshake, FaHistory, FaPuzzlePiece, FaRegObjectGroup } from 'react-icons/fa'

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

  const keyComponents = [
    { icon: FaBrain, title: "AI Governance", desc: "Establishing policies and frameworks for responsible AI development and deployment" },
    { icon: FaBalanceScaleRight, title: "Risk Management", desc: "Identifying, assessing, and mitigating AI-specific risks throughout the lifecycle" },
    { icon: FaUserCheck, title: "Stakeholder Engagement", desc: "Involving relevant parties in AI system development and decision-making" },
    { icon: FaRegObjectGroup, title: "Continuous Improvement", desc: "Ongoing monitoring and enhancement of AI management systems" }
  ]

  const complianceProcess = [
    { icon: FaSearch, title: "Gap Analysis", desc: "Assessment against ISO 42001 requirements and current AI practices" },
    { icon: FaClipboardCheck, title: "Framework Development", desc: "Creating tailored AI management systems and documentation" },
    { icon: FaTools, title: "Implementation", desc: "Deploying controls and processes across the AI lifecycle" },
    { icon: FaCertificate, title: "Certification", desc: "Preparing for and achieving ISO 42001 certification" }
  ]

  const benefits = [
    "Enhanced Trust & Credibility",
    "Reduced AI Risks",
    "Regulatory Compliance",
    "Improved Decision Making",
    "Competitive Advantage",
    "Stakeholder Confidence",
    "Operational Efficiency",
    "Future-Proofing AI Investments"
  ]

  const audiences = [
    "AI Developers",
    "Technology Companies",
    "Financial Institutions",
    "Healthcare Organizations",
    "Government Agencies",
    "Manufacturing Companies",
    "Service Providers",
    "Research Institutions"
  ]

  const complianceServices = [
    {
      icon: FaClipboardCheck,
      title: "ISO 42001 Gap Assessment",
      description: "Comprehensive evaluation of your organization's AI management practices against ISO 42001 requirements.",
      features: [
        "Current state analysis",
        "Requirement mapping",
        "Risk identification",
        "Compliance gaps documentation",
        "Remediation roadmap"
      ]
    },
    {
      icon: FaFileAlt,
      title: "AI Management System Development",
      description: "Creation of customized AI governance frameworks, policies, and procedures aligned with ISO 42001.",
      features: [
        "AI policy development",
        "Governance frameworks",
        "Risk management procedures",
        "Documentation systems",
        "Control implementation"
      ]
    },
    {
      icon: FaChartLine,
      title: "AI Risk Management",
      description: "Implementation of systematic processes to identify, assess, and mitigate AI-specific risks.",
      features: [
        "Risk assessment methodologies",
        "Impact analysis",
        "Control selection",
        "Monitoring procedures",
        "Incident response planning"
      ]
    },
    {
      icon: FaSync,
      title: "Continuous Improvement & Certification",
      description: "Ongoing support to maintain ISO 42001 compliance and prepare for certification audits.",
      features: [
        "Performance monitoring",
        "Internal audits",
        "Management reviews",
        "Corrective actions",
        "Certification preparation"
      ]
    }
  ]

  const isoRequirements = [
    {
      title: "AI Governance",
      description: "Establishing organizational structures, policies, and processes for AI management.",
      items: [
        "AI policy development",
        "Roles and responsibilities",
        "Accountability frameworks",
        "Ethical guidelines",
        "Compliance obligations",
        "Stakeholder engagement"
      ]
    },
    {
      title: "Risk Management",
      description: "Systematic approach to identifying, assessing, and treating AI-related risks.",
      items: [
        "Risk assessment methodology",
        "Impact analysis",
        "Risk treatment planning",
        "Control implementation",
        "Residual risk evaluation",
        "Risk monitoring"
      ]
    },
    {
      title: "AI System Lifecycle",
      description: "Managing AI systems throughout their entire lifecycle from conception to decommissioning.",
      items: [
        "Design and development",
        "Data management",
        "Testing and validation",
        "Deployment and operation",
        "Monitoring and maintenance",
        "Decommissioning"
      ]
    },
    {
      title: "Continuous Improvement",
      description: "Ongoing enhancement of AI management systems and performance.",
      items: [
        "Performance evaluation",
        "Internal auditing",
        "Management reviews",
        "Corrective actions",
        "Innovation integration",
        "Stakeholder feedback"
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
            alt="ISO 42001 AI Management"
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
            ISO 42001 <span className="text-red-600">AI Management</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-justify">
            Comprehensive framework for responsible Artificial Intelligence management and governance
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
                    <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">AI Management Standard</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    ISO 42001 AI Management System
                  </h2>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  ISO 42001 is the first international standard for Artificial Intelligence management systems, providing a framework for organizations to develop, implement, and improve AI governance practices. This standard helps organizations address the unique challenges and risks associated with AI technologies while maximizing their benefits.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  As AI becomes increasingly integrated into business operations, organizations face growing pressure to ensure these systems are trustworthy, ethical, and compliant with regulations. ISO 42001 provides a structured approach to managing AI systems throughout their lifecycle, from conception to decommissioning, helping organizations build trust with stakeholders and demonstrate their commitment to responsible AI.
                </p>

                <div className="pt-6 space-y-3">
                  {['AI Governance', 'Risk Management', 'Ethical AI', 'Regulatory Compliance', 'Continuous Improvement', 'Stakeholder Trust'].map((item, i) => (
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
                    alt="ISO 42001 AI Management"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Components */}
          <div className="mb-20">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Key Components</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ISO 42001 <span className="text-red-600">Key Components</span>
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

          {/* ISO Requirements Section */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Standard Requirements</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ISO 42001 <span className="text-red-600">Requirements</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {isoRequirements.map((requirement, index) => (
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
                Our Implementation <span className="text-red-600">Process</span>
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
                Our ISO 42001 <span className="text-red-600">Services</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Benefits of ISO 42001 <span className="text-red-600">Certification</span></h2>
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
                Who Needs <span className="text-red-600">ISO 42001?</span>
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
                Our <span className="text-red-600">AI Management Approach</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaRobot className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">AI Expertise</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Certified AI Management Professionals</p>
                  <p className="text-gray-300 text-justify">Deep Technical AI Knowledge</p>
                  <p className="text-gray-300 text-justify">Cross-Industry Experience</p>
                  <p className="text-gray-300 text-justify">Ethical AI Frameworks</p>
                  <p className="text-gray-300 text-justify">Regulatory Insight</p>
                  <p className="text-gray-300 text-justify">Emerging Technology Awareness</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaProjectDiagram className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Management Excellence</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Comprehensive Risk Assessments</p>
                  <p className="text-gray-300 text-justify">Customized Governance Frameworks</p>
                  <p className="text-gray-300 text-justify">Lifecycle Management</p>
                  <p className="text-gray-300 text-justify">Stakeholder Engagement</p>
                  <p className="text-gray-300 text-justify">Performance Monitoring</p>
                  <p className="text-gray-300 text-justify">Continuous Improvement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Service Details */}
          <div className="observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                ISO 42001 <span className="text-red-600">Implementation Details</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Global Standard</div>
                <p className="text-gray-300 text-justify">ISO 42001 is the first international standard specifically for AI management systems, providing a globally recognized framework for organizations developing or using AI technologies.</p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Implementation</div>
                <p className="text-gray-300 text-justify">Implementation typically takes 4-9 months depending on organization size and AI maturity. We provide a structured approach with minimal disruption while ensuring comprehensive compliance.</p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Future-Ready</div>
                <p className="text-gray-300 text-justify">ISO 42001 helps organizations prepare for evolving AI regulations and standards, ensuring long-term compliance and competitive advantage in the AI-driven marketplace.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page