'use client'

import { motion } from "framer-motion";


interface AccordionTileProps{
    title: string;
    subtitle: string;
    index: number;
    activeIndex: number | null;
}

const AccordionTile:React.FC<AccordionTileProps> = ({ title, subtitle, index, activeIndex, }) => {
  return (
    <div className={`w-full h-fit border-t border-gray-border ${ index === 4 ? ' border-b ' : '' } `}>
        <div className="w-full h-[3.75rem] flex justify-between items-center text-[1.5rem] font-[500] text-custom-white">
            <h3>{title}</h3>
            <motion.img
                animate={{
                    rotate: index !== activeIndex || activeIndex === null ? 0 : 45
                }}
                src="/icons/plus.svg" alt="plus" draggable={false}
            />
        </div>

        <motion.div 
            className={`text-[1.125rem] pr-[2rem] overflow-hidden text-gray-border font-[500]`}
            animate={{
                height: index !== activeIndex || activeIndex === null ? 0 : 'fit-content' 
            }}
        >
            <p className="mb-[1rem]">{subtitle}</p>
        </motion.div>
    </div>
  )
}

export default AccordionTile