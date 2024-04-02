'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface NavButtonProps {
  text: string;
  route: string;
}

const NavButtonRight: React.FC<NavButtonProps> = ({ text, route }) => {
  const [isClicked, setIsClicked] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  const [isEntered, setIsEntered] = useState(false)

  return (
    <div>
      {/* Overlay on page transition */}
      {
        isClicked && (
          <motion.div
            className='bg-custom-white w-full h-[100vh] fixed top-0 left-0 z-[2000]'
            initial={{
              translateY: '-100%'
            }}
            animate={{
              translateY: '0%'
            }}
            transition={{
              type: 'tween',
              duration: 0.75
            }}
            onAnimationComplete={() => { 
              router.push(route)
            }}
          />
        )
      }
      {/* Overlay on page transition */}

      <div
        className={`select-none h-[3rem] rounded-[1rem] cursor-pointer relative overflow-hidden border border-gray-border`}
        onMouseEnter={() => setIsEntered(true)}
        onMouseLeave={() => setIsEntered(false)}
        style={{
          backdropFilter: 'blur(12.5px)',
          WebkitBackdropFilter: 'blur(12.5px)',
        }}
        onClick={() => { if(pathname !== route) {setIsClicked(true); document.body.style.overflow = 'hidden';} }}
      >
        <div className='absolute z-[-3] bg-body-bg opacity-50 w-full h-full top-0'/>


        <motion.div
          className='absolute bg-custom-white top-0 left-[-100%] z-[-1] w-full h-full rounded-[1rem]'
          initial={{
            translateX: '0%'
          }}
          animate={{
            translateX: isEntered ? '100%' : '0%'
          }}
          transition={{
            type: 'linear',
            duration: 0.7,
          }}
        />

          <p 
            className='text-[1rem] mix-blend-difference text-transparent bg-gray-border uppercase z-[6] font-black nav-button-text px-[1.5rem] flex justify-center items-center w-full h-full'
          >{text}</p>
      </div>
    </div>
  )
}

export default NavButtonRight