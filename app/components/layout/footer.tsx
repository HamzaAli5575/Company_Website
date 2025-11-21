"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Linkedin, Shield, Users, Network, Settings } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'IT Consultancy', href: '#services', icon: Users },
    { name: 'Network Security', href: '#services', icon: Network },
    { name: 'Managed Services', href: '#services', icon: Settings },
    { name: 'Digital Forensics', href: '#services', icon: Shield },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/pages/About' },
    { name: 'Services', href: '/pages/Services' },
    { name: 'Products', href: '/pages/Products' },
    { name: 'Contact', href: '/pages/Contact' },
  ]

  return (
    <footer className="bg-black border-t border-red-600/30 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgba(220,38,38,0.05)_0%,_transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(156,27,27,0.05)_0%,_transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <Image
                  src="/images/logo1.png"
                  alt="Horizon Tech Services Logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <h1 className="text-xl font-bold tracking-tight">
                  <span className="text-red-600">Horizon</span>
                  <span className="text-white"> Tech Services</span>
                </h1>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-amber-200 animate-pulse" />
                  <p className="text-xs font-semibold text-amber-200 tracking-wider uppercase animate-pulse">Your Information Security Partner</p>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading cybersecurity solutions provider. We secure your digital future with cutting-edge technology and expert services.
            </p>

            {/* Social Media */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Facebook className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Twitter className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/85086768/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-600 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-red-600 text-sm transition-colors duration-200 group"
                    >
                      <IconComponent className="w-3 h-3 group-hover:text-red-600" />
                      <span className="group-hover:translate-x-1 transform transition-transform duration-200">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-600">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">3rd Floor - NSTP Building NUST, Khyber Rd, H-12, Islamabad</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-600 flex-shrink-0" />
                <a href="mailto:pmo@horizon.com.pk" className="text-gray-400 hover:text-red-600 text-sm transition-colors">
                  pmo@horizon.com.pk
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                <a href="tel:+923155024936" className="text-gray-400 hover:text-red-600 text-sm transition-colors">
                  +92 315 502 4936
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Horizon Tech Services. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-red-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-red-600 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

