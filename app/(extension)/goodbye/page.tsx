import { Metadata } from 'next'
import Goodbye from './goodbye'
import Link from 'next/link'
import Image from 'next/image'
 
export const metadata: Metadata = {
  title: 'Goodbye - ViZBL',
}

export default function Page() {
    return(
        <div className="w-screen h-screen relative flex justify-center items-center">
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
            <div className="flex flex-col justify-center sm:items-center w-full px-[1rem]">
                <Goodbye />
            </div>
        </div>
    )
}