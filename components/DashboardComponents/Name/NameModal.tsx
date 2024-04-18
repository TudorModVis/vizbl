'use client'

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLenis } from '@studio-freight/react-lenis'

interface NameModalProps {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
}

const NameModal: React.FC<NameModalProps> = ({ showModal, setShowModal, name, setName }) => {

    const [inputValue, setInputValue] = useState(name);
    const [letterNum, setLetterNum] = useState(name.length);
    const [errors, setErrors] = useState<string[]>([])
    
    useEffect(() => {
        setInputValue(name);
        setLetterNum(name.length);
    }, [name]);

    const handleInputChange = (e : any) => {
        setInputValue(e.target.value);
        setLetterNum(e.target.value.length)
    };

    const lenis = useLenis(() => {})

    useEffect(() => {
        if(showModal) {
            lenis?.stop()
        } else lenis?.start()
    }, [showModal])


    const handleSubmit = async (e : any) => {
        e.preventDefault()

        const errorsArr: string[] = []
        const isNotValid = / {3,}(?=.)/g.test(inputValue);
        if(letterNum < 5) errorsArr.push('*too short (Min 5 characters)')
        if(isNotValid) errorsArr.push('*can not contain 3 whitespaces in a row') 
        setErrors(errorsArr)

        if(errors.length === 0) {

            try {
                const res = await fetch('https://api.myvizbl.com/api/update-display-name', {
                    method: 'PUT',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: inputValue })
                });

                if (!res.ok) {
                    throw new Error('Failed to update display name');
                }
                setName(inputValue);
                setShowModal(false);
            } catch (error) {
                errors.push('*some error occured')
                console.error('Error updating display name:', error);
            }
        }
        
    }
  return (
    <AnimatePresence 
        onExitComplete={() => {
            setInputValue(name)
            setLetterNum(name.length)
        }}
    >
        {
            showModal && (
                <motion.div
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-[5000] grid place-items-center cursor-pointer"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0
                    }}
                    onClick={() => setShowModal(false)}
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-[40rem] p-[1rem] bg-card-bg border border-gray-border text-center rounded-[0.5rem] cursor-default"
                    >
                        <h3 className="text-custom-white font-bold text-[1.5rem]">Change your display name</h3>
                        <p className="font-[500] text-[1.125rem] text-gray-border mt-[0.5rem]">Enter a new display name.</p>

                        <form className="text-left mt-[1.5rem]" onSubmit={handleSubmit}>
                            <label htmlFor="name" className="text-[1.125rem] text-custom-white font-[500]">Display Name</label>
                            <div className="relative">
                                <input type="text" autoComplete="off" value={inputValue} onChange={handleInputChange} maxLength={20} className="px-[0.5rem] mt-[0.25rem] rounded-[0.25rem] bg-transparent outline-none text-[1.5rem] font-[500] h-[3rem] border border-gray-border w-full"/>
                                <p className={`absolute right-[0.5rem] bottom-[0.5rem] text-[0.75rem] transition-colors duration-[0.5s] font-[500] ${letterNum < 5 ? " text-danger " : " text-gray-border "}`}>{letterNum}/20</p>
                            </div>

                            {
                                errors.length !== 0 && (
                                    <div className="mt-[0.25rem]">
                                        {
                                            errors.map((error, index) => (
                                                <p className="text-[0.75rem] text-danger italic">{error}</p>
                                            ))
                                        }
                                    </div>
                                )
                            }

                            <div className="w-full justify-end flex mt-[1.5rem] text-custom-white text-[1.125rem] font-[500]">
                                <button 
                                    className="py-[0.5rem] w-[5.5rem] grid place-content-center rounded-[0.5rem]" type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
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
                                    className="py-[0.5rem] w-[5.5rem] border border-gray-border grid place-content-center rounded-[0.25rem]" type="submit"
                                >
                                    Done
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default NameModal