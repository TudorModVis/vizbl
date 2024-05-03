'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

interface NavButtonProps {
  text: string;
  route: string;
  active: boolean;
}

const NavButtonRight: React.FC<NavButtonProps> = ({ text, route, active }) => {

  const router = useRouter()
  const pathname = usePathname()

  const [isEntered, setIsEntered] = useState(false)

  return (
      <Link
        prefetch
        href={route}
        className={`select-none h-[3rem] rounded-[1rem] cursor-pointer relative overflow-hidden border border-gray-border`}
        onMouseEnter={() => setIsEntered(true)}
        onMouseLeave={() => setIsEntered(false)}
        style={{
          backdropFilter: 'blur(12.5px)',
          WebkitBackdropFilter: 'blur(12.5px)',
        }}
      >
        <div className='absolute z-[-3] bg-body-bg opacity-50 w-full h-full top-0'/>

        {
          !active && (
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
          )
        }

        {
          active && (
            <div className='absolute z-[-1] bg-custom-white w-full h-full top-0'/>
          )
        }

          <p 
            className={`text-[1rem] ${active ? 'text-body-bg' : ' mix-blend-difference text-transparent bg-gray-border '} uppercase z-[6] font-black nav-button-text px-[1.5rem] flex justify-center items-center w-full h-full`}
          >{text}</p>
      </Link>
  )
}

export default NavButtonRight