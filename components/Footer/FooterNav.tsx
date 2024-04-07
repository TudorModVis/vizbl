'use client'

import { useSectionRefs } from '../SectionContext'
import { useLenis } from '@studio-freight/react-lenis'

const FooterNav = () => {

    const lenis = useLenis(() => {})

  const { aboutRef, howItWorksRef, contactsRef } = useSectionRefs();

  return (
    <>
          <p 
            className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer"
            onClick={() => aboutRef.current && lenis?.scrollTo(aboutRef.current, {
              duration: 2,
              easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
            })}>About</p>

          <p 
            className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer"
            onClick={() => howItWorksRef.current && lenis?.scrollTo(howItWorksRef.current, {
              duration: 2,
              easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
            })}>How it works</p>

          <p 
            className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer"
            onClick={() => contactsRef.current && lenis?.scrollTo(contactsRef.current, {
              duration: 2,
              easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
            })}>Contacts</p>
    </>
  )
}

export default FooterNav