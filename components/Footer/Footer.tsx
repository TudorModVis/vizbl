'use client'

import Image from "next/image"
import FooterNav from "./FooterNav"
import Link from "next/link"
import { useState } from "react"
import { usePathname, useRouter } from 'next/navigation';
import { motion } from "framer-motion";

const Footer: React.FC = () => {

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

        <div className='flex flex-col justify-between select-none sm:h-[80vh] h-[85vh] w-full bg-body-bg fixed z-[-1] bottom-0 lg:px-[10.5rem] xxl:px-[14.5rem] 2k:px-[9.5rem] mmd:px-[10rem] px-[1rem]'>
            <div className="w-full h-[30%] flex justify-center">
                <div className="w-full vizbl-logo-footer mmd:pt-[6.5rem] flex justify-center items-center">
                    <img
                        draggable={false} 
                        src="/gifs/footer_logo.gif"
                        alt="footer_logo"
                        className="w-full object-contain"/>
                </div>
            </div>

                <div className="flex flex-col justify-between">
                    <div className="mmd:mt-[3.5rem] mt-[2rem] flex ss:flex-row flex-col justify-between gap-[2rem]">
                        <div>
                            <img 
                                draggable={false}
                                src="/icons/logo.svg"
                                alt="logo"
                                className="w-[8rem] h-[1.5rem]"/>

                            <div className="text-custom-white sm:text-[1.5rem] text-[1rem] uppercase font-[500] mt-[1rem]">
                                <h3>JOIN OUR COMMUNITY RIGHT NOW AND</h3>
                                <div className="flex items-center gap-[1rem]">
                                    <h3>TAKE PART IN OUR HISTORY</h3>
                                    <div className="bg-custom-white h-[1px] w-[7.5rem]"/>
                                </div>
                            </div>
                        </div>

                        <div className="flex ss:flex-row flex-col ss:gap-[3rem] items-start ss:justify-center">

                            <div className="flex max-ss:w-full justify-between gap-[3rem]">
                                <div>
                                    <h4 className="text-gray-border font-[600] text-[1rem] uppercase">Features</h4>
                                    <div className="mt-[1.5rem] flex flex-col gap-[16px] text-custom-white">
                                        <FooterNav />
                                        <div 
                                            className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer"
                                            onClick={() => { 
                                                if(pathname !== '/plans-and-pricing') {
                                                    setClickedRoute({
                                                        isClicked: true,
                                                        route: '/plans-and-pricing'
                                                    })
                                                    document.body.style.overflow = 'hidden';
                                                } 
                                            }}
                                        >Plans & Pricing</div>

                                        <Link className="hidden opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer" href="/">Log in</Link>
                                    </div>
                                </div>

                                <div className="">
                                    <h4 className="text-gray-border font-[600] text-[1rem] uppercase">Company</h4>
                                    <div className="mt-[1.5rem] flex flex-col gap-[16px] text-custom-white">
                                        <a className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer" target="_blank" href="https://studiomodvis.com/EN/home">About Us</a>
                                        <a className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer" target="_blank" href="https://studiomodvis.com/EN/portfolio">Portfolio</a>
                                        <a className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer" target="_blank" href="https://studiomodvis.com/EN/services">Services</a>
                                        <a className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer" target="_blank" href="https://studiomodvis.com/EN/contacts">Contacts</a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-gray-border font-[600] text-[1rem] uppercase">Stay in touch</h4>
                                <div className="mt-[1.5rem] grid grid-cols-3 grid-rows-2 gap-[16px] text-custom-white">
                                    <a className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer" target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=help@myvizbl.com">
                                        <div className="group transition-colors duration-[0.5s] hover:bg-body-bg p-[0.1875rem] rounded-[0.3125rem] w-[2rem] h-[2rem] flex justify-center items-center bg-custom-white">
                                            <Image 
                                                draggable={false}
                                                src="/icons/footer-icons/mail.svg"
                                                alt="mail"
                                                width={100}
                                                height={100}
                                                className="w-full h-full duration-[0.5s] group-hover:invert-[100%]"
                                            />
                                        </div>
                                    </a>

                                    <a className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer" target="_blank" href="https://www.instagram.com/myvizbl">
                                        <div className="group transition-colors duration-[0.5s] hover:bg-body-bg p-[0.1875rem] rounded-[0.3125rem] w-[2rem] h-[2rem] flex justify-center items-center bg-custom-white">
                                            <Image
                                                draggable={false}
                                                src="/icons/footer-icons/instagram.svg"
                                                alt="mail"
                                                width={100}
                                                height={100}
                                                className="w-full h-full duration-[0.5s] group-hover:invert-[100%]"
                                            />
                                        </div>
                                    </a>

                                    <a className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer" target="_blank" href="https://twitter.com/myvizbl">
                                        <div className="group transition-colors duration-[0.5s] hover:bg-body-bg p-[0.1875rem] rounded-[0.3125rem] w-[2rem] h-[2rem] flex justify-center items-center bg-custom-white">
                                            <Image 
                                                draggable={false}
                                                src="/icons/footer-icons/x.svg"
                                                alt="mail"
                                                width={100}
                                                height={100}
                                                className="w-full h-full duration-[0.5s] group-hover:invert-[100%]"
                                            />
                                        </div>
                                    </a>

                                    <a className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer" target="_blank" href="https://discord.gg/eKAjhV2CwW">
                                        <div className="group transition-colors duration-[0.5s] hover:bg-body-bg p-[0.1875rem] rounded-[0.3125rem] w-[2rem] h-[2rem] flex justify-center items-center bg-custom-white">
                                            <Image 
                                                draggable={false}
                                                src="/icons/footer-icons/discord.svg"
                                                alt="mail"
                                                width={100}
                                                height={100}
                                                className="w-full h-full duration-[0.5s] group-hover:invert-[100%]"
                                            />
                                        </div>
                                    </a>

                                    <a className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer" target="_blank" href="https://www.tiktok.com/@myvizbl">
                                        <div className="group transition-colors duration-[0.5s] hover:bg-body-bg p-[0.1875rem] rounded-[0.3125rem] w-[2rem] h-[2rem] flex justify-center items-center bg-custom-white">
                                            <Image 
                                                draggable={false}
                                                src="/icons/footer-icons/tiktok.svg"
                                                alt="mail"
                                                width={100}
                                                height={100}
                                                className="w-full h-full duration-[0.5s] group-hover:invert-[100%]"
                                            />
                                        </div>
                                    </a>

                                    <a className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer" target="_blank" href="#">
                                        <div className="group transition-colors duration-[0.5s] hover:bg-body-bg p-[0.1875rem] rounded-[0.3125rem] w-[2rem] h-[2rem] flex justify-center items-center bg-custom-white">
                                            <Image 
                                                draggable={false}
                                                src="/icons/footer-icons/producthunt.svg"
                                                alt="mail"
                                                width={100}
                                                height={100}
                                                className="w-full h-full duration-[0.5s] group-hover:invert-[100%]"
                                            />
                                        </div>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" flex pb-[2.25rem] justify-between text-gray-border font-[500] sm:text-[1rem] text-[0.8rem] mt-[3.5rem]">
                        <p>All rights reserved © <br className="ss:hidden"/>Studio ModVis, 2024</p>
                        <p className="text-right">Terms of Services <br className="ss:hidden"/>| Privacy Policy</p>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Footer