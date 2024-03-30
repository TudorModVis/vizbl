'use client'

import { motion } from "framer-motion";

const DiskSvg = ( { isHovered, gradID } : { isHovered: boolean, gradID:string } ) => {

    const pieChartVariants = {
        fillChart : {
            pathLength: [0.95, 0, 0.95],
            transition: {
              type: 'spring',
              stiffness: 250,
              damping: 25,
              duration: 2.5,
              delay: 0.5
          }
        }
    }

    const onLeavePieChartVariants = {
      fillChart : {
          pathLength: 0.95
      }
  }

  return (
    <svg className="w-full aspect-square -rotate-90" viewBox="0 0 315 315" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
      <linearGradient id={gradID} x1="-97.9505" y1="-58.4364" x2="399.683" y2="-24.906" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDA2FF"/>
        <stop offset="0.505208" stopColor="#782AD5"/>
        <stop offset="1" stopColor="#52B8FF"/>
      </linearGradient>
      </defs>
      <circle cx={157.5} cy={157.5} r={122} stroke="#F1F1F1" strokeWidth={70} />
      
      <motion.circle
        transition = {{
          type: 'spring',
          stiffness: 250,
          damping: 25,
          duration: 2.5
      }}
        variants={isHovered ? pieChartVariants : onLeavePieChartVariants}
        animate="fillChart"
        cx={157.5}
        cy={157.5}
        r={122}
        strokeWidth={70}
        stroke={`url(#${gradID})`}
      />
  </svg>
  );
};

export default DiskSvg;