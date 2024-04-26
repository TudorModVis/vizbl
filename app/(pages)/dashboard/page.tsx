'use client'

import 'react-image-crop/dist/ReactCrop.css'

import { NextPage } from 'next'
import React from 'react'
import { Footer, ScrollToTop } from "@/components"
import Gradient from "@/components/ContactsSection/Gradient"
import PrivPolNavBar from "@/components/PrivacyAndPolicyComponents/PrivPolNavBar"
import { SectionProvider } from "@/components/SectionContext"
import { AccountSection, FeedbackSection, FrozenModeSection, NameSection, PasswordSection, SubscriptionSection } from '@/components'

const DashBoardPage:NextPage = () => {
  return (
    <div>
      <SectionProvider>
        <div className="bg-body-bg">
          <PrivPolNavBar />

          <div className='justify-center flex flex-col items-center mt-[1.5rem]'>
            <div className='ss:w-[39.5rem] w-full max-ss:px-[1rem] text-justify font-[300]'>
              <NameSection />
              <FrozenModeSection />
              {/* <SubscriptionSection /> */}
              <PasswordSection />
              <FeedbackSection />
              <AccountSection />
            </div>
          </div>

          <Gradient />
          <Footer />
          <ScrollToTop />
        </div>
      </SectionProvider>
    </div>
  )
}

export default DashBoardPage