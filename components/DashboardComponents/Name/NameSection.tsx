import React from 'react'
import UserImage from './UserImage'
import DisplayName from './DisplayName'
import Username from './Username'
import CardLoader from '../CardLoader'

const NameSection:React.FC = () => {
  return (
    // <CardLoader>
    <div className='w-full p-[1.5rem] boder-gray-border border rounded-[0.5rem] bg-card-bg flex gap-[1.5rem] mt-[1.5rem]'>
        <UserImage />
        <div className='w-full flex flex-col justify-between'>
          <DisplayName />
          <Username />
        </div>
    </div>
    // </CardLoader>
  )
}

export default NameSection