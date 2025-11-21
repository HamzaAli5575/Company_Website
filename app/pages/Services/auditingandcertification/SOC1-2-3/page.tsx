"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaShieldAlt, FaChartLine, FaClipboardCheck, FaCheckCircle, FaGlobe, FaUsers, FaLock, FaSearch, FaExclamationTriangle, FaClock, FaNetworkWired, FaUserSecret, FaEye, FaTools, FaCertificate, FaFileAlt, FaServer, FaCloud, FaDatabase, FaKey, FaUserCheck } from 'react-icons/fa'

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

  const socComponents = [
    { icon: FaEye, title: "24/7 Security Monitoring", desc: "Continuous surveillance of your entire IT infrastructure to detect and respond to threats in real-time" },
    { icon: FaSearch, title: "Threat Detection", desc: "Advanced analytics and machine learning to identify suspicious activities and potential security breaches" },
    { icon: FaExclamationTriangle, title: "Incident Response", desc: "Rapid containment and remediation of security incidents to minimize damage and recovery time" },
    { icon: FaClock, title: "Vulnerability Management", desc: "Proactive identification and remediation of security weaknesses before they can be exploited" }
  ]

  const benefits = [
    "Reduced Risk of Breaches",
    "24/7 Expert Security Coverage",
    "Faster Incident Response Times",
    "Cost-Effective Security Operations",
    "Improved Compliance Posture",
    "Access to Advanced Security Tools",
    "Enhanced Threat Visibility",
    "Scalable Security Solutions"
  ]

  const audiences = [
    "Financial Institutions",
    "Healthcare Providers",
    "Government Agencies",
    "Technology Companies",
    "Retail & E-commerce",
    "Manufacturing Sector",
    "Cloud Service Providers",
    "SaaS Companies"
  ]

  const socCapabilities = [
    {
      icon: FaNetworkWired,
      title: "Advanced Threat Intelligence",
      description: "Leverage cutting-edge threat intelligence feeds and analysis to stay ahead of emerging threats and attack vectors targeting your industry.",
      features: [
        "Real-time threat intelligence feeds",
        "Industry-specific threat analysis",
        "Vulnerability alerts and advisories",
        "Threat actor profiling",
        "Dark web monitoring",
        "Geopolitical threat assessment"
      ]
    },
    {
      icon: FaUserSecret,
      title: "Security Orchestration",
      description: "Automate and streamline security operations through integrated platforms that connect your security tools and processes.",
      features: [
        "Automated incident response playbooks",
        "Security tool integration",
        "Workflow automation",
        "Custom alerting and reporting",
        "Case management systems",
        "Cross-platform correlation"
      ]
    },
    {
      icon: FaTools,
      title: "Managed Detection & Response",
      description: "Comprehensive endpoint and network monitoring with expert analysis and rapid response to security incidents.",
      features: [
        "Endpoint detection and response",
        "Network traffic analysis",
        "User and entity behavior analytics",
        "Threat hunting and investigation",
        "Malware analysis and reverse engineering",
        "Forensic data collection"
      ]
    }
  ]

  const socTypes = [
    {
      id: "soc1",
      icon: FaFileAlt,
      title: "SOC 1",
      subtitle: "Service Organization Control 1",
      description: "SOC 1 reports focus on controls at a service organization that are relevant to financial reporting. These reports are essential for organizations that provide services impacting their clients' financial reporting.",
      keyPoints: [
        "Focuses on controls relevant to financial reporting",
        "Type 1: Report on the design of controls at a specific point in time",
        "Type 2: Report on the design and operating effectiveness of controls over a period",
        "Essential for financial institutions and auditors",
        "Helps assess risks related to financial reporting"
      ],
      benefits: [
        "Builds trust with financial stakeholders",
        "Demonstrates control effectiveness",
        "Supports regulatory compliance",
        "Reduces audit costs for clients"
      ]
    },
    {
      id: "soc2",
      icon: FaServer,
      title: "SOC 2",
      subtitle: "Service Organization Control 2",
      description: "SOC 2 reports evaluate controls at a service organization relevant to security, availability, processing integrity, confidentiality, and privacy. These are critical for technology and cloud service providers.",
      keyPoints: [
        "Evaluates controls across five trust service criteria",
        "Security: Protection against unauthorized access",
        "Availability: System is available for operation and use",
        "Processing Integrity: System processing is complete, accurate, timely, and authorized",
        "Confidentiality: Information is protected as required",
        "Privacy: Personal information is collected, used, retained, disclosed, and disposed of properly"
      ],
      benefits: [
        "Demonstrates commitment to security and privacy",
        "Builds trust with customers and partners",
        "Supports compliance with regulations like GDPR and CCPA",
        "Provides competitive advantage in the market"
      ]
    },
    {
      id: "soc3",
      icon: FaCloud,
      title: "SOC 3",
      subtitle: "Service Organization Control 3",
      description: "SOC 3 reports provide a general report on a service organization's controls, intended for a broader audience. They are less detailed than SOC 2 reports but provide assurance to stakeholders.",
      keyPoints: [
        "General use report for broader audiences",
        "Same trust service criteria as SOC 2",
        "Less detailed than SOC 2 reports",
        "Suitable for public distribution",
        "Provides high-level assurance to stakeholders"
      ],
      benefits: [
        "Demonstrates control commitment to general public",
        "Supports marketing and sales efforts",
        "Builds trust with potential customers",
        "Provides competitive differentiation"
      ]
    }
  ]

  const socServices = [
    {
      icon: FaDatabase,
      title: "Log Management & Analysis",
      description: "Comprehensive collection, aggregation, and analysis of log data from across your infrastructure to detect anomalies and security events.",
      features: [
        "Centralized log collection",
        "Real-time log analysis",
        "Correlation of events across systems",
        "Long-term log retention",
        "Compliance reporting"
      ]
    },
    {
      icon: FaKey,
      title: "Identity & Access Management",
      description: "Monitor and manage user access to critical systems and data, ensuring only authorized individuals have appropriate permissions.",
      features: [
        "User activity monitoring",
        "Privileged access management",
        "Access request workflows",
        "Session recording",
        "Anomalous access detection"
      ]
    },
    {
      icon: FaUserCheck,
      title: "Threat Hunting",
      description: "Proactive search for threats that evade automated detection, using advanced techniques to uncover hidden vulnerabilities and attacks.",
      features: [
        "Hypothesis-driven investigations",
        "Advanced threat detection techniques",
        "Custom detection rules",
        "Threat intelligence integration",
        "Regular hunting campaigns"
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
            alt="SOC Services"
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
            Security Operations <span className="text-red-600">Center Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-justify">
            24/7 proactive monitoring, detection, and response to protect your organization from evolving cyber threats
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
                    <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Security Excellence</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Proactive Cybersecurity Defense
                  </h2>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  Our Security Operations Center (SOC) services provide continuous monitoring and advanced threat detection to safeguard your critical assets. Our expert security analysts work around the clock to identify, analyze, and respond to potential security incidents before they can impact your business.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  With cutting-edge technology and proven methodologies, we deliver comprehensive visibility into your security posture while reducing the burden on your internal teams. Our SOC services are designed to scale with your organization, providing the right level of protection for your unique risk profile and compliance requirements.
                </p>

                <div className="pt-6 space-y-3">
                  {['24/7 Monitoring', 'Threat Detection', 'Incident Response', 'Vulnerability Management', 'Compliance Support', 'SOC 1/2/3 Reporting'].map((item, i) => (
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
                    alt="Security Operations Center"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* SOC Components */}
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
                Comprehensive <span className="text-red-600">SOC Services</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socComponents.map((component, index) => {
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

          {/* SOC Types Section */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">SOC Reports</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Understanding <span className="text-red-600">SOC 1, SOC 2 & SOC 3</span>
              </h2>
            </div>

            <div className="space-y-12">
              {socTypes.map((socType, index) => {
                const Icon = socType.icon
                return (
                  <div
                    key={socType.id}
                    className={`observe-animate ${index % 2 === 0 ? 'slide-left' : 'slide-right'} bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 bg-red-600/20 rounded-lg">
                        <Icon className="text-3xl text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{socType.title}</h3>
                        <p className="text-red-500 font-medium text-lg">{socType.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed text-justify">
                      {socType.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <FaClipboardCheck className="text-red-600" />
                          Key Points
                        </h4>
                        <ul className="space-y-3">
                          {socType.keyPoints.map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                              <span className="text-gray-300 text-justify">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <FaCheckCircle className="text-red-600" />
                          Benefits
                        </h4>
                        <ul className="space-y-3">
                          {socType.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                              <span className="text-gray-300 text-justify">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* SOC Capabilities */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Advanced Capabilities</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our SOC <span className="text-red-600">Capabilities</span>
              </h2>
            </div>

            <div className="space-y-12">
              {socCapabilities.map((capability, index) => {
                const Icon = capability.icon
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
                        <h3 className="text-3xl font-bold text-white">{capability.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed text-justify">
                      {capability.description}
                    </p>
                    
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <FaClipboardCheck className="text-red-600" />
                        Key Features
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {capability.features.map((feature, i) => (
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

          {/* Additional SOC Services */}
          <div className="mb-32">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Specialized Services</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Specialized <span className="text-red-600">SOC Services</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {socServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="observe-animate scale-in group bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-8 hover:border-red-600/50 transition-all"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-red-600/20 rounded-lg group-hover:bg-red-600/30 transition-all">
                        <Icon className="text-2xl text-red-600" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                      {service.description}
                    </p>
                    
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-red-600 mt-2"></div>
                            <span className="text-gray-300 text-sm text-justify">{feature}</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Benefits of Our <span className="text-red-600">SOC Services</span></h2>
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

          {/* Who Benefits Section */}
          <div className="mb-32 observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Who Benefits from <span className="text-red-600">SOC Services?</span>
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
                Our <span className="text-red-600">SOC Approach</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaGlobe className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Global Expertise</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Certified Security Analysts</p>
                  <p className="text-gray-300 text-justify">Industry-Specific Knowledge</p>
                  <p className="text-gray-300 text-justify">Advanced Threat Intelligence</p>
                  <p className="text-gray-300 text-justify">Cross-Platform Integration</p>
                  <p className="text-gray-300 text-justify">Continuous Security Improvement</p>
                  <p className="text-gray-300 text-justify">SOC 1/2/3 Reporting Expertise</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaLock className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Security Excellence</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Proactive Threat Hunting</p>
                  <p className="text-gray-300 text-justify">Rapid Incident Response</p>
                  <p className="text-gray-300 text-justify">Comprehensive Visibility</p>
                  <p className="text-gray-300 text-justify">Automated Security Workflows</p>
                  <p className="text-gray-300 text-justify">Detailed Reporting & Analytics</p>
                  <p className="text-gray-300 text-justify">Compliance Management</p>
                </div>
              </div>
            </div>
          </div>

          {/* SOC Service Details */}
          <div className="observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                SOC Service <span className="text-red-600">Details</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">24/7 Coverage</div>
                <p className="text-gray-300 text-justify">Round-the-clock monitoring and response by our expert security analysts, ensuring your organization is protected at all times. Our SOC operates 365 days a year with no exceptions.</p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Customizable</div>
                <p className="text-gray-300 text-justify">Tailored SOC services to meet your specific industry requirements, compliance needs, and risk tolerance levels. We adapt our approach to your unique environment.</p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Scalable</div>
                <p className="text-gray-300 text-justify">Flexible service models that grow with your organization, providing the right level of protection at every stage. Scale up or down based on your evolving security needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page