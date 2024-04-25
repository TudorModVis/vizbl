'use client'

import { deleteCookie } from "cookies-next"
import { useRouter } from "next/navigation"

const LogOutBtn = () => {
    const router = useRouter()

    const handleClick = () => {
        deleteCookie('vizbl-session')
        router.replace('/?loaded=true')
    }

  return (
    <div className='group mt-[1.5rem] mb-[2rem] w-fit cursor-pointer' onClick={handleClick}>
        <h3 className='uppercase text-[1.125rem] font-bold text-custom-white'>log out</h3>
        <div className='bg-custom-white h-[1px] w-0 group-hover:w-full duration-[0.5s]'/>
    </div>
  )
}

export default LogOutBtn