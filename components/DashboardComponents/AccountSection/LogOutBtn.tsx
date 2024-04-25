'use client'
import { useRouter } from "next/navigation"

const LogOutBtn = () => {
    const router = useRouter()

    const handleClick = async () => {
        fetch("https://api.myvizbl.com/api/logout", {
              method: "POST",
          })
          .then(res => {
              if (res.status === 401) {
                router.replace('/login')
              }
          })
          .catch(error => console.error('Error when /api/log-out: ', error));
    }

  return (
    <div className='group mt-[1.5rem] mb-[2rem] w-fit cursor-pointer' onClick={handleClick}>
        <h3 className='uppercase text-[1.125rem] font-bold text-custom-white'>log out</h3>
        <div className='bg-custom-white h-[1px] w-0 group-hover:w-full duration-[0.5s]'/>
    </div>
  )
}

export default LogOutBtn