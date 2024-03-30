'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence, animate } from 'framer-motion';
import { useLenis } from '@studio-freight/react-lenis'

interface NavButtonProps {
  id: number;
  text: string;
  divEl: React.RefObject<HTMLDivElement>;
}

const NavButton: React.FC<NavButtonProps> = ({ text, divEl, id }) => {

  const lenis = useLenis(() => {

  })
  
  const [isHovered, setIsHovered] = useState(false)

  const { scrollYProgress } = useScroll({
    target: divEl,
    offset: ['0%', `${id === 2 ? '60%' : '100%'}`],
    layoutEffect: false,
  })

  const [hookedYPostion, setHookedYPosition] = useState(scrollYProgress.get());
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest);
  })

  return (
    <div className={`select-none relative h-[3rem] overflow-hidden rounded-[1rem] cursor-pointer border border-gray-border`}
      style={{
        backdropFilter: 'blur(12.5px)',
        WebkitBackdropFilter: 'blur(12.5px)'
      }}
      onClick={() => lenis?.scrollTo(divEl.current!, {
        duration: 2,
        easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClickCapture={() => {
        setIsHovered(false)
      }}
      >

      <div className='absolute z-[-3] bg-body-bg opacity-50 w-full h-full top-0'/>

      <motion.div className={`bg-custom-white absolute z-[-1] w-full h-full rounded-[1rem]`}
        style={{
          translateX: `${hookedYPostion * 100 - 100}%`,
        }}
        >
        </motion.div>

        <AnimatePresence>
        {
          isHovered && (
            <motion.div 
            className='bg-custom-white absolute w-full h-full rounded-[1rem] z-[-1]'
            initial={{
              translateX: `${-100}%`
            }}
            animate={{
              translateX: '0%'
            }}
            exit={{
              translateX: `${-100}%`,
            }}
            transition={{
              type: 'linear',
              duration: 0.7,
            }}/>
            )
          }
          </AnimatePresence>



      <motion.p
        className='nav-button-text mix-blend-difference text-[1rem] text-transparent uppercase font-black px-[1.5rem] flex justify-center items-center w-full h-full'
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1) ${Math.floor(hookedYPostion * 100)}%, rgba(160, 160, 160, 1) 0%)`,
        }}
      >
        {text}
      </motion.p>


    </div>
  )
}

export default NavButton