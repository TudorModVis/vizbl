'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface NavButtonProps {
    text: string;
    delay: number;
}

const HamburgerTransitionBtn:React.FC<NavButtonProps> = ({ text, delay }) => {

    const [isClicked, setIsClicked] = useState(false)

    const router = useRouter()
    const pathname = usePathname()

  return (
    <>
        <motion.p 
            className='cursor-pointer'
            initial={{
                translateY: '-20px'
            }}
            animate={{
                translateY: '0px'
            }}
            transition={{
                type: 'spring',
                stiffness: 250,
                duration: 0.5,
                delay: delay
            }}
        >
            { text }
        </motion.p>
    </>
  )
}

export default HamburgerTransitionBtn