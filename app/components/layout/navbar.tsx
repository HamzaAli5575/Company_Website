"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Shield, ChevronRight } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

interface SubService {
  name: string
  href: string
}

interface MainService {
  name: string
  href: string
  subServices?: SubService[]
}

interface NavItem {
  name: string
  href: string
  children?: MainService[]
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const mainServices: MainService[] = [
    {
      name: "GRC Governance, Risk and Compliance",
      href: "/pages/Services/GRC/",
      subServices: [
        { name: "ISO 27001", href: "/pages/Services/GRC/iso-27001/" },
        { name: "ISO 20000", href: "/pages/Services/GRC/iso-20000/" },
        { name: "ISO 22301", href: "/pages/Services/GRC/iso-22301/" },
        { name: "ISO 27701", href: "/pages/Services/GRC/iso-27701/" },
        { name: "ISO 42001", href: "/pages/Services/GRC/iso-42001/" },
        { name: "HIPAA Compliance", href: "/pages/Services/GRC/HIPPA-compliance/" },
        { name: "HITRUST Compliance", href: "/pages/Services/GRC/HITRUST-compliance/" },
        { name: "GDPR", href: "/pages/Services/GRC/GDPR/" },
        { name: "PCI DSS", href: "/pages/Services/GRC/PCI-DSS/" },
        { name: "FDA Compliance", href: "/pages/Services/GRC/FDA-compliance/" },
        { name: "SAMA-CRFR", href: "/pages/Services/GRC/SAMA-CRFR/" },
        { name: "SAMA-CSF", href: "/pages/Services/GRC/SAMA-CSF/" },
        { name: "SAMA-MVC", href: "/pages/Services/GRC/SAMA-MVC/" },
        { name: "NDMO", href: "/pages/Services/GRC/NDMO/" },
      ]
    },
    {
      name: "Security Assessment Service",
      href: "/pages/Services/securityassessmentservice/",
      subServices: [
        { name: "VAPT", href: "/pages/Services/securityassessmentservice/VAPT/" },
        { name: "Source Code Review", href: "/pages/Services/securityassessmentservice/sourcecodereview/" },
        { name: "Social Engineering", href: "/pages/Services/securityassessmentservice/socialengineering/" },
      ]
    },
    {
      name: "Managed Security Services",
      href: "/pages/Services/managedsecurityservices/",
      subServices: [
        { name: "GRC Service", href: "/pages/Services/managedsecurityservices/GRC-service/" },
        { name: "VAPT Service", href: "/pages/Services/managedsecurityservices/VAPT-service/" },
        { name: "Virtual CISO", href: "/pages/Services/managedsecurityservices/virtualciso/" },
      ]
    },
    {
      name: "Auditing and Certification",
      href: "/pages/Services/auditingandcertification/",
      subServices: [
        { name: "ISO Certification Journey", href: "/pages/Services/auditingandcertification/iso-27001,9001,27701,22301,42001/" },
        { name: "SOC 1/2/3", href: "/pages/Services/auditingandcertification/SOC1-2-3/" },
        { name: "HIPAA", href: "/pages/Services/auditingandcertification/HIPAA/" },
        { name: "HITRUST", href: "/pages/Services/auditingandcertification/HITRUST/" },
        { name: "GDPR", href: "/pages/Services/auditingandcertification/gdpr/" },
        { name: "PCI DSS", href: "/pages/Services/auditingandcertification/pcidss/" },
      ]
    },
  ]

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/pages/Products" },
    { name: "Services", href: "/pages/Services", children: mainServices },
    { name: "About", href: "/pages/About" },
    { name: "Contact", href: "/pages/Contact" }
  ]

  const navBgClass = scrolled ? 'bg-black/95 border-b border-red-600/30 shadow-lg shadow-red-900/20' : 'bg-transparent'

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBgClass}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <motion.div
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
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
              <h1 className="text-lg font-bold text-white group-hover:text-red-600 transition-colors duration-300">
                <span className="text-red-600">Horizon</span>
                <span className="text-white"> Tech Services</span>
              </h1>
              <div className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-amber-200 animate-pulse" />
                <p className="text-xs text-amber-100 font-semibold tracking-wider uppercase animate-pulse">Your Information Security Partner</p>
              </div>
            </div>
          </motion.div>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  if (item.children) setActiveDropdown(item.name)
                }}
                onMouseLeave={() => {
                  setActiveDropdown(null)
                  setActiveSubDropdown(null)
                }}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-white hover:text-red-600 transition-colors duration-200 font-medium flex items-center gap-1"
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Main Dropdown for Services */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-black/95 border border-red-600/30 rounded-lg shadow-2xl py-2 z-50"
                      >
                        {item.children.map((service, idx) => (
                          <div
                            key={service.name}
                            className="relative group"
                            onMouseEnter={() => setActiveSubDropdown(`${idx}`)}
                            onMouseLeave={() => setActiveSubDropdown(null)}
                          >
                            <Link
                              href={service.href}
                              className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-red-600 hover:bg-red-600/10 transition-colors duration-200 group-hover:text-red-600"
                            >
                              <span className="font-medium">{service.name}</span>
                              {service.subServices && <ChevronRight className="w-4 h-4" />}
                            </Link>

                            {/* Sub-services Dropdown */}
                            {service.subServices && (
                              <AnimatePresence>
                                {activeSubDropdown === `${idx}` && (
                                  <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="absolute left-full top-0 ml-2 w-64 bg-black/95 border border-red-600/30 rounded-lg shadow-2xl py-2 z-50"
                                  >
                                    {service.subServices.map((subService) => (
                                      <Link
                                        key={subService.name}
                                        href={subService.href}
                                        className="block px-4 py-2 text-sm text-gray-400 hover:text-red-600 hover:bg-red-600/10 transition-colors duration-200"
                                      >
                                        {subService.name}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/Contact"
            className="hidden lg:inline-flex px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-600/50"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-red-600 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/95 border-t border-red-600/30 py-4 max-h-96 overflow-y-auto"
            >
              <div className="space-y-2 px-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-white hover:text-red-600 transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                    {item.children && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.children.map((service) => (
                          <div key={service.name}>
                            <Link
                              href={service.href}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-red-600 transition-colors font-medium"
                            >
                              {service.name}
                            </Link>
                            {service.subServices && (
                              <div className="pl-4 space-y-1 mt-1">
                                {service.subServices.map((subService) => (
                                  <Link
                                    key={subService.name}
                                    href={subService.href}
                                    className="block px-4 py-2 text-xs text-gray-500 hover:text-red-600 transition-colors"
                                  >
                                    {subService.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  href="/Contact"
                  className="block px-4 py-2 bg-red-600 text-white rounded-lg text-center font-semibold hover:bg-red-700 transition-colors mt-4"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
