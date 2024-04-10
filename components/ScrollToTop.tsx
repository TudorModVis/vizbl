'use client'
import Image from "next/image"
import { motion } from 'framer-motion'
import { useState, useEffect } from "react"
import { useLenis } from '@studio-freight/react-lenis'

const ScrollToTop:React.FC = () => {

    const [scrollbarWidth, setScrollbarWidth] = useState(0) 

    useEffect(() => {
        setScrollbarWidth(window.innerWidth - document.body.clientWidth)
    })

    const lenis = useLenis(() => {})

    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const percentage = (scrollY / scrollHeight) * 100;
          setScrollProgress(percentage);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div 
        className="fixed bottom-0 flex justify-center z-[0] h-[0]"
        style={{
            width: `calc(100vw - ${scrollbarWidth}px)`
        }}
    >
        <motion.div 
            className="h-fit w-fit"
            initial={{
                translateY: '100%'
            }}
            animate={{
                translateY: scrollProgress > 90 ? '-150%' : '100%'
            }}
            transition={{
                type: 'spring',
                duration: 0.5
            }}
        >
            <div 
                className="group ss:w-[3rem] ss:h-[3rem] w-[2.5rem] h-[2.5rem] p-[0.5rem] ss:rounded-[1rem] rounded-[0.7rem] bg-custom-white hover:bg-body-bg transition-colors duration-[0.5s] border border-gray-border cursor-pointer"
                onClick={() => lenis?.scrollTo(0, {
                    duration: 2,
                    easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                })}    
            >
                <Image 
                    src="/images/arrow.png"
                    alt="arrow"
                    width={100}
                    height={100}
                    className="w-full h-full group-hover:invert-[100%] duration-[0.5s]"
                />
            </div>
        </motion.div>
    </div>
  )
}

export default ScrollToTop