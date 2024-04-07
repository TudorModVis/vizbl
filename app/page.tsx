'use client'

import { NavBar, HeroSection, About, HowItWorks, Contacts, Footer, ScrollToTop } from '@/components'
import { NextPage } from 'next'
import { SectionProvider } from '@/components/SectionContext'

import { useLenis } from '@studio-freight/react-lenis'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

const HomePage:NextPage = () => {

  const lenis = useLenis(() => {})
  useEffect(() => {
    setTimeout(() => {
      const hash = window.location.hash;
      if(hash === '#about' || hash === '#how-it-works' || hash === '#contacts'){
        lenis?.scrollTo(hash, {
          duration: 2,
          easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
        })
      }
      console.log(hash)
    }, 2500)

  })

  return (
      <SectionProvider>
        <div  className='relative'>

          <div className='bg-body-bg'>
            <NavBar />
            <div className='overflow-hidden  lg:px-[10.5rem] xxl:px-[14.5rem] 2k:px-[9.5rem] md:px-[10rem] px-[1rem]'>
              <HeroSection />
              <About />
              <HowItWorks />
            </div>
              <Contacts />
          </div>
              <Footer />
              <ScrollToTop />
        </div>
      </SectionProvider>
  )
}

export default HomePage