'use client'

import React from 'react'
import BuyACoffeeSVG from './BuyACoffeeSVG'
import SocialIcon from './SocialIcon'
import { motion } from 'framer-motion'

const FeedbackSection:React.FC = () => {
  return (
    <div className='w-full p-[1.5rem] boder-gray-border border rounded-[0.5rem] bg-card-bg flex gap-[1.5rem] mt-[1.5rem]'>
      <div>
        <h3 className='uppercase text-[1.125rem] font-bold text-gray-border'>Support & FEEDBACK</h3>
        <p className='font-[500] text-[1rem] text-gray-border mt-[0.5rem]'>We would highly appreciate any feedback regarding the extensions. This helps us improve your experience.</p>
        <div className='flex gap-[0.75rem] items-center  mt-[1.5rem]'>
          <BuyACoffeeSVG />
          <a href="https://ixmaip801q1.typeform.com/to/SrCrm4IX" target='_blank'>
            <motion.button
              initial={{
                  background: 'linear-gradient(93deg, rgba(253,162,255,1) -64.38%, rgba(120,42,213,1) 48.4%, rgba(82,184,255,1) 158.85%), rgba(0,0,0,0)'
              }}
              whileHover={{
                  background: 'linear-gradient(93deg, rgba(30,30,30,1) -64.38%, rgba(30,30,30,1) 48.4%, rgba(30,30,30,1) 158.85%), rgba(0,0,0,0)'
              }}
              transition={{
                  duration: 0.4
              }}
              className="xl:h-[2rem] h-[2.5rem] font-[500] xl:text-[0.75rem] text-[0.875rem] px-[1rem] border border-gray-border grid place-content-center rounded-[0.25rem]" type="submit"
          >
              Give us feedback
          </motion.button>
          </a>
        </div>
        <div className='flex gap-[1.5rem] mt-[1rem]'>
          <SocialIcon src='/icons/footer-icons/mail.svg' link='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=help@myvizbl.com'/>
          <SocialIcon src='/icons/footer-icons/instagram.svg' link='https://www.instagram.com/myvizbl'/>
          <SocialIcon src='/icons/footer-icons/x.svg' link='https://twitter.com/myvizbl'/>
          <SocialIcon src='/icons/footer-icons/discord.svg' link='https://discord.gg/eKAjhV2CwW'/>
          <SocialIcon src='/icons/footer-icons/tiktok.svg' link='https://www.tiktok.com/@myvizbl'/>
          <SocialIcon src='/icons/footer-icons/producthunt.svg' link='#'/>
        </div>
      </div>
    </div>
  )
}

export default FeedbackSection