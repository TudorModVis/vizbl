'use client'

import { useState, useEffect } from "react"
import DeleteAccModal from "./DeleteAccModal"

const DeleteAccBtn = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
        <DeleteAccModal 
            showModal={showModal}
            setShowModal={setShowModal}
        />
        <div onClick={() => setShowModal(true)} className='group mt-[1.5rem] w-fit cursor-pointer'>
            <h3 className=' text-[1.125rem] font-bold text-danger'>Delete Account</h3>
            <div className='bg-danger h-[1px] w-0 group-hover:w-full duration-[0.5s]'/>
        </div>
    </>
  )
}

export default DeleteAccBtn