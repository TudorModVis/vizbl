'use client'

import Link from "next/link"
import { motion } from "framer-motion";

interface GradientButtonProps {
  text: string;
  route: string;
  target: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ text, route, target }) => {
  return (
    <Link href={route} target={target}>
      <motion.div className="text-custom-white border border-gray-border text-[1rem] font-[500] px-[1.5rem] h-[3rem] uppercase w-max rounded-[1rem] leading-[1rem] flex justify-center items-center"
        initial={{
          background: 'linear-gradient(93deg, rgba(253,162,255,1) -64.38%, rgba(120,42,213,1) 48.4%, rgba(82,184,255,1) 158.85%), rgba(0,0,0,0)'
        }}
        whileHover={{
          background: 'linear-gradient(93deg, rgba(5,5,5,1) -64.38%, rgba(5,5,5,1) 48.4%, rgba(5,5,5,1) 158.85%), rgba(0,0,0,0)'
        }}
        transition={{
          duration: 0.4
        }}>
          {text}
      </motion.div>
    </Link>
  );
}

export default GradientButton;