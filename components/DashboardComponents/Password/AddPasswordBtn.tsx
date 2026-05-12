'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import AddPassModal from "./AddPassModal"

interface AddPasswordBtnProps {
    refetch: () => void;
}

const AddPasswordBtn:React.FC<AddPasswordBtnProps> = ({ refetch }) => {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
        <AddPassModal setShowModal={setShowModal} showModal={showModal} refetch={refetch}/>
        <div 
            className='group mt-[1.5rem] w-fit cursor-pointer'
            onClick={() => setShowModal(true)}
        >
            <p className='text-custom-white font-[500] text-[1.125rem]'>Add Password</p>
            <div className='bg-custom-white h-[1px] w-0 group-hover:w-full duration-[0.5s]'/>
        </div>
    </>
  )
}

export default AddPasswordBtn