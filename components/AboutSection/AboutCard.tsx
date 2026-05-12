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
                <img 
                  src="/images/hover_blob_about.png" 
                  alt="blob" 
                  width={350}
                  height={350}
                  className='w-full h-full scale-150 max-mmd:hidden'
                />
              </motion.div>
  
      </div>
    );
  };
  
  export default AboutCard;