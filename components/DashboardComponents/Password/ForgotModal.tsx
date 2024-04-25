import React from 'react'

interface ForgotBtnProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    showModal: boolean;
}

const ForgotModal:React.FC<ForgotBtnProps> = ({ showModal, setShowModal }) => {
  return (
    <div>ForgotModal</div>
  )
}

export default ForgotModal