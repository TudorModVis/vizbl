'use client'

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLenis } from '@studio-freight/react-lenis'
import Image from "next/image";

interface InviteModalProps {
    showInviteModal: boolean;
    setShowInviteModal: React.Dispatch<React.SetStateAction<boolean>>;
    username: string;
}

const InviteModal:React.FC<InviteModalProps> = ({ showInviteModal, setShowInviteModal, username }) => {

    const handleClick = () => {
        const link = "myvizbl.com/invite/" + username.substring(1);
        navigator.clipboard.writeText(link)
            .then(() => {
                console.log('Link copied to clipboard:', link);
            })
            .catch(err => {
                console.error('Failed to copy link to clipboard:', err);
            });
    };

  return (
    <AnimatePresence>
        {
            showInviteModal && (
                <motion.div
                    className="bg-slate-900/20 backdrop-blur p-[1rem] fixed inset-0 z-[5000] grid place-items-center"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0
                    }}
                    onMouseDown={() => setShowInviteModal(false)}
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                        className="ss:w-[40rem] w-full p-[1rem] bg-card-bg border border-gray-border text-center rounded-[0.5rem] cursor-default"
                    >
                        <div className="w-full flex justify-center">
                            <Image 
                                src="/images/people.png"
                                alt="people"
                                draggable={false}
                                width={1500}
                                height={1500}
                                className="size-[9rem]"
                            />
                        </div>
                        <h3 className="text-custom-white font-bold text-[1.5rem]">INVITE YOUR FRIENDS</h3>
                        <p className="font-[500] text-[1.125rem] text-gray-border mt-[0.5rem]">Share this link with others to add them as friends. (also get rewarded with emojis for that)</p>

                        <div className="w-full h-[3rem] font-[500] text-custom-white text-[1.125rem] mt-[1.5rem] rounded-[0.25rem] border border-custom-white grid place-content-center">
                            {
                                "myvizbl.com/invite/" + username.substring(1)
                            }
                        </div>

                        <div className="w-full flex justify-center">
                            <motion.button
                                initial={{
                                    background: 'linear-gradient(93deg, rgba(253,162,255,1) -64.38%, rgba(120,42,213,1) 48.4%, rgba(82,184,255,1) 158.85%), rgba(0,0,0,0)'
                                }}
                                whileHover={{
                                    background: 'linear-gradient(93deg, rgba(30,30,30,1) -64.38%, rgba(30,30,30,1) 48.4%, rgba(30,30,30,1) 158.85%), rgba(0,0,0,0)'
                                }}
                                transition={{
                                    duration: 0.4
                                }}
                                className="py-[0.5rem] mt-[1.5rem] text-[1.125rem] font-[500] text-custom-white px-[1rem] border border-gray-border grid place-content-center rounded-[0.25rem]"
                                onClick={handleClick}
                            >
                                Copy to clipboard
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default InviteModal