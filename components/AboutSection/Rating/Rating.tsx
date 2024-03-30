'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import RatingStar from "./RatingStar"
import RollNumbers from "./RollNumbers"

const Rating = () => {

    const [isHovered, setIsHovered] = useState(false);

    //rating
        const rating = 5.0

        const base = Math.floor(rating)
        const decimal = rating - base
        const emptyStars = Math.floor(5 - rating)
    //rating

    const stars = []

    for(let i = 1; i <= 5; i++){
        if(i <= base){
            stars.push({
                shouldFill: true,
                percentage: 100,
                delay: i * 0.1,
                noAnimation: false
            })
        } else if(decimal !== 0 && i === base + 1){
            stars.push({
                shouldFill: true,
                percentage: Math.floor(decimal * 100),
                delay: i * 0.1,
                noAnimation: false
            })
        } else if(emptyStars !== 0){
            stars.push({
                shouldFill: true,
                percentage: 0,
                delay: i * 0.1,
                noAnimation: false
            })
        }
    }

    return (
        <div
          className='w-full h-full sm:p-[2rem] p-[1rem] flex justify-between items-center'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
        
        <RollNumbers number={base} decimal={Math.floor(decimal * 10)} shouldAnimate={isHovered}/>
    
          <div>
            <div className='flex justify-end gap-[1rem] items-center'>
              <div className='lg:w-[4.5rem] w-[1.75rem] h-[1px] bg-custom-white' />
              <p className='select-none uppercase ss:text-[2rem] xxs:text-[1.5rem] text-[1.25rem] font-[500] text-custom-white'>
                EXTENSION RATING
              </p>
            </div>
    
            <motion.div
              className="flex justify-end gap-[1rem] bg-clip-content"
            >
              {
                isHovered ? stars.map((star, index) => (
                    <RatingStar
                    key={index}
                    shouldFill={star.shouldFill}
                    percentage={star.percentage}
                    delay={star.delay}
                    noAnimation={star.noAnimation}
                    />
                )) : 
                    stars.map((star, index) => (
                      <RatingStar
                      key={index}
                      shouldFill={false}
                      percentage={star.percentage}
                      delay={0}
                      noAnimation={true}
                      />
                    ))
                }
            </motion.div>
          </div>
        </div>
      );
    };
    
    export default Rating;