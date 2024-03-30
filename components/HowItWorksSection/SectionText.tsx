import Image from "next/image";

interface SectionTextProps {
    color: string;
    imagePath: string;
    imageRotation: number;
    imageTop: number;
    imageRight: number;
    subtitle: string;
    title: string;
    text: string;
}

const SectionText: React.FC<SectionTextProps> = ({ color, subtitle, title, text, imageRotation, imagePath, imageTop, imageRight }) => {
  return (
    <div className="relative z-[1] mmd:w-[31.5rem] smm:w-[21rem] sm:w-[22rem] max-w-[31.5rem] smm:mr-0 sm:mr-[2rem]">
        <div 
            className="sm:w-[12.5rem] w-[9.25rem] aspect-square absolute z-[-1]"
            style={{
                top: `${imageTop}rem`,
                right: `${imageRight}rem`
            }}>
            <Image
                fill
                draggable={false}
                src={imagePath}
                alt="how-it-works-img"
                className="w-full h-full"
                style={{
                    rotate: `${imageRotation}deg`
                }}
                />
        </div>
            <h2 
                className={`text-[1.5rem] font-[500] uppercase`}
                style={{
                    color: color
                }}
            >
                { subtitle }
            </h2>
        <h1 className="mt-[0.5rem] leading-[110%] text-[2.5rem] font-[600] text-custom-white">{ title }</h1>
        <p className="text-gray-border mt-[2rem] text-[1.125rem]">{ text }</p>
    </div>
  )
}

export default SectionText