import React from 'react'
import UserImage from './UserImage'
import DisplayName from './DisplayName'
import Username from './Username'
import CardLoader from '../CardLoader'

const NameSection:React.FC = () => {
  return (
    <CardLoader>
      <div>
        <UserImage />
        <div className='w-full flex flex-col justify-between'>
          <DisplayName />
          <Username />
        </div>
      </div>
    </CardLoader>
  )
}

export default NameSection