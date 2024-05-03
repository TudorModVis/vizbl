'use client'
import { useRouter } from "next/navigation"

const LogOutBtn = () => {
    const router = useRouter()

    const handleClick = async () => {
        try {
          const res = await fetch('https://api.myvizbl.com/api/logout', {
              method: 'POST',
              credentials: 'include',
              headers: {
                  'Content-Type': 'application/json',
              }
          });
          
          if (res.status === 401) {
              router.replace('/login')
          }
          } catch (error) {
              console.error('Error logging out:', error);
          }
      }

  return (
    <div className=' mt-[0.5rem] mb-[2rem] w-fit cursor-pointer transition-opacity duration-[0.5s] hover:opacity-60' onClick={handleClick}>
        <h3 className='uppercase text-[1.125rem] font-bold text-custom-white'>log out</h3>
    </div>
  )
}

export default LogOutBtn