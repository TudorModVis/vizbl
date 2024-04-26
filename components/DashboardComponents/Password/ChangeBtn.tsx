import ChangeModal from "./ChangeModal"
import { useState } from "react"

const ChangeBtn = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
        <ChangeModal setShowModal={setShowModal} showModal={showModal}/>
        <div 
            className='mt-[1.5rem] w-fit cursor-pointer transition-opacity duration-[0.5s] hover:opacity-60'
            onClick={() => setShowModal(true)}
        >
            <p className='text-custom-white font-[500] text-[1.125rem]'>Change Password</p>
        </div>
    </>
  )
}

export default ChangeBtn