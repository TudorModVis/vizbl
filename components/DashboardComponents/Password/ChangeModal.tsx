import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import ChangeSuccessMsg from './ChangeSuccessMsg';

interface ChangeModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}

const ChangeModal:React.FC<ChangeModalProps> = ({ showModal, setShowModal }) => {

    const [inputValue, setInputValue] = useState("");
    const [newPassInputValue, setNewPassInputValue] = useState("");
    const [repeatNewPassInputValue, setRepeatNewPassInputValue] = useState("");
    const [showMessage, setShowMessage] = useState(false)

    const [passwordVisible, setPasswordVisible] = useState(false)
    const [newPassVisible, setNewPassVisible] = useState(false)
    const [repeatNewPassVisible, setRepeatNewPassVisible] = useState(false)

    const [errors, setErrors] = useState<string[]>([])

    const handleInputChange = (e : any) => {
        setInputValue(e.target.value);
    };

    const handleNewPassChange = (e : any) => {
        setNewPassInputValue(e.target.value);
    };

    const handleRepeatNewPassChange = (e : any) => {
      setRepeatNewPassInputValue(e.target.value);
  };

    const handleSubmit = async (e : any) => {
        e.preventDefault()

        const errorsArr: string[] = []
        const isValid = /^(?=.*[1-9])[0-9a-zA-Z~`!#$%^&*()_\-+={[}\]|:;"'<,>.?/]{8,32}$/.test(newPassInputValue);
        if(newPassInputValue !== repeatNewPassInputValue) errorsArr.push('*passwords do not match')
        if(newPassInputValue.length < 8) errorsArr.push('*too short (Min 8 characters)')
        if(!isValid) errorsArr.push('*password must be 8-32 characters long and contain at least one digit from 1 to 9.') 
        setErrors(errorsArr)

        if(errorsArr.length === 0) {

            try {
                const res = await fetch('https://api.myvizbl.com/api/update-password', {
                    method: 'PUT',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ oldPassword: inputValue, newPassword: newPassInputValue })
                });

                if (!res.ok) {
                    throw new Error('Failed to change password');
                }
                setErrors([])
                // setShowModal(false);
                setShowMessage(true)
            } catch (error) {
                setErrors(prevErrors => [...prevErrors, '*current password is incorrect']);
                console.error('Error adding password:', error);
            }
        }
        
    }

  return (
    <AnimatePresence 
        onExitComplete={() => {
            setInputValue("")
            setNewPassInputValue("")
            setRepeatNewPassInputValue("")
            setErrors([])
            setShowMessage(false)
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
                    onMouseDown={() => setShowModal(false)}
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        onMouseDown={(e) => e.stopPropagation()}
                        className="w-[40rem] p-[1rem] bg-card-bg border border-gray-border text-center rounded-[0.5rem] cursor-default relative overflow-hidden"
                    >
                        <ChangeSuccessMsg setShowMessage={setShowMessage} showMessage={showMessage} setShowModal={setShowModal} />
                        <h3 className="text-custom-white font-bold text-[1.5rem]">Update your password</h3>
                        <p className="font-[500] text-[1.125rem] text-gray-border mt-[0.5rem]">Enter your current password and the new one.</p>

                        <form className="text-left mt-[1.5rem]" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="password" className="text-[1.125rem] text-custom-white font-[500]">Current password</label>
                                <div className="flex items-center mt-[0.25rem] h-[3rem]">
                                    <input type={passwordVisible ? 'text' : 'password'} autoComplete="off" value={inputValue} onChange={handleInputChange} maxLength={32} className="px-[0.5rem] rounded-l-[0.25rem] bg-transparent outline-none text-[1.5rem] font-[500] h-full border-l border-t border-b border-gray-border w-full"/>
                                    <div className="border-r border-t border-b border-gray-border rounded-r-[0.25rem] p-[0.75rem] h-full cursor-pointer">
                                        <motion.svg
                                            className="size-full hover:opacity-50 transition-opacity duration-[0.5s]"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            onClick={() => setPasswordVisible(prev => !prev)}
                                        >
                                            <path d="M15.5969 11.9984C15.5969 13.905 13.9836 15.4506 11.9935 15.4506C10.0034 15.4506 8.39012 13.905 8.39012 11.9984C8.39012 10.0917 10.0034 8.54614 11.9935 8.54614C13.9836 8.54612 15.5969 10.0918 15.5969 11.9984ZM12 4.8103C9.9395 4.81944 7.80372 5.32106 5.78192 6.28144C4.28076 7.02388 2.8178 8.07136 1.54788 9.36426C0.92416 10.0242 0.12862 10.9799 0 11.9995C0.0152 12.8827 0.9626 13.9729 1.54788 14.6348C2.73874 15.8769 4.1636 16.8951 5.78192 17.7183C7.66734 18.6334 9.75424 19.1602 12 19.1895C14.0625 19.1802 16.1978 18.6728 18.2173 17.7183C19.7185 16.9759 21.1822 15.9277 22.4521 14.6348C23.0758 13.9748 23.8714 13.0191 24 11.9995C23.9848 11.1163 23.0374 10.0261 22.4521 9.36422C21.2613 8.1221 19.8356 7.10464 18.2173 6.2814C16.3329 5.36708 14.2408 4.84388 12 4.8103ZM11.9985 6.59526C15.1209 6.59526 17.652 9.01514 17.652 12.0003C17.652 14.9854 15.1209 17.4053 11.9985 17.4053C8.8761 17.4053 6.34498 14.9854 6.34498 12.0003C6.34498 9.01514 8.8761 6.59526 11.9985 6.59526Z" fill="#F1F1F1"/>
                                            <motion.rect 
                                                x="15.54" y="1" width="2.29389" height="22.723" transform="rotate(28.4907 15.54 1)" fill="#F1F1F1"
                                                initial={{
                                                    height: 0
                                                }}
                                                animate={{
                                                    height: passwordVisible ? 22.723 : 0
                                                }}
                                            />
                                            <motion.rect 
                                                x="17.5596" y="2.09009" width="2.29389" height="22.723" transform="rotate(28.4907 17.5596 2.09009)" fill="#1E1E1E"
                                                initial={{
                                                    height: 0
                                                }}
                                                animate={{
                                                    height: passwordVisible ? 22.723 : 0
                                                }}
                                            />
                                        </motion.svg>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[1rem]">
                                <label htmlFor="r_password" className="text-[1.125rem] text-custom-white font-[500]">New password</label>
                                <div className="flex items-center mt-[0.25rem] h-[3rem]">
                                    <input type={newPassVisible ? 'text' : 'password'} autoComplete="off" value={newPassInputValue} onChange={handleNewPassChange} maxLength={20} className="px-[0.5rem] rounded-l-[0.25rem] bg-transparent outline-none text-[1.5rem] font-[500] h-full border-l border-t border-b border-gray-border w-full"/>
                                    <div className="border-r border-t border-b border-gray-border rounded-r-[0.25rem] p-[0.75rem] h-full cursor-pointer">
                                        <motion.svg
                                            className="size-full hover:opacity-50 transition-opacity duration-[0.5s]"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            onClick={() => setNewPassVisible(prev => !prev)}
                                        >
                                            <path d="M15.5969 11.9984C15.5969 13.905 13.9836 15.4506 11.9935 15.4506C10.0034 15.4506 8.39012 13.905 8.39012 11.9984C8.39012 10.0917 10.0034 8.54614 11.9935 8.54614C13.9836 8.54612 15.5969 10.0918 15.5969 11.9984ZM12 4.8103C9.9395 4.81944 7.80372 5.32106 5.78192 6.28144C4.28076 7.02388 2.8178 8.07136 1.54788 9.36426C0.92416 10.0242 0.12862 10.9799 0 11.9995C0.0152 12.8827 0.9626 13.9729 1.54788 14.6348C2.73874 15.8769 4.1636 16.8951 5.78192 17.7183C7.66734 18.6334 9.75424 19.1602 12 19.1895C14.0625 19.1802 16.1978 18.6728 18.2173 17.7183C19.7185 16.9759 21.1822 15.9277 22.4521 14.6348C23.0758 13.9748 23.8714 13.0191 24 11.9995C23.9848 11.1163 23.0374 10.0261 22.4521 9.36422C21.2613 8.1221 19.8356 7.10464 18.2173 6.2814C16.3329 5.36708 14.2408 4.84388 12 4.8103ZM11.9985 6.59526C15.1209 6.59526 17.652 9.01514 17.652 12.0003C17.652 14.9854 15.1209 17.4053 11.9985 17.4053C8.8761 17.4053 6.34498 14.9854 6.34498 12.0003C6.34498 9.01514 8.8761 6.59526 11.9985 6.59526Z" fill="#F1F1F1"/>
                                            <motion.rect 
                                                x="15.54" y="1" width="2.29389" height="22.723" transform="rotate(28.4907 15.54 1)" fill="#F1F1F1"
                                                initial={{
                                                    height: 0
                                                }}
                                                animate={{
                                                    height: newPassVisible ? 22.723 : 0
                                                }}
                                            />
                                            <motion.rect 
                                                x="17.5596" y="2.09009" width="2.29389" height="22.723" transform="rotate(28.4907 17.5596 2.09009)" fill="#1E1E1E"
                                                initial={{
                                                    height: 0
                                                }}
                                                animate={{
                                                    height: newPassVisible ? 22.723 : 0
                                                }}
                                            />
                                        </motion.svg>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-[1rem]">
                                <label htmlFor="r_password" className="text-[1.125rem] text-custom-white font-[500]">Repeat new password</label>
                                <div className="flex items-center mt-[0.25rem] h-[3rem]">
                                    <input type={repeatNewPassVisible ? 'text' : 'password'} autoComplete="off" value={repeatNewPassInputValue} onChange={handleRepeatNewPassChange} maxLength={20} className="px-[0.5rem] rounded-l-[0.25rem] bg-transparent outline-none text-[1.5rem] font-[500] h-full border-l border-t border-b border-gray-border w-full"/>
                                    <div className="border-r border-t border-b border-gray-border rounded-r-[0.25rem] p-[0.75rem] h-full cursor-pointer">
                                        <motion.svg
                                            className="size-full hover:opacity-50 transition-opacity duration-[0.5s]"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                            onClick={() => setRepeatNewPassVisible(prev => !prev)}
                                        >
                                            <path d="M15.5969 11.9984C15.5969 13.905 13.9836 15.4506 11.9935 15.4506C10.0034 15.4506 8.39012 13.905 8.39012 11.9984C8.39012 10.0917 10.0034 8.54614 11.9935 8.54614C13.9836 8.54612 15.5969 10.0918 15.5969 11.9984ZM12 4.8103C9.9395 4.81944 7.80372 5.32106 5.78192 6.28144C4.28076 7.02388 2.8178 8.07136 1.54788 9.36426C0.92416 10.0242 0.12862 10.9799 0 11.9995C0.0152 12.8827 0.9626 13.9729 1.54788 14.6348C2.73874 15.8769 4.1636 16.8951 5.78192 17.7183C7.66734 18.6334 9.75424 19.1602 12 19.1895C14.0625 19.1802 16.1978 18.6728 18.2173 17.7183C19.7185 16.9759 21.1822 15.9277 22.4521 14.6348C23.0758 13.9748 23.8714 13.0191 24 11.9995C23.9848 11.1163 23.0374 10.0261 22.4521 9.36422C21.2613 8.1221 19.8356 7.10464 18.2173 6.2814C16.3329 5.36708 14.2408 4.84388 12 4.8103ZM11.9985 6.59526C15.1209 6.59526 17.652 9.01514 17.652 12.0003C17.652 14.9854 15.1209 17.4053 11.9985 17.4053C8.8761 17.4053 6.34498 14.9854 6.34498 12.0003C6.34498 9.01514 8.8761 6.59526 11.9985 6.59526Z" fill="#F1F1F1"/>
                                            <motion.rect 
                                                x="15.54" y="1" width="2.29389" height="22.723" transform="rotate(28.4907 15.54 1)" fill="#F1F1F1"
                                                initial={{
                                                    height: 0
                                                }}
                                                animate={{
                                                    height: repeatNewPassVisible ? 22.723 : 0
                                                }}
                                            />
                                            <motion.rect 
                                                x="17.5596" y="2.09009" width="2.29389" height="22.723" transform="rotate(28.4907 17.5596 2.09009)" fill="#1E1E1E"
                                                initial={{
                                                    height: 0
                                                }}
                                                animate={{
                                                    height: repeatNewPassVisible ? 22.723 : 0
                                                }}
                                            />
                                        </motion.svg>
                                    </div>
                                </div>
                            </div>

                            {
                                errors.length !== 0 && (
                                    <div className="mt-[0.25rem]">
                                        {
                                            errors.map((error, index) => (
                                                <p key={index} className="text-[0.75rem] text-danger italic">{error}</p>
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

export default ChangeModal