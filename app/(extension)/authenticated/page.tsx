import Link from "next/link";
import Image from "next/image";

export default function Page() {
    return(
        <div className="w-screen h-screen relative flex justify-center items-center px-[1rem]">
            <img src="/images/bg.png" alt="background" className="absolute left-0 top-0 w-full h-full object-cover -z-10"/>

            <Link href="/?loaded=true">
                <Image 
                    src="/images/logo.png"
                    alt="logo"
                    width={163}
                    height={32}
                    className="h-[2rem] w-[10rem] smm:scale-[1] scale-[0.75] absolute smm:left-[4.5rem] left-[1rem] top-[3.25rem]"
                />
            </Link>

            <div className="flex flex-col items-center">
                <img src="/images/models/heart.png" alt="gif" className="w-60 mb-6"/>
                <div className="flex xs:gap-8 gap-4 items-center">
                    <p className="font-bold lg:text-[4rem] ss:text-[3rem] text-[2rem] leading-none text-center">GREAT! NOW YOU CAN</p>
                    <div className="h-[2px] sm:w-72 xs:w-[8rem] w-[4rem] bg-white"></div>
                </div>
                <p className="font-bold lg:text-[4rem] ss:text-[3rem] text-[2rem] leading-[140%] mb-12 text-right self-end">INSTALL THE EXTENSION</p>
                <p className="text-gray lg:text-2xl text-base font-bold leading-[140%] text-center mb-12">Add the extension through Google Extension or access the button for a faster redirect. <br/> <br/> <span className="text-white">Let the fun begin - Get to know your friends.</span></p>
                <a href="https://chromewebstore.google.com/detail/vizbl-get-to-know-your-fr/lcaeomijnkkglaabildphmdinpoodaho"><button className="py-4 lg:py-[0.875rem] px-12 colored-button border border-white font-bold disabled:opacity-50 disabled:pointer-events-none text-[1rem]">ADD TO CHROME - IT’S FREE</button></a> 
            </div>
        </div>
    )
}