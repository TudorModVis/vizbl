'use client'
import { useRef } from 'react'
import { NavBar, HeroSection, About, HowItWorks, Contacts, Footer, Loader, ScrollToTop } from '@/components'
import { NextPage } from 'next'
import { SectionProvider } from '@/components/SectionContext'

const HomePage:NextPage = () => {

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <SectionProvider>
      <div ref={scrollContainerRef} className='relative'>

      <Loader />

        <div className='bg-body-bg'>
          <NavBar />
          <div className='overflow-hidden lg:px-[10.5rem] xxl:px-[14.5rem] 2k:px-[9.5rem] md:px-[10rem] px-[1rem]'>
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