import { useRef, useState, useEffect } from 'react'
import { motion, useSpring } from 'framer-motion';

interface NumberProps {
    number: number;
    decimal: number;
    shouldAnimate: boolean;
}

const RollNumbers: React.FC<NumberProps> = ({ number, decimal, shouldAnimate }) => {

    //calculating height
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
      }, [heightRef]);

    //animation configuration
    const baseVariants = {
        rollUpBase: {
          y: [height * -number, 0, height * -number],
          transition: {
            type: 'spring',
            stiffness: 250,
            damping: 25,
            duration: 1.5,
            delay: 0.5
          }
        }
      }

      const onLeaveBaseVariants = {
        rollUpBase: {
          y: height * -number
        }
      }

      const decimalVariants = {
        rollUpDecimal: {
          y: [height * -decimal - 10 * height, 0, height * -decimal - 10 * height],
          transition: {
            type: 'spring',
            stiffness: 250,
            damping: 25,
            duration: 2,
            delay: 0.5
          }
        }
      }

      const onLeaveDecimalVariants = {
        rollUpDecimal: {
          y: height * -decimal - 10 * height,
        }
      }

      return (
        <div className='select-none overflow-hidden w-[8.25vw] origin-left flex items-center text-[5.5vw] mmd:scale-[1] sm:scale-[1.5] ss:scale-[2] scale-[2.75] text-custom-white font-bold'>
            <motion.div 
                className='w-[3.25vw] aspect-[1/2] select-none flex items-center relative' ref={heightRef}
                variants={shouldAnimate ? baseVariants : onLeaveBaseVariants}
                animate="rollUpBase"
                transition = {{
                    type: 'spring',
                    stiffness: 250,
                    damping: 25,
                    duration: 1.5
                }}
                >
                {
                    [0, 1, 2 , 3, 4, 5].map((i) => (
                        <Number height={height} offset={i} number={i} key={i}/>
                    ))
                }
            </motion.div>
            <div>.</div>
    
            <motion.div 
                className='w-[3.25vw] aspect-[1/2] select-none flex items-center relative'
                variants={shouldAnimate ? decimalVariants : onLeaveDecimalVariants}
                animate="rollUpDecimal"
                transition = {{
                    type: 'spring',
                    stiffness: 250,
                    damping: 25,
                    duration: 2
                }}
                >
                {
                    [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, 0, 1, 2 , 3, 4, 5, 6, 7, 8, 9].map((i, index) => (
                        <Number height={height} offset={index} number={i} key={index}/>
                    ))
                }
            </motion.div>
        </div>
      )
    }

    export default RollNumbers


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