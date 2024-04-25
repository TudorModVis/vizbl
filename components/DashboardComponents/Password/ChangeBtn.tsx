import ChangeModal from "./ChangeModal"
import { useState } from "react"

const ChangeBtn = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
        <ChangeModal setShowModal={setShowModal} showModal={showModal}/>
        <div 
            className='group mt-[1.5rem] w-fit cursor-pointer'
            onClick={() => setShowModal(true)}
        >
            <p className='text-custom-white font-[500] text-[1.125rem]'>Change Password</p>
            <div className='bg-custom-white h-[1px] w-0 group-hover:w-full duration-[0.5s]'/>
        </div>
    </>
  )
}

export default ChangeBtn