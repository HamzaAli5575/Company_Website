"use client"
import React from 'react'
import Image from 'next/image'
import { MapPin, Mail, Phone, Linkedin, Twitter } from 'lucide-react'

const ContactUs = () => {
  return (
    <section className="py-8 relative overflow-hidden min-h-screen flex flex-col bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Background1.png"
          alt="Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Side - Contact Image */}
          <div className="order-1 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-red-600/50 shadow-2xl">
                <div className="relative h-[300px] md:h-[350px]">
                  <Image
                    src="/images/contact.jpg"
                    alt="Contact Us"
                    fill
                    className="object-cover transition-all duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-white">
                      <div className="text-red-600 font-semibold text-xs mb-1">
                        READY TO GET STARTED?
                      </div>
                      <div className="text-lg font-bold mb-1">
                        Let&apos;s Secure Your Future
                      </div>
                      <div className="text-gray-300 text-xs">
                        Professional cybersecurity solutions tailored for your business
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-red-600/30 to-red-500/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-br from-red-600/20 to-red-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div className="order-2 lg:order-2">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
                GET IN <span className="text-red-600">TOUCH</span>
              </h2>
              <p className="text-white text-sm leading-relaxed drop-shadow-md">
                Use the contact form below for any questions and inquiries please
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1 drop-shadow-md group-hover:text-red-300 transition-colors duration-300">ADDRESS</h3>
                  <p className="text-gray-300 text-sm leading-relaxed drop-shadow-sm group-hover:text-gray-200 transition-colors duration-300">
                    Horizon Tech Services, 3rd Floor - NSTP Building NUST,<br />
                    Khyber Rd, H-12, Islamabad.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1 drop-shadow-md group-hover:text-red-300 transition-colors duration-300">MAIL</h3>
                  <a
                    href="mailto:pmo@horizon.com.pk"
                    className="text-gray-300 text-sm drop-shadow-sm hover:text-red-400 transition-colors duration-300"
                  >
                    pmo@horizon.com.pk
                  </a>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1 drop-shadow-md group-hover:text-red-300 transition-colors duration-300">TELEPHONE</h3>
                  <a
                    href="tel:+92514912185"
                    className="text-gray-300 text-sm drop-shadow-sm hover:text-red-400 transition-colors duration-300"
                  >
                    051-8896702
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-white mb-4 drop-shadow-md">
                FOLLOW US ON <span className="text-red-600">SOCIAL MEDIA</span>
              </h3>
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/company/85086768/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <Twitter className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs