'use client'

import { NavBar, HeroSection, About, HowItWorks, Contacts, Footer, ScrollToTop } from '@/components'
import { NextPage } from 'next'
import { SectionProvider } from '@/components/SectionContext'

const HomePage:NextPage = () => {

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