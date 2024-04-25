import React from 'react'
import BuyACoffeeSVG from './BuyACoffeeSVG'
import SocialIcon from './SocialIcon'

const FeedbackSection:React.FC = () => {
  return (
    <div className='w-full p-[1.5rem] boder-gray-border border rounded-[0.5rem] bg-card-bg flex gap-[1.5rem] mt-[1.5rem]'>
      <div>
        <h3 className='uppercase text-[1.125rem] font-bold text-gray-border'>Support & FEEDBACK</h3>
        <p className='font-[500] text-[1rem] text-gray-border mt-[0.5rem]'>We would highly appreciate any feedback regarding the extensions. This helps us improve your experience.</p>
        <BuyACoffeeSVG />
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