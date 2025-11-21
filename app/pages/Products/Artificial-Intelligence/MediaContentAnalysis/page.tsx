"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'

const Page = () => {
  const [showOverview, setShowOverview] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowOverview(true), 120)
    
    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Handle main section animations
          if (entry.target.classList.contains('animate-on-scroll')) {
            entry.target.classList.remove('opacity-0', 'translate-y-10', 'translate-y-6')
            entry.target.classList.add('opacity-100', 'translate-y-0')
          }
          
          // Handle fadeInUp animations
          const fadeElements = entry.target.querySelectorAll('.animate-fadeInUp')
          fadeElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.remove('opacity-0')
              el.classList.add('animate-in')
            }, index * 200)
          })
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll('.animate-on-scroll')
    animateElements.forEach((el) => observer.observe(el))

    // Add custom CSS animations
    const style = document.createElement('style')
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fadeInUp {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
      }
      
      .animate-fadeInUp.animate-in {
        opacity: 1;
      }
    `
    document.head.appendChild(style)

    return () => {
      clearTimeout(t)
      observer.disconnect()
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  return (
  <>
  <header role="banner" className="relative w-full overflow-hidden min-h-[120px] md:h-[220px] lg:h-[280px] bg-black pt-16 md:pt-20">
      {/* Background banner image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Products-AI/MCA.jpg"
          alt="Media Content Analysis (MCA)"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* overlay: darker at bottom for banner legibility */}
        <div className="absolute inset-0 z-10 bg-linear-to-b from-black/60 via-black/30 to-transparent pointer-events-none"></div>
      </div>

      <div className="container mx-auto h-full flex items-center justify-center px-4 relative z-20">
        <h1 className="font-ict text-5xl md:text-6xl leading-tight text-white font-bold text-center">
          Media Content Analysis (MCA)
        </h1>
      </div>
    </header>
    
    {/* Cards section with background image (placeholder MCA.jpg) */}
    <section className="relative w-full py-12">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Background1.png')" }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        {/* Product Overview Section */}
        <div className="mb-16 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out animate-on-scroll">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white animate-fadeInUp">
                PRODUCT <span className="text-teal-400 hover:animate-pulse">OVERVIEW</span>
              </h2>
              <p className="text-gray-300 text-base leading-relaxed text-justify opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                The AI Empowered Media Suite is an advanced software system designed for media monitoring,
                offering situational awareness and trend analysis across electronic, social, and print media.
                It utilizes AI algorithms for features like personality detection, multilingual transcription,
                sentiment analysis, and social media analytics, including Twitter analytics and print media information
                extraction.
              </p>
              <p className="text-gray-300 text-base leading-relaxed text-justify opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                The AI Empowered Media Suite is a comprehensive software system that consists of three major components:
                Electronic Media Analytics, Social Media Analytics, and Print Media Analytics.
              </p>
              <p className="text-gray-300 text-base leading-relaxed text-justify opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                This integrated approach provides comprehensive coverage across all media channels, enabling organizations
                to gain complete situational awareness and make informed decisions based on real-time media intelligence.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-80 rounded-xl overflow-hidden border border-teal-500/30 shadow-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-teal-500/25 hover:rotate-1 animate-fadeInUp">
                <Image
                  src="/images/Products-AI/MCA-main.jpg"
                  alt="MCA Overview"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-teal-600/10 hover:bg-transparent transition-all duration-300"></div>
                <div className="absolute inset-0 bg-linear-to-t from-teal-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>





        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
       

          <article className="bg-white/6 border border-white/20 rounded-xl p-6 backdrop-blur-md text-white shadow-lg h-full flex flex-col transform transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:bg-white/10">
            <div className="mb-4 h-60 w-full relative rounded-md overflow-hidden">
              <Image
                src="/images/Products-AI/socialmedia.jpg"
                alt="Social Media Analytics"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Social Media Analytics</h3>
            <div className="flex flex-col gap-2 text-sm md:text-base leading-relaxed flex-1">
              <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>YouTube Video Analysis</p>
              </div>
              <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>Automatic Information Extraction Using Smart Spider</p>
              </div>
              <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>Uploaded Video Cataloging and Content Archiving in DB</p>
              </div>
              <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>Multilingual Transcription and Comments Extraction</p>
              </div>
              <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>Sentiment Analysis and Twitter Spaces Transcription</p>
              </div>
               <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>Content Archiving in DB</p>
              </div>
              <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>keyword Spotting</p>
              </div>
            </div>
          </article>
             <article className="bg-white/6 border border-white/20 rounded-xl p-6 backdrop-blur-md text-white shadow-lg h-full flex flex-col transform transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:bg-white/10">
            <div className="mb-4 h-60 w-full relative rounded-md overflow-hidden">
              <Image
                src="/images/Products-AI/electronicmedia.jpg"
                alt="Electronic Media Analytics"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Electronic Media Analytics</h3>
            <div className="flex flex-col gap-2 text-sm md:text-base leading-relaxed flex-1">
              <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>Video Streaming across channels with content extraction controls</p>
              </div>
              <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>Transcription (Speech to Text) with multilingual support</p>
              </div>
              <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>Ticker, Screenshots Extraction and Archiving</p>
              </div>
              <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>Clipping Factory with video clipping features</p>
              </div>
              <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>Archiving information in the DB and search engine for retrieval</p>
              </div>
              <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>Keywords spotting and multilingual support</p>
              </div>
              <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>Print Ready Report Generation and Sentiment Analysis</p>
              </div>
            </div>
          </article>

          <article className="bg-white/6 border border-white/20 rounded-xl p-6 backdrop-blur-md text-white shadow-lg h-full flex flex-col transform transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:bg-white/10">
            <div className="mb-4 h-60 w-full relative rounded-md overflow-hidden">
              <Image
                src="/images/Products-AI/printmedia.jpg"
                alt="Print Media Analytics"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-teal-100 transition-colors duration-300">Print Media Analytics</h3>
            <div className="flex flex-col gap-2 text-sm md:text-base leading-relaxed flex-1">
              <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>Automatic Print Media Analytics (News, Journals, Magazines, Web Pages)</p>
              </div>
              <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>Daily Cartoon Scrapping</p>
              </div>
               <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>Regional, National and International news coverage</p>
              </div>
              <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>Automatic Information Extraction (Politics, Events, and Keywords)</p>
              </div>
              <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>News Summarization</p>
              </div>
               <div className={`flex items-start gap-3 transform transition-all duration-500 ${showOverview ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'} delay-150`}>
                <Check className="mt-0.5 w-4 h-4 text-teal-400 shrink-0" />
                <p className='text-gray-300 text-sm sm:text-base leading-relaxed flex-1'>Archiving with Report Generation</p>
              </div>
            </div>
          </article>
        </div>
        
        {/* Brochure Download Button */}
        <div className="mt-12 text-center">
          <a
            href="/brochures/MCA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-linear-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <svg 
              className="w-6 h-6" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            MCA Brochure
          </a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Page