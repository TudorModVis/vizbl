import { Metadata } from 'next'
import Goodbye from './goodbye'
import Link from 'next/link'
 
export const metadata: Metadata = {
  title: 'Goodbye - ViZBL',
}

export default function Page() {
    return(
        <div className="w-screen h-screen relative flex justify-center items-center">
            <img src="/images/bg.png" alt="background" className="absolute left-0 top-0 w-full h-full object-cover -z-10"/>
            <Link href="/?loaded=true">
                <img src="/images/logo.png" alt="logo" className="absolute left-[4.5rem] top-12 w-[8.3vw] max-w-40" />
            </Link>
            <div className="flex flex-col justify-center items-center">
                <Goodbye />
            </div>
        </div>
    )
}