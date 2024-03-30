import Image from "next/image"
import { motion } from "framer-motion";

interface VideoProps{
    videoPath: string;
}

const Video: React.FC<VideoProps> = ({ videoPath }) => {
  return (
    <motion.div 
        className="p-[1rem] w-[25rem] h-[31.25rem] bg-card-bg rounded-[1.5rem] border border-gray-border"
        layoutId="active-video"
        transition={{
            type: 'spring',
            duration: 1.5
        }}>
        <video
            draggable={false}
            autoPlay
            disablePictureInPicture
            playsInline
            muted
            loop
            className="rounded-[1rem] w-full h-full"
        >
          <source src={videoPath} type="video/mp4"/>
        </video>
    </motion.div>
  )
}

export default Video