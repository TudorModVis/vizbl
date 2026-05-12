import { motion, AnimatePresence } from "framer-motion"

interface SaleSpanProps{
    plan: string;
}

const SaleSpan:React.FC<SaleSpanProps> = ({ plan }) => {
  return (
    <>
        <AnimatePresence>
            {
                plan === 'annually' && (
                    <motion.div
                        initial={{
                            translateY: '10%',
                            opacity: 0
                        }}
                        animate={{
                            translateY: '0%',
                            opacity: 1
                        }}
                        exit={{
                            translateY: '10%',
                            opacity: 0
                        }}
                        className="absolute top-[-1.75rem] py-[2px] px-[4px] rounded-[0.25rem]"
                        style={{
                            background: 'linear-gradient(93deg, #FDA2FF -64.38%, #782AD5 48.4%, #52B8FF 158.85%)'
                        }}
                    >
                        <span className="text-custom-white text-[1rem] font-[500]">-40%</span>
                    </motion.div>
                )
            }
        </AnimatePresence>
    </>
  )
}

export default SaleSpan