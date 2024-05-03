import useUserData from "@/utils/useUserData";
import { motion, AnimatePresence } from "framer-motion";
import EmailSentMsg from "./EmailSentMsg";
import { useState, useEffect } from "react";
import { useLenis } from '@studio-freight/react-lenis'

interface ForgotBtnProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    showModal: boolean;
}

const ForgotModal:React.FC<ForgotBtnProps> = ({ showModal, setShowModal }) => {

    const lenis = useLenis(() => {})

    useEffect(() => {
        if(showModal) {
            lenis?.stop()
        } else lenis?.start()
    }, [showModal])

  const [showMessage, setShowMessage] = useState(false)

  const { userData } = useUserData()

  const handleClick = async () => {
      try {
          const res = await fetch('https://api.myvizbl.com/api/send-reset-password-email', {
              method: 'POST',
              credentials: 'include',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email: userData?.email })
          });

          if (!res.ok) {
              throw new Error('Failed to send email');
          }
          setShowMessage(true)
      } catch (error) {
          console.error('Error sending email:', error);
      }
  }

  if(!userData) return null
  
  return (
    <AnimatePresence onExitComplete={() => setShowMessage(false)}>
        {
            showModal && (
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
                    onClick={() => setShowModal(false)}
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="ss:w-[30rem] w-full p-[1rem] bg-card-bg border border-gray-border rounded-[0.5rem] cursor-default relative overflow-hidden"
                    >
                        <h3 className="text-custom-white font-bold text-[1.5rem]">Forgot your password?</h3>
                        <p className="font-[500] text-[1.125rem] text-gray-border mt-[0.5rem]">Don't worry, we'll send you an email to reset your password. (don't forget it this time).</p>
                            <EmailSentMsg setShowMessage={setShowMessage} showMessage={showMessage} setShowModal={setShowModal} email={userData?.email}/>
                            <motion.div 
                              className="w-full justify-end flex mt-[16.5rem] text-custom-white text-[1.125rem] font-[500]"
                              initial={{
                                marginTop: '1.5rem'
                              }}
                              animate={{
                                marginTop: showMessage ? '17.5rem' : '1.5rem'
                              }}
                              transition={{
                                type: 'tween',
                                duration: 0.3
                              }}
                            >
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
                                    className="py-[0.5rem] px-[1rem] border border-gray-border grid place-content-center rounded-[0.25rem]"
                                    onClick={handleClick}
                                >
                                    Reset password
                                </motion.button>
                            </motion.div>
                    </motion.div>
                </motion.div>
            )
        }
    </AnimatePresence>
  )
}

export default ForgotModal