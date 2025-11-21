import React from 'react'
import ContactForm from '../../components/Home/contactform'
import ContactUs from '../../components/Home/contactus'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      {/* Header Banner  */}
            <header role="banner" className="relative w-full overflow-hidden min-h-[120px] md:h-[220px] lg:h-[280px] bg-black pt-16 md:pt-20">
              {/* Background banner image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/contact/contact-banner.jpg"
                  alt="Contact Us Banner"
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
                  Contact Us
                </h1>
              </div>
            </header>
      <ContactForm />
      <ContactUs />
    </div>
  )
}

export default page