'use client'

import { motion } from "framer-motion"
import { useState } from "react"

const Username = () => {

    const [editable, setEditable] = useState(false)

  return (
    <div className="w-full">
        <div className="flex gap-[0.5rem] items-center">
            <p className="uppercase text-gray-border text-[1.125rem] leading-[1.25rem] font-bold">Username</p>
            <img className="size-[1.125rem]" src="/icons/share_icon.svg" alt="share" draggable={false} />
        </div>
        <div className="mt-[0.5rem] flex justify-between items-center w-full">
            <div className="w-fit">
                <input
                    className={`bg-transparent outline-none text-[1.5rem] font-[500] w-[20ch]`}
                    readOnly={ editable ? false : true }
                    type="text" 
                    value="anatol#234101" 
                    maxLength={20} 
                    minLength={5}
                />
                <motion.div 
                    className="h-[1px] bg-custom-white" 
                    initial={{
                        width: '0%'
                    }}
                    animate={{
                        width: editable ? '100%' : '0%' 
                    }}
                />
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
                onClick={() => setEditable(prev => !prev)}
            >
                {
                    editable ? 'Done' : 'Edit'
                }
            </motion.div>
        </div>
    </div>
  )
}

export default Username