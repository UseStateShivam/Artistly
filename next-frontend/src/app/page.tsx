'use client'

import AboutUs from '@/components/about-us'
import Footer from '@/components/footer'
import Nav from '@/components/nav'
import OurServices from '@/components/our-services'
import Testimonials from '@/components/testimonials'
import Button from '@/components/ui/button'
import HeroRatingsList from '@/components/ui/hero-rating'
import SatisfactionCard from '@/components/ui/satisfaction-card'
import WorkingProcess from '@/components/working-process'

function page() {
  return (
    <>
      <Nav />
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
            <h1 className="text-6xl font-bold leading-[64px]">
              Brilliant Events,<br />
              Magical <span className="text-[#b7f37b]">Experiences</span>
            </h1>
            <p className="text-lg text-[#dee4e3] pr-8">
              I am Shivam Verma, this is a pre-interview task for Eventful India Marketing Services. It showcases modern, responsive web application and engaging user experience. Thank you for reviewing my work!
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <Button label="Explore Artists" onClick={() => window.location.href = '/artists'} />
              <div className="text-sm">
                <p className="text-[#dee4e3]">Any time call</p>
                <p className="text-[#dee4e3] font-semibold text-lg">📞 +91-7814686228</p>
              </div>
            </div>
            <div className="flex gap-12 mt-20 flex-wrap">
              <HeroRatingsList />
            </div>
          </div>
          <div className='h-full w-[50%] flex items-center justify-center pt-18 relative'>
            <img
              src="./hero-img.png"
              alt="hero free hand"
              className='w-[80%]'
            />
            <SatisfactionCard />
          </div>
        </div>  
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