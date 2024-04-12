'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { useRouter, usePathname } from "next/navigation"
import { useState } from "react"

const NotFound = () => {

    const router = useRouter()
    const pathname = usePathname()

    const [clickedRoute, setClickedRoute] = useState({
        isClicked: false,
        route: pathname
      })

  return (
    <>
        {/* Overlay on page transition */}
        {
            clickedRoute.isClicked && (
            <motion.div
                className='bg-custom-white w-full h-[100vh] fixed top-0 left-0 z-[2000]'
                initial={{
                translateY: '-100%'
                }}
                animate={{
                translateY: '0%'
                }}
                transition={{
                type: 'tween',
                duration: 0.75
                }}
                onAnimationComplete={() => { 
                router.push(clickedRoute.route)
                }}
            />
            )
        }
        {/* Overlay on page transition */}

        <div className='px-[1rem] h-screen w-screen relative grid place-content-center'
            style={{
                background: 'url(/images/bg.png)',
                backgroundPosition: 'center'
            }}
        >
            <Image 
                src="/images/logo.png"
                alt="logo"
                width={163}
                height={32}
                className="h-[2rem] w-[10rem] smm:scale-[1] scale-[0.75] absolute smm:left-[4.5rem] left-[1rem] top-[3.25rem]"
            />

            <div className="select-none flex flex-col items-center">
                <div className="flex items-center gap-[1.5rem] smm:text-[16rem] xs:text-[13rem] text-[10rem] leading-[110%] text-custom-white font-[600]">
                    <h1>4</h1>
                    <div className="smm:w-[13rem] xs:w-[10rem] w-[8.5rem] aspect-square flex justify-center items-center overflow-hidden">
                        <Image
                            src="/gifs/stop.gif"
                            alt="stop"
                            draggable={false}
                            width={500}
                            height={500}
                            className="w-full aspect-square"
                        />
                    </div>
                    <h1>4</h1>
                </div>

                <h2 className="uppercase text-custom-white smm:text-[4rem] xs:text-[3.5rem] text-[2.75rem] leading-[110%] font-bold">Page not found</h2>
                <p className="mt-[1rem] text-gray-border smm:text-[1.125rem] text-[1rem] font-[500] text-center">Oops! Looks like you got lost... <br />We don't seem to find the page you are looking for.</p>

                <div className="w-full flex justify-center">
                    <motion.div 
                        className="uppercase mt-[3rem] w-fit h-[3rem] px-[1.5rem] grid place-content-center text-custom-white text-[1rem] rounded-[1rem] border border-gray-border cursor-pointer"
                        initial={{
                            background: 'linear-gradient(93deg, rgba(253,162,255,1) -64.38%, rgba(120,42,213,1) 48.4%, rgba(82,184,255,1) 158.85%), rgba(0,0,0,0)'
                        }}
                        whileHover={{
                            background: 'linear-gradient(93deg, rgba(5,5,5,1) -64.38%, rgba(5,5,5,1) 48.4%, rgba(5,5,5,1) 158.85%), rgba(0,0,0,0)'
                        }}
                        transition={{
                            duration: 0.4
                        }}
                        onClick={() => {
                            setClickedRoute({
                                isClicked: true,
                                route: '/',
                            })
                        }}
                    >
                        BACK TO HOME
                    </motion.div>
                </div>
            </div>
        </div>
    </>
  )
}

export default NotFound