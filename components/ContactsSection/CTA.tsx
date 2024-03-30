'use client'

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"
import Link from "next/link";

const CTA = () => {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
      });

      const [isEntered, setIsEntered] = useState(false)

      const ref = useRef<HTMLDivElement | null>(null);
  
    const handleMouseMove = (e: any) => {
      const rect = ref.current?.getBoundingClientRect();
  
      if (rect) {
        const parentX = rect.left;
        const parentY = rect.top;
  
        const mouseX = e.clientX - parentX;
        const mouseY = e.clientY - parentY;
  
        setMousePosition({
          x: mouseX,
          y: mouseY
        });
      }
    };

  return (
    <div
        className="overflow-hidden w-full h-full border border-gray-border bg-card-bg rounded-[1.5rem] relative"
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsEntered(true)}
        onMouseLeave={() => setIsEntered(false)}>

        <div
          className={`absolute p-[1rem] flex justify-center items-center h-[100%] w-[100%] z-[2] rounded-[1.5rem]`}
          style={{
            transform: 'translate3D(0, 0, 0)',
            WebkitTransform: 'translate3D(0, 0, 0)',
            backdropFilter: `blur(10rem)`,
            WebkitBackdropFilter: `blur(10rem)`
          }}
        >
            <div className="flex flex-col items-center">
                <div className="max-ss:hidden uppercase text-custom-white mmd:text-[4rem] text-[2.5rem] font-[600] leading-[110%]">
                    <h1>DON'T MISS OUT ON</h1>
                    <div className="flex gap-[2rem] items-center">
                        <div className="h-[2px] w-[10.5rem] bg-custom-white" />
                        <h1>SOMETHING SO COOL</h1>
                    </div>
                </div>

                {/* Title for mobile */}
                  <div className="ss:hidden uppercase text-custom-white mmd:text-[4rem] xxs:text-[2.5rem] text-[2rem] font-[600] leading-[110%]">
                      <h1>DON'T MISS OUT on</h1>
                      <h1>something</h1>
                      <div className="flex ss:gap-[2rem] gap-[1rem] items-center">
                          <h1>SO COOL</h1>
                          <div className="h-[2px] w-[10.5rem] bg-custom-white" />
                      </div>
                  </div>
                {/* Title for mobile */}

                <Link href='https://chromewebstore.google.com/detail/vizbl-get-to-know-your-fr/lcaeomijnkkglaabildphmdinpoodaho' target="blank" 
                  className="mt-[3rem] overflow-hidden rounded-[1rem] border border-gray-border mmd:text-[1.5rem] ss:text-[1.3rem] text-[1rem] text-custom-white uppercase">
                    <motion.div 
                        className="w-full h-full px-[2rem] py-[0.8rem] font-[500]"
                        style={{
                          background: 'linear-gradient(93deg, rgba(253, 162, 255, 1) -64.38%, rgba(120, 42, 213, 1) 48.4%, rgba(82, 184, 255, 1) 158.85%)',
                            backgroundPosition: 'center'
                        }}
                        whileHover={{
                          background: 'linear-gradient(93deg, rgba(253, 162, 255, 0) -64.38%, rgba(120, 42, 213, 0) 48.4%, rgba(82, 184, 255, 0) 158.85%)',
                        }}
                        initial={{
                          background: 'linear-gradient(93deg, rgba(253, 162, 255, 1) -64.38%, rgba(120, 42, 213, 1) 48.4%, rgba(82, 184, 255, 1) 158.85%)',
                        }}
                        transition={{ duration: 0.5}}>
                        Add to chrome - it's free
                    </motion.div>
                </Link>

                <p className="text-gray-border ss:text-[1rem] text-[0.7rem] mt-[0.75rem]">Try ViZBL for free. No credit card required.</p>
            </div>
            
        </div>
  
        <motion.div
          className='z-[1] absolute aspect-square mmd:h-[145%] ss:h-[120%] h-[100%] gradient-background rounded-full'
          initial={{
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            left: isEntered ? mousePosition.x : '50%',
            top: isEntered ? mousePosition.y : '50%',
          }}
          transition={{ type: 'tween', ease: 'backOut', duration: 3 }}
        />
        
    </div>
  )
}

export default CTA