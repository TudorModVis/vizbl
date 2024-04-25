'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis'
import { useRouter } from 'next/navigation';

interface DeleteAccModalProps{
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteAccModal:React.FC<DeleteAccModalProps> = ({ showModal, setShowModal }) => {

    const router = useRouter()

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e : any) => {
        setInputValue(e.target.value);
    };

    const lenis = useLenis(() => {})

    useEffect(() => {
        if(showModal) {
            lenis?.stop()
        } else lenis?.start()
    }, [showModal])

    const handleSubmit = async (e : any) => {
        e.preventDefault()
        if(inputValue === 'Delete'){
            try {
                const res = await fetch('https://api.myvizbl.com/api/delete-user', {
                    method: 'DELETE',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (!res.ok) {
                    throw new Error('Failed to delete account');
                }
                router.replace('/login')
            } catch (error) {
                console.error('Error deleting the account:', error);
            }
        }
    }


  return (
    <AnimatePresence 
        onExitComplete={() => {
            setInputValue('')
        }}
    >
        {
            showModal && (
                <motion.div
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-[5000] grid place-items-center"
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
                        className="w-[40rem] p-[1rem] bg-card-bg border border-gray-border rounded-[0.5rem] cursor-default"
                    >
                        <h3 className="text-custom-white font-bold text-[1.5rem]">Delete your account</h3>
                        <p className="font-[500] text-[1.125rem] text-gray-border mt-[0.5rem]">Are you sure you want to delete your account?</p>
                        <p className="font-[500] text-[1.125rem] text-gray-border mt-[0.5rem]">This cannot be <span className='text-custom-white'>undone</span>.</p>

                        <form className="text-left mt-[1.5rem]" onSubmit={handleSubmit}>
                            <label htmlFor="name" className="text-[1.125rem] text-custom-white font-[500]">Type ”Delete” to delete account</label>
                            <div className="relative">
                                <input type="text" placeholder='Delete' autoComplete="off" value={inputValue} onChange={handleInputChange} maxLength={6} className="px-[0.5rem] mt-[0.25rem] rounded-[0.25rem] bg-transparent outline-none text-[1.5rem] font-[500] h-[3rem] border border-gray-border w-full"/>
                            </div>

                            <div className='flex items-start gap-[1rem] mt-[1.25rem]'>
                                <img src="/icons/dashboard-icons/tick.svg" className='size-[1.3rem]' alt="tick" draggable={false} />
                                <p className="font-[500] text-[1.125rem] leading-[1.125rem] text-gray-border">By pressing <span className='text-custom-white'>“Delete Account”</span> you understand that all your data will be <span className="text-custom-white">permanently deleted</span>.</p>
                            </div>

                            <div className="w-full justify-end flex mt-[1.5rem] text-custom-white text-[1.125rem] font-[500]">
                                <button 
                                    className="py-[0.5rem] w-[5.5rem] grid place-content-center rounded-[0.5rem]" type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                                <motion.button
                                    className={`py-[0.5rem] px-[1rem] transition-colors duration-[0.5s] ${ inputValue === "Delete" ? 'bg-danger border-danger hover:bg-transparent' : 'bg-gray-border border-gray-border' } border grid place-content-center rounded-[0.25rem]`} 
                                    type="submit"
                                >
                                    Delete Account
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

export default DeleteAccModal