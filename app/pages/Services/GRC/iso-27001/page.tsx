"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'

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

  return (
    <>
      {/* Hero Banner */}
      <header role="banner" className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/iso-compliance/iso-banner.jpg"
            alt="ISO 27001 : 2022"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black"></div>
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1200 800">
              <defs>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-red-600"/>
                </pattern>
              </defs>
              <rect width="1200" height="800" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              ISO - 27001 : 2022
            </h1>
          </div>
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
                    <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Compliance</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    ISO-27001 <span className="text-red-600">Compliance</span>
                  </h2>
                </div>

                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-justify text-lg">
                    Our ISO-27001 Compliance service helps organizations build, implement, and maintain a robust Information Security Management System (ISMS) aligned with the global standard for protecting sensitive data. We assess your current security controls, identify gaps against ISO-27001 requirements, and provide clear, actionable steps to achieve certification readiness.
                  </p>
                  <p className="text-justify text-lg">
                    From risk assessments and policy development to control implementation and continuous improvement, we guide you through every stage of the compliance journey. With our expertise, your organization can strengthen data protection, reduce security risks, meet regulatory expectations, and demonstrate a strong commitment to information security to customers and stakeholders.
                  </p>
                </div>
              </div>

              <div className="observe-animate slide-right">
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden border-2 border-red-600/30 shadow-2xl group">
                  <Image
                    src="/images/services/gapanalysis/gapanalysis.jpg"
                    alt="Gap Analysis"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Content */}
          <div className="space-y-16 md:space-y-24">
            {/* 1. Gap Assessment */}
            <div className="observe-animate">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-3 space-y-6">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 font-bold text-xl">01</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white">
                      Gap <span className="text-red-600">Assessment</span>
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed text-justify">
                    Comprehensive evaluation of your current information security posture against ISO 27001:2022 requirements. 
                    We identify gaps, vulnerabilities, and areas for improvement to create a roadmap for successful certification. 
                    Our detailed assessment covers all 114 controls across 4 themes and 14 categories.
                  </p>
                </div>
                <div className="lg:col-span-2 flex justify-center">
                  <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden border-2 border-red-600/30 shadow-2xl group">
                    <Image
                      src="/images/services/iso-compliance/gap-assessment.jpg"
                      alt="Gap Assessment"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Documentation */}
            <div className="observe-animate">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-2 flex justify-center lg:order-1">
                  <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden border-2 border-red-600/30 shadow-2xl group">
                    <Image
                      src="/images/services/iso-compliance/documentation.jpg"
                      alt="Documentation"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                  </div>
                </div>
                <div className="lg:col-span-3 space-y-6 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 font-bold text-xl">02</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white">
                      Documentation
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed text-justify">
                    Complete ISMS documentation suite including manuals, charter, policies, processes & procedures, 
                    plans and guidelines, registers, forms, and templates. All documentation is tailored to your 
                    organization&apos;s specific requirements and compliant with ISO 27001:2022 standards.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Training */}
            <div className="observe-animate">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-3 space-y-6">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 font-bold text-xl">03</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white">
                      Training
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed text-justify">
                    Comprehensive training programs for your team covering ISO 27001:2022 requirements, 
                    information security awareness, risk management, and internal audit processes. 
                    We ensure your staff is fully prepared for implementation and ongoing compliance.
                  </p>
                </div>
                <div className="lg:col-span-2 flex justify-center">
                  <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden border-2 border-red-600/30 shadow-2xl group">
                    <Image
                      src="/images/services/iso-compliance/training.jpg"
                      alt="Training"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Risk Assessment */}
            <div className="observe-animate">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-2 flex justify-center lg:order-1">
                  <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden border-2 border-red-600/30 shadow-2xl group">
                    <Image
                      src="/images/services/iso-compliance/risk-assessment.jpg"
                      alt="Risk Assessment"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                  </div>
                </div>
                <div className="lg:col-span-3 space-y-6 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 font-bold text-xl">04</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white">
                      Risk <span className="text-red-600">Assessment</span>
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed text-justify">
                    Systematic identification, analysis, and evaluation of information security risks. 
                    We develop comprehensive risk treatment plans and implement appropriate controls 
                    to mitigate identified risks according to ISO 27001:2022 methodology.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Internal Audit */}
            <div className="observe-animate">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-3 space-y-6">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 font-bold text-xl">05</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white">
                      Internal <span className="text-red-600">Audit</span>
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed text-justify">
                    Professional internal audit services to evaluate the effectiveness of your ISMS. 
                    Our certified auditors conduct thorough assessments, identify non-conformities, 
                    and provide actionable recommendations for continuous improvement.
                  </p>
                </div>
                <div className="lg:col-span-2 flex justify-center">
                  <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden border-2 border-red-600/30 shadow-2xl group">
                    <Image
                      src="/images/services/iso-compliance/internal-audit.jpg"
                      alt="Internal Audit"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Infrastructure Development */}
            <div className="observe-animate">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-2 flex justify-center lg:order-1">
                  <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden border-2 border-red-600/30 shadow-2xl group">
                    <Image
                      src="/images/services/iso-compliance/infrastructure-development.jpg"
                      alt="Infrastructure Development"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                  </div>
                </div>
                <div className="lg:col-span-3 space-y-6 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 font-bold text-xl">06</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white">
                      Infrastructure <span className="text-red-600">Development</span>
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed text-justify">
                    Design and implementation of secure IT infrastructure aligned with ISO 27001:2022 controls. 
                    We help establish robust security architecture, network segmentation, access controls, 
                    and monitoring systems to support your ISMS requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Support External Audit */}
            <div className="observe-animate">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-3 space-y-6">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 font-bold text-xl">07</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white">
                      Support External <span className="text-red-600">Audit</span>
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base lg:text-lg leading-relaxed text-justify">
                    Complete support throughout the external certification audit process. 
                    We prepare your organization for Stage 1 and Stage 2 audits, coordinate with certification bodies, 
                    and ensure successful ISO 27001:2022 certification achievement.
                  </p>
                </div>
                <div className="lg:col-span-2 flex justify-center">
                  <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden border-2 border-red-600/30 shadow-2xl group">
                    <Image
                      src="/images/services/iso-compliance/external-audit.jpg"
                      alt="Support External Audit"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page