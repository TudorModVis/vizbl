'use client'

import { NextPage } from "next"
import { Footer, ScrollToTop, PPNavbar, Contacts, PlansSection, FAQ } from "@/components"
import { SectionProvider } from "@/components/SectionContext"

const PlansAndPricingPage:NextPage = () => {
  return (
    <SectionProvider>
      <div  className='relative'>
        <div className='bg-body-bg'>
          <PPNavbar />
          <div className='overflow-hidden  lg:px-[10.5rem] xxl:px-[14.5rem] 2k:px-[9.5rem] md:px-[10rem] px-[1rem]'>
            <PlansSection />
            <FAQ />
          </div>
            <Contacts />
        </div>
            <Footer />
            <ScrollToTop />
      </div>
    </SectionProvider>
  )
}

export default PlansAndPricingPage