'use client'

import { ReactNode, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: ReactNode;
    height: number;
    needsCover: boolean;
  }

  const AboutCard: React.FC<CardProps> = ({ children, height, needsCover }) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0
    });

    const [isVisible, setIsVisible] = useState(false)

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
        className={` group ${height === 11 ? ' small-rating-card ' : ' large-rating-card ' } overflow-hidden relative bg-card-bg border border-gray-border sm:rounded-[1.5rem] rounded-[0.75rem]`}
        ref={ref}
        style={{
          width: '100%',
          height: `${height}rem`
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => {
          setTimeout(() => {
            setIsVisible(true)
          }, 20)
        }}
        onMouseLeave={() => {
          setIsVisible(false)
        }}
      >

        {
          needsCover && (
            <div className='w-full z-20 h-full bg-transparent absolute'
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
              setTimeout(() => {
                setIsVisible(true)
              }, 20)
            }}
            onMouseLeave={() => {
              setIsVisible(false)
            }}/>
          )
        }


        <div
          className={`absolute blur-about-card flex justify-center items-center top-0 bottom-0 left-0 right-0 h-[100%] w-[100%] z-[2]`}
          style={{
            perspective: 1000,
            transform: 'translate3d(0,0,0) translateZ(0)',
            WebkitTransform: 'translate3d(0,0,0) translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            WebkitPerspective: '1000',
            backdropFilter: `blur(${height/3}rem)`,
            WebkitBackdropFilter: `blur(${height/3}rem)`
          }}
        >
          {children}
        </div>
  
        <motion.div
          className='absolute max-mmd:hidden opacity-0 transition-opacity duration-[0.7s] group-hover:opacity-[1] z-[1] aspect-square h-[95%] gradient-background rounded-full'
          style={{
            filter: `blur(${height/3}rem)`
          }}
          initial={{
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: 'tween', ease: 'backOut', duration: isVisible ? 2 : 0 }}
        >
          {/* <div className='absolute z-10 w-full h-full'
          style={{
            backdropFilter: `blur(${height/3}rem)`,
            WebkitBackdropFilter: `blur(${height/3}rem)`,
            transform: 'translate3D(0, 0, 0)',
            WebkitTransform: 'translate3D(0, 0, 0)',
          }}
          /> */}
        </motion.div>
  
      </div>
    );
  };
  
  export default AboutCard;