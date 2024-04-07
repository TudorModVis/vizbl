'use client'


import { Footer, ScrollToTop } from "@/components"
import Gradient from "@/components/ContactsSection/Gradient"
import Content from "@/components/PrivacyAndPolicyComponents/Content"
import PrivPolNavBar from "@/components/PrivacyAndPolicyComponents/PrivPolNavBar"
import { SectionProvider } from "@/components/SectionContext"

const page = () => {
  return (
    <div>
      <SectionProvider>
        <div className="bg-body-bg">
          <PrivPolNavBar />
          <Content />
          <Gradient />
          <Footer />
          <ScrollToTop />
        </div>
      </SectionProvider>
    </div>
  )
}

export default page