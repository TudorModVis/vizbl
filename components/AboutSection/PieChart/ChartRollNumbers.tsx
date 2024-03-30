'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ChartRollNumbers = ({ isHovered } : { isHovered : boolean }) => {

    const number = 9
    const unit = 5

    const heightRef = useRef<HTMLDivElement | null>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        const updateHeight = () => {
          if (heightRef.current) {
            setHeight(heightRef.current.clientHeight);
          }
        };

        updateHeight();
    
        window.addEventListener('resize', updateHeight);
    
        return () => {
          window.removeEventListener('resize', updateHeight);
        };
      }, []);

    //animation configuration
    const numberVariants = {
        rollUpBase: {
          y: [height * -number, 0, height * -number],
          transition: {
            type: 'spring',
            stiffness: 250,
            damping: 25,
            duration: 2,
            delay: 0.5
          }
        }
      }

      const onLeaveNumberVariants = {
        rollUpBase: {
          y: height * -number
        }
      }

      const unitVariants = {
        rollUpDecimal: {
          y: [height * -unit - 10 * height, 0, height * -unit - 10 * height],
          transition: {
            type: 'spring',
            stiffness: 250,
            damping: 25,
            duration: 2.5,
            delay: 0.5
          }
        }
      }

      const onLeaveUnitVariants = {
        rollUpDecimal: {
          y: height * -unit - 10 * height,
        }
      }

  return (
    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
        <div className='origin-center mmd:scale-[1] smm:scale-[1.3] sm:scale-[1.5] scale-[2] overflow-hidden w-[4.95vw] aspect-[1/1] flex over items-center text-[2.7vw] text-custom-white font-[500]'>
            <motion.div 
                className='w-[3.25vw] aista aspect-[1/3] select-none flex items-center relative' ref={heightRef}
                variants={isHovered ? numberVariants : onLeaveNumberVariants}
                animate="rollUpBase"
                transition = {{
                    type: 'spring',
                    stiffness: 250,
                    damping: 25,
                    duration: 2
                }}
                >
                {
                    [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9].map((i) => (
                        <Number height={height} offset={i} number={i} key={i}/>
                    ))
                }
            </motion.div>

            <motion.div 
                className='w-[3.25vw] aspect-[1/3] select-none flex items-center relative' ref={heightRef}
                variants={isHovered ? unitVariants : onLeaveUnitVariants}
                animate="rollUpDecimal"
                transition = {{
                    type: 'spring',
                    stiffness: 250,
                    damping: 25,
                    duration: 2.5,
                }}
                >
                {
                    [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 0, 1, 2 , 3, 4, 5, 6, 7, 8, 9].map((i, index) => (
                        <Number height={height} offset={index} number={i} key={index}/>
                    ))
                }
            </motion.div>
            <div>%</div>
        </div>
    </div>
  )
}

export default ChartRollNumbers


const Number = ({ number, height, offset }: {number: number, height: number, offset: number}) => {
    return (
      <span
        className='absolute'
        style={{
            transform: `translateY(${offset * height}px)`
        }}>
        {number}
      </span>
    )
}