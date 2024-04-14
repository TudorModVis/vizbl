'use client'
import { motion } from 'framer-motion'
import { usePathname } from "next/navigation"
import { useEffect } from 'react'


export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    useEffect(() => {
        window.scrollTo(0, 0)
    })
    
    return (
        <motion.main
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                duration: 0.5
            }}
        >
            {children}
        </motion.main>
    )
} 