'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const Created = () => {
  return (
    <div className="select-none relative w-full h-full">
        <div className="sm:m-[2rem] m-[1rem]">
            <h2 className="xs:text-[2rem] text-[1.3rem] font-[500] text-custom-white leading-[120%]">
                CREATED W/ LOVE <br />
                FROM
                <motion.span 
                    className="font-[750] w-full text-transparent bright-gradient-background nav-button-text"
                    initial={{
                        backgroundPosition: 0
                    }}
                    animate={{
                        backgroundPosition: '100%'
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'reverse'
                    }}
                    >
                        &nbsp;MOLDOVA
                </motion.span>
            </h2>
            <p className="sm:mt-[1rem] mt-[0.4rem] text-gray-border sm:text-[1rem] text-[0.95rem]">
                Powered by Studio Modvis
            </p>
        </div>

        <div className="absolute right-0 top-0 h-full">
            <Image 
                width={500}
                height={500}
                src='/icons/moldova.svg'
                alt="moldova"
                style={{
                    width: '100%',
                    height: '100%'
                }}/>
        </div>
    </div>
  )
}

export default Created