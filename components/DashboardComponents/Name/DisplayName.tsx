'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import NameModal from "./NameModal"
import useUserData from "@/utils/useUserData"

const DisplayName = () => {

    const { userData } = useUserData()

    const [showInviteModal, setShowInviteModal] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState('')

    useEffect(() => {
        if(userData) setName(userData.name)
    }, [userData])

  return (
  <>
    <NameModal 
        showModal={showModal} 
        setShowModal={setShowModal}
        name={name}
        setName={setName}
        />
    <div className="w-full">
        <div className="flex gap-[0.5rem] items-center">
            <p className="uppercase text-gray-border text-[1.125rem] leading-[1.25rem] font-bold">Display name</p>
            <img className="size-[1.125rem] cursor-pointer" src="/icons/share_icon.svg" alt="share" draggable={false} onClick={() => setShowInviteModal(true)}/>
        </div>
        <div className="mt-[0.5rem] flex justify-between items-center w-full">
            <div className="max-xs:w-[20ch] w-fit mr-[1rem] truncate">
                <span className={`text-[1.5rem] font-[500]`}>{ name }</span>
            </div>
            <motion.div
                className="select-none cursor-pointer text-[1rem] font-[500] w-[3rem] h-[1.75rem] grid place-content-center border border-gray-border rounded-[0.125rem]"
                initial={{
                    background: 'linear-gradient(93deg, rgba(30,30,30,1) -64.38%, rgba(30,30,30,1) 48.4%, rgba(30,30,30,1) 158.85%), rgba(0,0,0,0)'
                }}
                whileHover={{
                    background: 'linear-gradient(93deg, rgba(253,162,255,1) -64.38%, rgba(120,42,213,1) 48.4%, rgba(82,184,255,1) 158.85%), rgba(0,0,0,0)'
                }}
                transition={{
                    duration: 0.4
                }}
                onClick={() => setShowModal(true)}
            >
                Edit
            </motion.div>
        </div>
    </div>
  </>
  )
}

export default DisplayName