"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaShieldAlt, FaChartLine, FaClipboardCheck, FaCheckCircle, FaGlobe, FaUsers, FaLock, FaSearch, FaExclamationTriangle, FaClock, FaNetworkWired, FaUserSecret, FaEye, FaTools, FaCertificate, FaFileAlt, FaServer, FaCloud, FaDatabase, FaKey, FaUserCheck, FaBalanceScale, FaUserShield, FaEnvelope, FaFingerprint, FaTrash, FaGavel } from 'react-icons/fa'

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

  const gdprPrinciples = [
    { icon: FaBalanceScale, title: "Lawfulness, Fairness & Transparency", desc: "Process personal data lawfully, fairly, and in a transparent manner" },
    { icon: FaUserShield, title: "Purpose Limitation", desc: "Collect data for specified, explicit, and legitimate purposes" },
    { icon: FaEnvelope, title: "Data Minimization", desc: "Only collect and process data that is absolutely necessary" },
    { icon: FaFingerprint, title: "Accuracy", desc: "Ensure personal data is accurate and kept up to date" },
    { icon: FaClock, title: "Storage Limitation", desc: "Retain data only for as long as necessary" },
    { icon: FaShieldAlt, title: "Integrity & Confidentiality", desc: "Protect data using appropriate security measures" },
    { icon: FaGavel, title: "Accountability", desc: "Demonstrate compliance with GDPR principles" }
  ]

  const gdprRights = [
    { icon: FaEye, title: "Right to be Informed", desc: "Know how your data is being used" },
    { icon: FaFileAlt, title: "Right of Access", desc: "Request access to your personal data" },
    { icon: FaTrash, title: "Right to Erasure", desc: "Request deletion of your personal data" },
    { icon: FaTools, title: "Right to Rectification", desc: "Correct inaccurate personal data" },
    { icon: FaSearch, title: "Right to Restrict Processing", desc: "Limit how your data is used" },
    { icon: FaNetworkWired, title: "Right to Data Portability", desc: "Transfer your data to another service" },
    { icon: FaExclamationTriangle, title: "Right to Object", desc: "Object to processing of your personal data" },
    { icon: FaUserCheck, title: "Rights related to Automated Decision Making", desc: "Protection from solely automated decisions" }
  ]

  const benefits = [
    "Enhanced Data Protection",
    "Increased Customer Trust",
    "Improved Data Management",
    "Competitive Advantage",
    "Global Business Opportunities",
    "Reduced Risk of Fines",
    "Streamlined Data Processes",
    "Enhanced Corporate Reputation"
  ]

  const audiences = [
    "E-commerce Businesses",
    "Financial Institutions",
    "Healthcare Providers",
    "Technology Companies",
    "Marketing Agencies",
    "Cloud Service Providers",
    "Data Processors",
    "International Organizations"
  ]

  const gdprServices = [
    {
      icon: FaClipboardCheck,
      title: "GDPR Gap Analysis",
      description: "Comprehensive assessment of your current data protection practices against GDPR requirements to identify areas of non-compliance.",
      features: [
        "Data inventory and mapping",
        "Data flow analysis",
        "Risk assessment",
        "Compliance gap identification",
        "Remediation roadmap"
      ]
    },
    {
      icon: FaFileAlt,
      title: "Data Protection Impact Assessments (DPIA)",
      description: "Systematic evaluation of high-risk data processing activities to identify and minimize data protection risks.",
      features: [
        "Systematic risk identification",
        "Necessity and proportionality assessment",
        "Risk mitigation strategies",
        "Consultation with data subjects",
        "Documentation and reporting"
      ]
    },
    {
      icon: FaUserSecret,
      title: "Data Protection Officer (DPO) Services",
      description: "Expert DPO services to ensure ongoing GDPR compliance and serve as the primary point of contact for data protection authorities.",
      features: [
        "Expert guidance on GDPR compliance",
        "Monitoring compliance with GDPR",
        "Advice on Data Protection Impact Assessments",
        "Cooperation with supervisory authorities",
        "Awareness training and staff education"
      ]
    },
    {
      icon: FaShieldAlt,
      title: "Data Breach Response",
      description: "Comprehensive data breach management services including detection, investigation, notification, and remediation.",
      features: [
        "Breach detection and analysis",
        "Risk assessment",
        "Supervisory authority notification",
        "Data subject communication",
        "Remediation and prevention"
      ]
    }
  ]

  const complianceSteps = [
    { icon: FaSearch, title: "Assessment", desc: "Evaluate current data protection practices against GDPR requirements" },
    { icon: FaChartLine, title: "Planning", desc: "Develop a comprehensive roadmap to achieve compliance" },
    { icon: FaTools, title: "Implementation", desc: "Execute necessary changes to policies, processes, and systems" },
    { icon: FaCheckCircle, title: "Maintenance", desc: "Continuously monitor and maintain compliance through regular reviews" }
  ]

  return (
    <>
      {/* Hero Banner */}
      <header role="banner" className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/gapanalysis/gapanalysis-banner.jpg"
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
            GDPR <span className="text-red-600">Compliance Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-justify">
            Navigate the complexities of GDPR compliance with our expert guidance and comprehensive solutions
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
                    <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Data Protection</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    General Data Protection Regulation
                  </h2>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  The General Data Protection Regulation (GDPR) is a comprehensive data protection law that regulates how organizations collect, process, and store personal data of individuals within the European Union. Enforced since May 2018, GDPR has set a new global standard for data privacy and protection.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  Non-compliance with GDPR can result in significant fines of up to €20 million or 4% of global annual turnover, whichever is higher. Our GDPR compliance services help organizations navigate these complex requirements, implement necessary controls, and maintain ongoing compliance to protect both data subjects and your business.
                </p>

                <div className="pt-6 space-y-3">
                  {['Data Protection Principles', 'Individual Rights', 'Consent Management', 'Data Breach Notification', 'International Data Transfers', 'Accountability & Governance'].map((item, i) => (
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
                    alt="GDPR Compliance"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* GDPR Principles */}
          <div className="mb-20">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Core Principles</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                GDPR <span className="text-red-600">Data Protection Principles</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gdprPrinciples.map((principle, index) => {
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

          {/* Individual Rights */}
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
                GDPR <span className="text-red-600">Individual Rights</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gdprRights.map((right, index) => {
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

          {/* GDPR Services */}
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
                Our GDPR <span className="text-red-600">Compliance Services</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {gdprServices.map((service, index) => {
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
                Our GDPR <span className="text-red-600">Compliance Process</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceSteps.map((step, index) => {
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

          {/* Benefits Section */}
          <div className="mb-32 observe-animate">
            <div className="bg-gradient-to-r from-red-600/10 to-black border border-red-600/30 rounded-2xl p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Benefits of GDPR <span className="text-red-600">Compliance</span></h2>
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

          {/* Who Needs GDPR Section */}
          <div className="mb-32 observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Who Needs <span className="text-red-600">GDPR Compliance?</span>
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
                Our <span className="text-red-600">GDPR Approach</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaGlobe className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Global Expertise</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Certified Data Protection Experts</p>
                  <p className="text-gray-300 text-justify">Cross-Border Compliance Knowledge</p>
                  <p className="text-gray-300 text-justify">Industry-Specific Experience</p>
                  <p className="text-gray-300 text-justify">Regulatory Authority Relationships</p>
                  <p className="text-gray-300 text-justify">Continuous Legal Updates</p>
                  <p className="text-gray-300 text-justify">Global Implementation Experience</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaLock className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Data Protection Excellence</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Comprehensive Gap Analysis</p>
                  <p className="text-gray-300 text-justify">Privacy by Design Implementation</p>
                  <p className="text-gray-300 text-justify">Data Protection Impact Assessments</p>
                  <p className="text-gray-300 text-justify">Consent Management Solutions</p>
                  <p className="text-gray-300 text-justify">Breach Response Planning</p>
                  <p className="text-gray-300 text-justify">Ongoing Compliance Monitoring</p>
                </div>
              </div>
            </div>
          </div>

          {/* GDPR Compliance Details */}
          <div className="observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                GDPR <span className="text-red-600">Compliance Details</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Territorial Scope</div>
                <p className="text-gray-300 text-justify">Applies to organizations processing personal data of individuals in the EU, regardless of where the organization is based. Also applies to organizations offering goods/services to or monitoring behavior of individuals in the EU.</p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Penalties</div>
                <p className="text-gray-300 text-justify">Fines for non-compliance can reach up to €20 million or 4% of global annual turnover, whichever is higher. Lesser violations can result in fines up to €10 million or 2% of global annual turnover.</p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Timeline</div>
                <p className="text-gray-300 text-justify">GDPR compliance journey typically takes 6-12 months depending on organization size, complexity of data processing, and current data protection measures. Our experts will help you achieve compliance efficiently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page