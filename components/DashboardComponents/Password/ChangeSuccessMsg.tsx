import { motion } from "framer-motion"

interface ChangeSuccessMsgProps{
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowMessage: React.Dispatch<React.SetStateAction<boolean>>;
    showMessage: boolean;
}

const ChangeSuccessMsg:React.FC<ChangeSuccessMsgProps> = ({ setShowMessage, showMessage, setShowModal }) => {
  return (
    <motion.div 
        className='absolute inset-0 bg-card-bg rounded-[inherit] flex flex-col items-center pt-[1.5rem] px-[1.5rem] pb-[1rem]'
        initial={{
            translateX: '100%'
        }}
        animate={{
            translateX: showMessage ? '0%' : '100%'
        }}
        transition={{
            type: 'tween'
        }}
    >
        <img src="/icons/dashboard-icons/lock.svg" alt="lock" draggable={false} className='size-[14rem]'/>
        <h1 className='text-[2rem] font-bold text-custom-white uppercase'>YOU HAVE CHANGED YOUR PASSWORD</h1>
        <p className='text-[1.125rem] text-gray-border font-[500] mt-[1rem]'>You have changed your password. Hope it's <br /> harder than the last one.</p>
        <div className="w-full h-full flex justify-end pt-[0.5rem]">
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
                Done
            </motion.button>
        </div>
    </motion.div>
  )
}

export default ChangeSuccessMsg