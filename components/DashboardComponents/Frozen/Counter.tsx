'use client'

import { motion } from "framer-motion";

interface CounterProps{
    text: string;
    refetch: () => void;
}

const Counter: React.FC<CounterProps> = ({ text, refetch }) => {


  const handleClick = async () => {
    try {
        const res = await fetch('https://api.myvizbl.com/api/update-freeze', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ timeout: -100000 })
        });

        if (!res.ok) {
            throw new Error('Failed to update display name');
        }


        refetch();
    } catch (error) {
        console.error('Error updating display name:', error);
    }
}


  return (
    <div className="flex gap-[1rem] items-center">
      <div className='w-[6rem] h-[1.5rem] text-[0.875rem] text-custom-white grid place-content-center border border-gray-border rounded-[0.15rem]'>
          {text}
      </div>

      <motion.div
                className="select-none cursor-pointer text-[0.75rem] font-[500] w-[3rem] h-[1.5rem] grid place-content-center border border-gray-border rounded-[0.15rem]"
                initial={{
                    background: 'linear-gradient(93deg, rgba(30,30,30,1) -64.38%, rgba(30,30,30,1) 48.4%, rgba(30,30,30,1) 158.85%), rgba(0,0,0,0)'
                }}
                whileHover={{
                    background: 'linear-gradient(93deg, rgba(253,162,255,1) -64.38%, rgba(120,42,213,1) 48.4%, rgba(82,184,255,1) 158.85%), rgba(0,0,0,0)'
                }}
                transition={{
                    duration: 0.4
                }}
                onClick={handleClick}
            >
                Cancel
            </motion.div>
    </div>
  )
}

export default Counter