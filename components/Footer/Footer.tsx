'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { useSectionRefs } from '../SectionContext'
import { useLenis } from '@studio-freight/react-lenis'

const Footer: React.FC = () => {

    const [scrollbarWidth, setScrollbarWidth] = useState(0) 
    const lenis = useLenis(() => {})
    const { aboutRef, howItWorksRef, contactsRef } = useSectionRefs();

    useEffect(() => {
        setScrollbarWidth(window.innerWidth - document.body.clientWidth)
    })

    const router = useRouter()
    const pathname = usePathname()

  return (
    <>
        <div 
            className='flex flex-col justify-between select-none sm:h-[80vh] h-[85vh] bg-body-bg fixed z-[-1] bottom-0 lg:px-[10.5rem] xxl:px-[14.5rem] 2k:px-[9.5rem] mmd:px-[10rem] px-[1rem]'
            style={{
                width: `calc(100vw - ${scrollbarWidth}px)`
            }}
        >
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
                                        {/* footer nav */}
                                        <p 
                                            className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer"
                                            onClick={() => {
                                                if(pathname === '/'){
                                                    aboutRef.current && lenis?.scrollTo(aboutRef.current, {
                                                    duration: 2,
                                                    easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                                                    })
                                                } else {
                                                    router.push('/?loaded=true#about')
                                                } 
                                            }}
                                            >About</p>

                                        <p 
                                            className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer"
                                            onClick={() => {
                                                if(pathname === '/'){
                                                    howItWorksRef.current && lenis?.scrollTo(howItWorksRef.current, {
                                                    duration: 2,
                                                    easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                                                    })
                                                } else {
                                                    router.push('/?loaded=true#how-it-works')
                                                } 
                                            }}
                                            >How it works</p>

                                        <p 
                                            className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer"
                                            onClick={() => {
                                                if(pathname === '/'){
                                                    contactsRef.current && lenis?.scrollTo(contactsRef.current, {
                                                    duration: 2,
                                                    easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                                                    })
                                                } else {
                                                    router.push('/?loaded=true#contacts')
                                                } 
                                            }}
                                            >Contacts</p>
                                        {/* footer nav */}
                                        <Link href='/plans-and-pricing' className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer hidden">Plans & Pricing</Link>

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
                        <p className="text-right">
                            Terms of Services 
                            <br className="ss:hidden"/>&nbsp;|&nbsp;
                            <Link 
                                className="cursor-pointer"
                                href="/privacy-and-policy"
                            >Privacy Policy</Link>
                        </p>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Footer