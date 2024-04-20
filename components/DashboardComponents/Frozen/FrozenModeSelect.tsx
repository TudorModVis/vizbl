'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import useUserData from "@/utils/useUserData"

interface Option {
    text: string;
    value: number;
}

interface OptionProps{
    text: string;
    value: number;
    setOption: React.Dispatch<React.SetStateAction<Option>>;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Option:React.FC<OptionProps> = ({ text, value, setOption, setIsOpen }) => {

    const handleClick = async () => {
        try {
            const res = await fetch('https://api.myvizbl.com/api/update-freeze', {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ timeout: value })
            });

            if (!res.ok) {
                throw new Error('Failed to update display name');
            }
            setOption({
                text: text,
                value: value
            });
            setIsOpen(false);
        } catch (error) {
            setIsOpen(false);
            console.error('Error updating display name:', error);
        }
    }

    return (
        <div 
            className={`hover:bg-gray-border/50 transition-colors duration-[0.5s] text-[0.75rem] w-full backdrop-blur-[2px] bg-transparent flex items-center px-[.5rem] py-[.25rem] cursor-pointer`}
            onClick={handleClick}
        >
            {text}
        </div>
    )
}

const SelectBox = () => {

    const { userData } = useUserData()
    const [ option, setOption ] = useState({
        text: 'Disabled',
        value: 0
    })

    useEffect(() => {
        const date = Date.now()
        if(userData) {
            let text: string
            switch(userData.freeze){
                case 0 : text = 'Disabled'; break;
                case 3600000 : text = '1 Hour'; break;
                case 28800000 : text = '8 Hours'; break;
                case 86400000 : text = '24 Hours'; break;
                default : text = 'Err'; break;
            }
            setOption({
                text: text,
                value: (date - userData.freeze)
            })
        }
        //console.log(option, Date.now())
    })

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative w-[6rem] h-[1.5rem] text-[.75rem] text-custom-white">
            <div 
                className=" bg-card-bg absolute inset-0 z-[2] flex justify-between items-center px-[0.5rem] rounded-[0.15rem] border border-gray-border cursor-pointer"
                onClick={() => setIsOpen(prev => !prev)}
            >
                <span>{option.text}</span>
                <motion.img 
                    className="size-[1rem]"
                    src="/icons/dashboard-icons/angle_arrow.svg" 
                    alt="arr" 
                    draggable={false}
                    animate={{
                        rotate: isOpen ? '180deg' : '0deg'
                    }}
                    transition={{
                        type: 'tween'
                    }}
                />
            </div>
                <motion.div 
                    className="absolute z-[1] top-0 left-0 right-0 border border-gray-border rounded-[0.15rem] overflow-hidden"
                    initial={{
                        translateY: 0,
                        height: '0%'
                    }}
                    animate={{
                        translateY: isOpen ? '2rem' : '0rem',
                        height: isOpen ? 'fit-content' : '0%'
                    }}
                    transition={{
                        type: 'tween'
                    }}
                >
                    <Option text="Disabled" value={0} setOption={setOption} setIsOpen={setIsOpen}/>
                    <Option text="1 Hour" value={3600000} setOption={setOption} setIsOpen={setIsOpen}/>
                    <Option text="8 Hours" value={28800000} setOption={setOption} setIsOpen={setIsOpen}/>
                    <Option text="24 Hours" value={86400000} setOption={setOption} setIsOpen={setIsOpen}/>
                </motion.div>
        </div>
    )
}

const FrozenModeSelect = () => {
  return (
    <div className='mt-[1.5rem] flex items-center'>
        <img src="/icons/dashboard-icons/snowflake.svg" alt="snowflake" draggable={false} className='size-[1.5rem] mr-[0.5rem]'/>
        <p className='text-custom-white text-[1.125rem] leading-[1.125rem] font-[500] mr-[1rem]'>Frozen mode</p>
        <SelectBox />
    </div>
  )
}

export default FrozenModeSelect