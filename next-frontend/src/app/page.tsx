'use client'

// Importing required components for the page
import AboutUs from '@/components/about-us'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import OurServices from '@/components/our-services'
import Testimonials from '@/components/testimonials'
import Button from '@/components/ui/button'
import HeroRatingsList from '@/components/ui/hero-rating'
import SatisfactionCard from '@/components/ui/satisfaction-card'
import WorkingProcess from '@/components/working-process'
import Image from 'next/image'

// Main page component
function page() {
  return (
    <>
      {/* Navigation bar */}
      <Nav />
      <main className='w-full h-screen relative'>
        <Image
          src="/hero-bg.png"
          alt="Eventful India hero section background"
          fill
          className="absolute object-cover w-full h-full inset-0 top-0 left-0 right-0 -z-10"
        />
        <Image
          src="/hero-free-hand.png"
          alt="Free hand illustration for Eventful India hero section"
          width={260}
          height={400}
          className="absolute top-[39%] right-[46%] scale-[60%] hidden md:block"
        />
        <Image
          src="/hero-arrow.png"
          alt="Arrow graphic highlighting Eventful India call to action"
          width={360}
          height={200}
          className="absolute bottom-[5%] right-[40%] scale-[60%] hidden md:block"
        />
        {/* Hero section content */}
        <div className='z-10 relative flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-24'>
          {/* Left side: text and actions */}
          <div className="text-[#fff] px-4 md:px-6 pt-32 md:pt-18 min-h-[60vh] md:min-h-screen flex flex-col justify-center w-full md:w-[50%] gap-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-[64px]">
              Brilliant Events,<br />
              Magical <span className="text-[#b7f37b]">Experiences</span>
            </h1>
            <p className="text-base md:text-lg text-[#dee4e3] pr-0 md:pr-8">
              I am Shivam Verma. This project is a modern, responsive web application designed to highlight services, showcase artists, and provide an engaging user experience for event planning and management.
            </p>
            {/* Call to action button and contact info */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 md:gap-8">
              <Button label="Explore Artists" onClick={() => window.location.href = '/artists'} />
              <div className="text-sm">
          <p className="text-[#dee4e3]">Any time call</p>
          <p className="text-[#dee4e3] font-semibold text-lg">📞 +91-7814686228</p>
              </div>
            </div>
            {/* Ratings list */}
            <div className="flex gap-6 md:gap-12 mt-10 md:mt-20 flex-wrap">
              <HeroRatingsList />
            </div>
          </div>
          {/* Right side: hero image and satisfaction card */}
            <div className='h-full w-full md:w-[50%] flex items-center justify-center pt-10 md:pt-18 relative'>
            <Image
              src="/hero-img.png"
              alt="Eventful India main hero image with artist illustration"
              width={600}
              height={600}
              className='w-[80%] h-auto'
              priority
            />
            <SatisfactionCard />
            </div>
        </div>
        {/* Other sections below the hero */}
        <Testimonials />
        <AboutUs />
        <OurServices />
        <WorkingProcess />
        <Footer />
      </main >
    </>
  )
}

export default page