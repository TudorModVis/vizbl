import { motion } from "framer-motion"

interface ChangeSuccessMsgProps{
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowMessage: React.Dispatch<React.SetStateAction<boolean>>;
    showMessage: boolean;
    email: string;
}

const EmailSentMsg:React.FC<ChangeSuccessMsgProps> = ({ setShowMessage, setShowModal, showMessage, email }) => {
  return (
    <motion.div 
        className='absolute inset-0 bg-card-bg rounded-[inherit] flex flex-col items-center pt-[1.5rem] px-[1.5rem] pb-[1rem] text-center'
        initial={{
            translateX: '100%'
        }}
        animate={{
            translateX: showMessage ? '0%' : '100%'
        }}
        transition={{
            type: 'tween',
            delay: 0.5
        }}
    >
        <img src="/gifs/mail.gif" alt="lock" draggable={false} className='size-[10rem]'/>
        <h1 className='text-[1.5rem] font-bold text-custom-white uppercase'>VERIFY YOUR EMAIL</h1>
        <p className='text-[1.125rem] text-gray-border font-[500] mt-[1rem]'>We have sent a verification link to <br /> <span className="text-custom-white">{email}</span></p>
        <p className='text-[1.125rem] text-gray-border font-[500] mt-[1rem]'>Click the link to reset your password. <br /> You might need to <span className="text-custom-white">check your spam.</span></p>
        <div className="w-full h-full flex justify-center">
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
                className="py-[0.5rem] w-[5.5rem] border border-gray-border grid place-content-center rounded-[0.25rem] mt-[1.5rem] font-[500]" type="submit"
                onClick={() => setShowModal(false)}
            >
                Continue
            </motion.button>
        </div>
    </motion.div>
  )
}

export default EmailSentMsg