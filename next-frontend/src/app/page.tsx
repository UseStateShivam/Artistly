'use client'

import AboutUs from '@/components/about-us'
import Footer from '@/components/footer'
import OurServices from '@/components/our-services'
import Testimonials from '@/components/testimonials'
import WorkingProcess from '@/components/working-process'
import React from 'react'

function page() {
  return (
    <main className='w-full h-screen relative'>
      <img
        src="./hero-bg.png"
        alt="hero background"
        className='absolute object-cover w-full h-full inset-0 top-0 left-0 right-0 -z-10'
      />
      <img
        src="./hero-free-hand.png"
        alt="hero free hand"
        className='absolute top-[39%] right-[48%] scale-[60%]'
      />
      <img
        src="./hero-arrow.png"
        alt="hero arrow"
        className='absolute bottom-[5%] right-[40%] scale-[60%]'
      />
      <div className='z-10 relative flex items-center justify-between h-full px-24'>
        <div className="text-[#fff] px-6 pt-18 min-h-screen flex flex-col justify-center w-[50%] gap-6">
          {/* Heading */}
          <h1 className="text-6xl font-bold leading-[64px]">
            Brilliant Events,<br />
            Magical <span className="text-[#b7f37b]">Experiences</span>
          </h1>

          {/* Subheading */}
            <p className="text-lg text-[#dee4e3] pr-8">
            I am Shivam Verma, this is a pre-interview task for Eventful India Marketing Services. It showcases modern, responsive web application and engaging user experience. Thank you for reviewing my work!
            </p>

          {/* CTA + Contact */}
          <div className="flex flex-wrap items-center gap-8">
            <button className="bg-[#b7f37b] text-[#174f46] text-md font-semibold px-6 py-3 rounded-2xl hover:brightness-125 transition cursor-pointer">
              Explore Artists
            </button>

            <div className="text-sm">
              <p className="text-[#dee4e3]">Any time call</p>
              <p className="text-[#dee4e3] font-semibold text-lg">📞 +91-7814686228</p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex gap-12 mt-20 flex-wrap">
            <div>
              <p className="font-bold">⭐⭐ Trustpilot</p>
              <p className="text-sm text-[#dee4e3]">Always 5 Star</p>
            </div>
            <div>
              <p className="font-bold">⭐ Capterra</p>
              <p className="text-sm text-[#dee4e3]">Always 4.3 Star</p>
            </div>
          </div>
        </div>
        <div className='h-full w-[50%] flex items-center justify-center pt-18 relative'>
          <img
            src="./hero-img.png"
            alt="hero free hand"
            className='w-[80%]'
          />
          <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-4 border border-[#dbe2ea] shadow absolute bottom-[20%] left-0 z-[100]">
            <div className="flex -space-x-6">
              <img
                src="/user1.avif"
                alt="User 1"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/user2.avif"
                alt="User 2"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/user3.avif"
                alt="User 3"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/user4.avif"
                alt="User 4"
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
            </div>

            {/* Text */}
            <div className="text-[#174f46]">
              <p className="font-bold leading-none text-xl mb-1">50K+</p>
              <p className="text-md leading-none">Satisfied Customers</p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <AboutUs />
      <OurServices />
      <WorkingProcess />
      <Footer />
    </main>
  )
}

export default page