"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaShieldAlt, FaChartLine, FaClipboardCheck, FaCheckCircle, FaGlobe, FaUsers, FaLock, FaSearch, FaExclamationTriangle, FaClock, FaNetworkWired, FaUserSecret, FaEye, FaTools, FaCertificate, FaFileAlt, FaServer, FaCloud, FaDatabase, FaKey, FaUserCheck, FaBalanceScale, FaUserShield, FaEnvelope, FaFingerprint, FaTrash, FaGavel, FaBuilding, FaHospital, FaUniversity, FaShoppingCart, FaCogs, FaLaptopMedical, FaChartBar, FaRegIdCard, FaSync } from 'react-icons/fa'

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

  const hitrustComponents = [
    { icon: FaShieldAlt, title: "Information Protection", desc: "Comprehensive safeguards for data security and privacy" },
    { icon: FaUserShield, title: "Regulatory Compliance", desc: "Alignment with multiple regulatory requirements" },
    { icon: FaChartBar, title: "Risk Management", desc: "Systematic approach to identifying and mitigating risks" },
    { icon: FaRegIdCard, title: "Third-Party Assurance", desc: "Demonstrated security and privacy controls to partners" }
  ]

  const certificationProcess = [
    { icon: FaSearch, title: "Gap Analysis", desc: "Assessment against HITRUST CSF requirements" },
    { icon: FaClipboardCheck, title: "Remediation", desc: "Addressing identified gaps and vulnerabilities" },
    { icon: FaTools, title: "Implementation", desc: "Deploying necessary controls and processes" },
    { icon: FaCertificate, title: "Validation", desc: "Independent assessment and certification" }
  ]

  const benefits = [
    "Streamlined Compliance",
    "Reduced Audit Costs",
    "Enhanced Security Posture",
    "Competitive Advantage",
    "Risk-Based Approach",
    "Regulatory Alignment",
    "Third-Party Trust",
    "Continuous Improvement"
  ]

  const audiences = [
    "Healthcare Organizations",
    "Health Plans",
    "Business Associates",
    "Technology Vendors",
    "Financial Institutions",
    "Government Agencies",
    "Cloud Service Providers",
    "SaaS Companies"
  ]

  const hitrustServices = [
    {
      icon: FaClipboardCheck,
      title: "HITRUST CSF Assessment",
      description: "Comprehensive evaluation of your organization's security and privacy controls against the HITRUST CSF requirements.",
      features: [
        "In-depth gap analysis",
        "Risk assessment",
        "Compliance scoring",
        "Remediation roadmap",
        "Ongoing support"
      ]
    },
    {
      icon: FaFileAlt,
      title: "HITRUST Certification",
      description: "Complete preparation and support for achieving HITRUST CSF Certification through validated assessment.",
      features: [
        "Pre-assessment readiness",
        "Remediation guidance",
        "Documentation preparation",
        "Liaison with assessors",
        "Post-certification support"
      ]
    },
    {
      icon: FaChartLine,
      title: "HITRUST CSF Implementation",
      description: "Expert guidance on implementing the necessary controls and processes to meet HITRUST CSF requirements.",
      features: [
        "Control implementation",
        "Policy and procedure development",
        "Staff training",
        "Process integration",
        "Continuous monitoring"
      ]
    },
    {
      icon: FaSync,
      title: "HITRUST CSF Maintenance",
      description: "Ongoing support to maintain HITRUST compliance and prepare for recertification.",
      features: [
        "Continuous monitoring",
        "Periodic assessments",
        "Control updates",
        "Documentation maintenance",
        "Recertification preparation"
      ]
    }
  ]

  const hitrustDomains = [
    {
      title: "Information Protection Program",
      description: "Establishes the foundation for information security and privacy management through governance, risk management, and compliance processes.",
      items: [
        "Governance, Risk, and Compliance",
        "Information Protection Program Management",
        "Risk Management",
        "Asset Management",
        "Configuration Management",
        "Vulnerability Management"
      ]
    },
    {
      title: "Regulatory Compliance",
      description: "Ensures alignment with multiple regulatory requirements including HIPAA, HITECH, PCI DSS, NIST, ISO, and state laws.",
      items: [
        "HIPAA Security Rule",
        "HIPAA Privacy Rule",
        "HITECH Act",
        "PCI DSS",
        "NIST Cybersecurity Framework",
        "State Privacy Laws"
      ]
    },
    {
      title: "Organizational Requirements",
      description: "Addresses the people, process, and technology aspects necessary for a comprehensive security program.",
      items: [
        "Human Resources",
        "Third-Party Assurance",
        "Business Continuity and Disaster Recovery",
        "Incident Management",
        "Education, Training, and Awareness",
        "Physical and Environmental Security"
      ]
    },
    {
      title: "Technical Requirements",
      description: "Focuses on the technical controls necessary to protect information systems and data.",
      items: [
        "Access Control",
        "Data Protection and Privacy",
        "Protection and Malware Prevention",
        "Network Protection",
        "Wireless Protection",
        "System and Communications Protection"
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
            alt="HITRUST Services"
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
            HITRUST <span className="text-red-600">CSF Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-justify">
            Comprehensive framework for information security and privacy compliance
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
                    <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Security & Compliance</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    HITRUST CSF Framework
                  </h2>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  The HITRUST CSF (Common Security Framework) is a comprehensive, certifiable framework that organizations can use to manage information security and privacy risks. It provides a prescriptive and flexible approach to regulatory compliance and risk management, consolidating multiple requirements into a single framework.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  By leveraging the HITRUST CSF, organizations can demonstrate their commitment to protecting sensitive information and meeting compliance requirements across various regulations. Our HITRUST services help you navigate the complexities of the framework, implement necessary controls, and achieve certification to enhance trust with stakeholders.
                </p>

                <div className="pt-6 space-y-3">
                  {['Comprehensive Security Framework', 'Regulatory Alignment', 'Risk-Based Approach', 'Third-Party Assurance', 'Continuous Improvement', 'Certifiable Standards'].map((item, i) => (
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
                    alt="HITRUST CSF Framework"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* HITRUST Components */}
          <div className="mb-20">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Core Components</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                HITRUST CSF <span className="text-red-600">Components</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hitrustComponents.map((component, index) => {
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

          {/* HITRUST Domains */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Framework Domains</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                HITRUST CSF <span className="text-red-600">Domains</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {hitrustDomains.map((domain, index) => (
                <div
                  key={index}
                  className={`observe-animate ${index % 2 === 0 ? 'slide-left' : 'slide-right'} bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all`}
                >
                  <h3 className="text-3xl font-bold text-white mb-4">{domain.title}</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed text-justify">
                    {domain.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {domain.items.map((item, i) => (
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

          {/* Certification Process */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Certification Process</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                HITRUST <span className="text-red-600">Certification Process</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificationProcess.map((step, index) => {
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
                Our HITRUST <span className="text-red-600">Services</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {hitrustServices.map((service, index) => {
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Benefits of HITRUST <span className="text-red-600">CSF</span></h2>
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

          {/* Who Needs HITRUST Section */}
          <div className="mb-32 observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Who Needs <span className="text-red-600">HITRUST?</span>
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
                Our <span className="text-red-600">HITRUST Approach</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaGlobe className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Global Expertise</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Certified HITRUST CSF Practitioners</p>
                  <p className="text-gray-300 text-justify">Healthcare Industry Specialists</p>
                  <p className="text-gray-300 text-justify">Regulatory Compliance Experts</p>
                  <p className="text-gray-300 text-justify">Cross-Industry Knowledge</p>
                  <p className="text-gray-300 text-justify">Continuous Framework Updates</p>
                  <p className="text-gray-300 text-justify">Proven Implementation Methodology</p>
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
                  <p className="text-gray-300 text-justify">Customized Control Implementation</p>
                  <p className="text-gray-300 text-justify">Continuous Monitoring Solutions</p>
                  <p className="text-gray-300 text-justify">Documentation Management</p>
                  <p className="text-gray-300 text-justify">Third-Party Assurance Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* HITRUST Service Details */}
          <div className="observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                HITRUST <span className="text-red-600">Service Details</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Flexible Approach</div>
                <p className="text-gray-300 text-justify">Our HITRUST services are tailored to your organizations specific needs, risk profile, and regulatory requirements. We offer both self-assessment and validated assessment options.</p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Comprehensive Coverage</div>
                <p className="text-gray-300 text-justify">We cover all aspects of the HITRUST CSF, including implementation, assessment, certification, and ongoing maintenance to ensure continuous compliance.</p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Proven Results</div>
                <p className="text-gray-300 text-justify">Our clients achieve HITRUST certification with minimal disruption to operations, gaining competitive advantage and enhanced trust with stakeholders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page