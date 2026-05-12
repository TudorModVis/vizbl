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
        <div onClick={() => setShowModal(true)} className=' mt-[1.5rem] w-fit cursor-pointer transition-opacity duration-[0.5s] hover:opacity-60'>
            <h3 className=' text-[1.125rem] font-bold text-danger'>Delete Account</h3>
        </div>
    </>
  )
}

export default DeleteAccBtn