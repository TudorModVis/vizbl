'use client'

import { useEffect } from 'react'
import { useSectionRefs } from '../SectionContext'

import { motion, AnimatePresence } from "framer-motion"
import { useLenis } from '@studio-freight/react-lenis'
import { useState } from "react"
import HamburgerTransitionBtn from './HamburgerTransitionBtn'
import { usePathname, useRouter } from 'next/navigation';

const HamburgerBtn = () => {
    
    const [scrollbarWidth, setScrollbarWidth] = useState(0) 

    useEffect(() => {
        setScrollbarWidth(window.innerWidth - document.body.clientWidth)
    })

    const router = useRouter()
    const pathname = usePathname()

  const lenis = useLenis(() => {})

  const [toggle, setToggle] = useState(false)
  const [clickedRoute, setClickedRoute] = useState({
    isClicked: false,
    route: pathname,
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if(toggle) lenis?.stop()
    else lenis?.start()

  const { aboutRef, howItWorksRef, contactsRef } = useSectionRefs();

  const [navLinks, setNavLinks] = useState([
    { text: 'About', divEl: aboutRef, id: '#about' },
    { text: 'How does it work', divEl: howItWorksRef, id: '#how-it-works' },
    { text: 'Contacts', divEl: contactsRef, id: '#contacts' },
  ]);

  useEffect(() => {
    if (aboutRef && howItWorksRef && contactsRef) {
      setNavLinks([
        { text: 'About', divEl: aboutRef, id: '#about' },
        { text: 'How does it work', divEl: howItWorksRef, id: '#how-it-works' },
        { text: 'Contacts', divEl: contactsRef, id: '#contacts' },
      ]);
    }
  }, [aboutRef, howItWorksRef, contactsRef]);

  return (
    <>
        <div className='flex'>
            {/* Star logo */}
            <div className='cursor-pointer transition-colors duration-[0.5s] w-[3rem] h-[3rem] rounded-[1rem] border border-gray-border md:hidden flex justify-center items-center' 
            style={{
                background: toggle ? '#111111' : '#f1f1f1'
            }}
            onClick={() => {
                lenis?.start()
                lenis?.scrollTo(0, {
                duration: 2,
                easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                })
                setToggle(false)
                }}
            >
                <img 
                src="/icons/star.svg" 
                draggable={false}
                alt="star" 
                className='w-[60%] h-[60%] duration-[0.5s]'
                style={{
                    filter: toggle ? 'invert(100%)' : 'invert(0%)'
                }}
                />
            </div>
            {/* Star logo */}

            {/* burger icon */}
            <div className='sm:hidden cursor-pointer w-[3rem] h-[3rem] rounded-[1rem] transition-colors duration-[0.5s] border border-gray-border flex justify-center items-center' 
            style={{
                background: toggle ? '#111111' : '#f1f1f1'
            }}    
            onClick={() => setToggle(prevToggle => !prevToggle)}
            >
                <div className='w-[60%] h-[60%] relative flex justify-center items-center'>
                    <motion.svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='none'>
                        <motion.path 
                            animate={{
                                stroke: toggle ? '#f1f1f1' : '#050505',
                                d: toggle ? "M3.97485 11.9749H19.9748" : "M3.97485 5.97485H19.9748"
                            }}
                            transition={{
                                type: 'tween',
                                duration: 0.5
                            }}
                            d="M3.97485 5.97485H19.9748"
                            stroke="#050505" 
                            strokeWidth="2.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />

                        <motion.path
                            animate={{
                                stroke: toggle ? '#f1f1f1' : '#050505'
                            }}
                            d="M3.97485 11.9749H19.9748"
                            stroke="#050505" 
                            strokeWidth="2.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />

                        <motion.path 
                            animate={{
                                stroke: toggle ? '#f1f1f1' : '#050505',
                                d: toggle ? "M3.97485 11.9749H19.9748" : "M3.97485 17.9749H19.9748"
                            }}
                            transition={{
                                type: 'tween',
                                duration: 0.5
                            }}
                            d="M3.97485 17.9749H19.9748"
                            stroke="#050505" 
                            strokeWidth="2.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />

                    </motion.svg>
                </div>
            </div>
            {/* burger icon */}

                {/*Menu*/}
                <AnimatePresence>
                    {
                        toggle && (
                            <motion.div 
                                className={`fixed top-0 left-0 h-[97%] border-b border-gray-border rounded-b-[3rem] bg-card-bg z-[-1]`}
                                style={{
                                    width: `calc(100vw - ${scrollbarWidth}px)`
                                  }}
                                initial={{
                                    translateY: '-100%'
                                }}
                                animate={{
                                    translateY: '0%'
                                }}
                                exit={{
                                    translateY: '-100%'
                                }}
                                transition={{
                                    type: 'tween',
                                    duration: 0.5
                                }}
                            >
                                <div className='text-[2.5rem] font-[700] text-custom-white uppercase flex flex-col items-center gap-[1.5rem] mt-[20vh]'>
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
                                            delay: 0.3
                                        }}
                                        onClick={() => {
                                            lenis?.start()
                                            if(pathname === '/'){
                                                lenis?.scrollTo(0, {
                                                    duration: 2,
                                                    easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                                                })
                                                setToggle(false)
                                                document.body.style.overflow = 'visible';
                                            } else {
                                                router.push('/?loaded=true')
                                            }
                                        }}
                                    >
                                        Home
                                    </motion.p>
                                    {
                                        navLinks.map((link, index) => (
                                            <motion.p
                                                key={index}
                                                className='cursor-pointer relative'
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
                                                    delay: 0.3 + (index + 1) / 20
                                                }}
                                                onClick={() => {
                                                    lenis?.start()
                                                    if(pathname === '/'){
                                                        lenis?.scrollTo(link.divEl.current!, {
                                                            duration: 2,
                                                            easing: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                                                        })
                                                    } else {
                                                        router.push(`/${link.id}`)
                                                    }
                                                    setToggle(false)
                                                    document.body.style.overflow = 'visible';
                                                }}
                                            >
                                                {link.text}
                                            </motion.p>
                                        ))
                                    }
                                    <div 
                                        onClick={() => { 
                                            if(pathname !== '/login') {
                                                router.push('/login')
                                            } 
                                        }}>
                                        <HamburgerTransitionBtn text="Log in" delay={0.3 + 4 / 20}/>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
                {/*Menu*/}
        </div>
    </>
  )
}

export default HamburgerBtn