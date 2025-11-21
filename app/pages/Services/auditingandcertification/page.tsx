"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { FaCertificate, FaShieldAlt, FaChartLine, FaClipboardCheck, FaBookmark, FaGraduationCap } from 'react-icons/fa'

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

  const domains = [
    { icon: FaShieldAlt, title: "Cybersecurity & Audit's Role", desc: "Understanding audit's critical role in cybersecurity governance and risk management" },
    { icon: FaClipboardCheck, title: "Cybersecurity Governance", desc: "Authorization processes, asset management, configuration, and change control frameworks" },
    { icon: FaChartLine, title: "Cybersecurity Operations", desc: "Security frameworks, threat assessment, identity management, and regulatory requirements" },
    { icon: FaBookmark, title: "Technology Topics", desc: "Enterprise systems, infrastructure, tools, and specific cyber technology domains" }
  ]

  const audiences = [
    "Audit/Assurance Professionals",
    "IT Risk Professionals",
    "Teams & Individuals Upskilling",
    "Enterprise Security Teams"
  ]

  return (
    <>
      {/* Hero Banner */}
      <header role="banner" className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-black flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/gapanalysis/gapanalysis-banner.jpg"
            alt="Cybersecurity Audit Certificate"
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
            Auditing and <span className="text-red-600">Certification</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-justify">
            Master cybersecurity auditing with industry-leading expertise and globally recognized certification
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
                    <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Certification Program</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Advanced Cybersecurity Audit Excellence
                  </h2>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  The Cybersecurity Audit Certificate program is designed to equip audit and IT risk professionals with the essential knowledge to assess, manage, and audit cybersecurity controls effectively. Cover comprehensive domains including governance, operations, and advanced technology topics.
                </p>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  With 8+ hours of expert-led content, study materials developed by industry practitioners, and a rigorous 75-question exam, you will gain recognized credentials that advance your career in cybersecurity auditing.
                </p>

                <div className="pt-6 space-y-3">
                  {['2-Hour Proctored Exam', '75 Multiple-Choice Questions', '65% Pass Rate Required', '12-Month Eligibility'].map((item, i) => (
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
                    alt="Cybersecurity Audit Certificate"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Four Domains Grid */}
          <div className="mb-20">
            <div className="text-center mb-16 observe-animate">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-red-600"></div>
                  <span className="text-red-600 font-semibold uppercase text-sm tracking-wider">Core Domains</span>
                  <div className="h-1 w-12 bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Four Key <span className="text-red-600">Learning Domains</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {domains.map((domain, index) => {
                const Icon = domain.icon
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
                      {domain.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors text-justify">
                      {domain.desc}
                    </p>
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Who Benefits Section */}
          <div className="mb-32 observe-animate">
            <div className="bg-gradient-to-r from-red-600/10 to-black border border-red-600/30 rounded-2xl p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Who Should Pursue This <span className="text-red-600">Certification?</span></h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {audiences.map((audience, i) => (
                  <div key={i} className="p-6 bg-black/40 border border-white/10 rounded-xl hover:border-red-600/50 transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-red-600/20 rounded-lg group-hover:bg-red-600/30 transition-all">
                        <FaGraduationCap className="text-xl text-red-600" />
                      </div>
                      <p className="text-white font-semibold group-hover:text-red-300 transition-colors text-justify">{audience}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Learning & Resources */}
          <div className="mb-32 observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive <span className="text-red-600">Learning Resources</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaBookmark className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Online Course</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">8+ Hours of Expert Content</p>
                  <p className="text-gray-300 text-justify">10 CPE Credits Upon Completion</p>
                  <p className="text-gray-300 text-justify">Current Practitioner Instructors</p>
                  <p className="text-gray-300 text-justify">Industry-Certified Expertise</p>
                  <p className="text-gray-300 text-justify">On-Demand Learning Format</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-10 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-8">
                  <FaClipboardCheck className="text-2xl text-red-600" />
                  <h3 className="text-2xl font-bold text-white">Study Guide</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300 text-justify">Comprehensive Exam Preparation</p>
                  <p className="text-gray-300 text-justify">All Four Domain Coverage</p>
                  <p className="text-gray-300 text-justify">Practical Desk Reference</p>
                  <p className="text-gray-300 text-justify">Expert-Developed Content</p>
                  <p className="text-gray-300 text-justify">Real-World Scenarios</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exam Details */}
          <div className="observe-animate">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Exam <span className="text-red-600">Details & Requirements</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">No Prerequisites</div>
                <p className="text-gray-300 text-justify">Register and schedule anytime. Testing available 90 days in advance with 48-hour rescheduling flexibility.</p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">Remote Proctored</div>
                <p className="text-gray-300 text-justify">Computer-based exam administered remotely. 2-hour duration with 75 multiple-choice questions covering all domains.</p>
              </div>
              <div className="p-8 rounded-xl border border-white/10 hover:border-red-600/50 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-4">65% to Pass</div>
                <p className="text-gray-300 text-justify">Achieve and maintain globally recognized certification. 12-month eligibility period from registration to exam completion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page