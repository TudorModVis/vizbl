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

                        <div className="w-full h-[3rem] mt-[1.5rem] rounded-[0.25rem] border border-custom-white grid place-content-center">
                            {
                                "myvizbl.com/invite/" + username.substring(1)
                            }
                        </div>
                    </motion.div>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default InviteModal