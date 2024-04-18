'use client'

import useUserData from "@/utils/useUserData"

const UserImage = () => {
  const { userData } = useUserData();

  return (
    <div className='h-[9.5rem] aspect-square border-2 border-custom-white bg-gray-border rounded-[0.5rem]'>
      {
        userData && (
          <img src={userData.image} alt="user image" draggable={false} className="cover w-full h-full rounded-[0.5rem]" />
        )
      }
    </div>
  )
}

export default UserImage