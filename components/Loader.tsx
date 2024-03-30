'use client'

import { useEffect, useState } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion"
import { useLenis } from '@studio-freight/react-lenis'

const Loader:React.FC = () => {

    const lenis = useLenis(() => {})

    const count = useMotionValue(0)
    const rounded = useTransform(count, latest => Math.round(latest))

    useEffect(() => {
      const controls = animate(
        count,
        [0, 25, 100],
        {
          type: 'spring',
          stiffness: 200,
          damping: 20,
          duration: 2,
          onComplete: () => {
            setTimeout(() => {
              setIsLoading(false);
              setTimeout(() => {
                lenis?.start();
                document.body.style.overflow = 'visible';
              }, 500)
            }, 200)
          }
        })
    
      return controls.stop
    }, [])
    

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (typeof window !== 'undefined') {
          setIsLoading(true);
          lenis?.stop();
        }
      }, [lenis]);


      const overlayVariants = {
        fillToTop: {
            background: [
                        'linear-gradient(to top, #050505 0%, #F1F1F1 0%)',
                        'linear-gradient(to top, #050505 25%, #F1F1F1 0%)',
                        'linear-gradient(to top, #050505 100%, #F1F1F1 0%)'
            ]
        }
      }

  return (
    <AnimatePresence>
        {
            isLoading && (
                <div>
                    <motion.div
                        className="fixed top-0 z-[2000] w-full h-[100vh] flex items-end"
                        variants={overlayVariants}
                        animate="fillToTop"
                        transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 20,
                            duration: 2,
                        }}
                        exit={{
                            translateY: '-110%',
                            transition: {
                              duration: 0.7
                            }
                        }}
                        
                        >
                        <motion.h1 className="font-bold sm:text-[9.5rem] text-[6rem] text-custom-white mix-blend-difference ml-[6.25rem] mb-[6.25rem]">
                          {rounded}
                        </motion.h1>
                        <h1 className="font-bold sm:text-[9.5rem] text-[6rem] text-custom-white mix-blend-difference mb-[6.25rem]">
                          %
                        </h1>
                        
                    </motion.div>
    
                    <motion.div 
                        className="fixed top-0 z-[1999] bg-custom-white w-full h-[100vh]"
                        exit={{
                            translateY: '-110%',
                            transition: {
                              duration: 0.6,
                            }
                        }}
                    />
                </div>
            )
        }
    </AnimatePresence>
  )
}

export default Loader