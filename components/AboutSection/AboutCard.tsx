'use client'

import { ReactNode, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

interface CardProps {
    children: ReactNode;
    height: number;
    needsCover: boolean;
  }

  const AboutCard: React.FC<CardProps> = ({ children, height, needsCover }) => {
    
    const circleX = useMotionValue(50);
    const circleY = useMotionValue(50);

    const circleXspring = useSpring(circleX, { damping: 30, stiffness: 100, mass: 1 });
    const circleYspring = useSpring(circleY, { damping: 30, stiffness: 100, mass: 1 });
    
    
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
        circleX.set(mouseX);
        circleY.set(mouseY);

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


        <div className={`absolute blur-about-card flex justify-center items-center top-0 bottom-0 left-0 right-0 h-[100%] w-[100%] z-[2]`}>
          {children}
        </div>

              <motion.div 
                className='absolute inset-0 w-full aspect-square opacity-0 transition-opacity duration-[0.7s] group-hover:opacity-[1]'
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
                <svg className='w-full h-full scale-[1.5]' width="1036" height="1036" viewBox="0 0 1036 1036" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_f_92_113)">
                    <circle cx="518" cy="518" r="175" fill="url(#paint0_linear_92_113)" fill-opacity="0.5"/>
                  </g>
                  <defs>
                  <filter id="filter0_f_92_113" x="0.0364685" y="0.0364685" width="1035.93" height="1035.93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="171.482" result="effect1_foregroundBlur_92_113"/>
                  </filter>
                  <linearGradient id="paint0_linear_92_113" x1="307.5" y1="343" x2="684.189" y2="406.147" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FDA2FF"/>
                    <stop offset="0.505208" stop-color="#782AD5"/>
                    <stop offset="1" stop-color="#52B8FF"/>
                  </linearGradient>
                  </defs>
                </svg>
              </motion.div>
  
      </div>
    );
  };
  
  export default AboutCard;