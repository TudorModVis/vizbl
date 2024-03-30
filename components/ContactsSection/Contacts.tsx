'use client'

import { useSectionRefs } from '../SectionContext'
import Gradient from "./Gradient";
import CTA from "./CTA";

const Contacts: React.FC = () => {
  const { contactsRef } = useSectionRefs();

  return (
    <div className="w-full" ref={contactsRef}>
        <div className='w-full h-[25rem] sm:mt-[14rem] mt-[6rem] lg:px-[10.5rem] xxl:px-[14.5rem] 2k:px-[9.5rem] smm:px-[10rem] px-[1rem]'>
            <CTA />
        </div>
      <Gradient />
    </div>
  )
}

export default Contacts