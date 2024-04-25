import Image from "next/image"

interface SocialIconProps {
    link: string;
    src: string;
}

const SocialIcon:React.FC<SocialIconProps> = ({ link, src }) => {
  return (
    <a className="opacity-[1] hover:opacity-[0.75] transition-opacity duration-[0.7s] cursor-pointer" target="_blank" href={link}>
        <div className="group transition-colors duration-[0.5s] hover:bg-card-bg p-[0.1875rem] rounded-[0.3125rem] w-[2rem] h-[2rem] flex justify-center items-center bg-custom-white">
            <Image 
                draggable={false}
                src={src}
                alt="social_icon"
                width={100}
                height={100}
                className="w-full h-full duration-[0.5s] group-hover:invert-[100%]"
            />
        </div>
    </a>
  )
}

export default SocialIcon