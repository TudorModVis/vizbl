'use client'

import AddPasswordBtn from './AddPasswordBtn'
import useUserData from '@/utils/useUserData'
import CardLoader from '../CardLoader'
import ForgotBtn from './ForgotBtn'
import ChangeBtn from './ChangeBtn'

const PasswordSection:React.FC = () => {

  const { userData, refetch } = useUserData()

  return (
    <div className='w-full p-[1.5rem] boder-gray-border border rounded-[0.5rem] bg-card-bg flex gap-[1.5rem] mt-[1.5rem]'>
      <div>
        <h3 className='uppercase text-[1.125rem] font-bold text-gray-border'>PASSWORD</h3>
        <p className='font-[500] text-[1rem] text-gray-border mt-[0.5rem]'>You can create a new password if you forgot it. You also can change your currently used password to a new one. (you remember it, right?)</p>
        <ForgotBtn />
        <ChangeBtn />
        {/* {
          userData!.authMethod !== 'password' && (
            <div>
              <h3 className='uppercase text-[1.125rem] font-bold text-gray-border mt-[2rem]'>ADD A PASSWORD</h3>
              <p className='font-[500] text-[1rem] text-gray-border mt-[0.5rem]'>Account is registered with Google, but you can enhance security by adding a password to facilitate login through both email and password credentials.</p>
              <AddPasswordBtn refetch={refetch}/>
            </div>
          )
        } */}
      </div>
    </div>
  )
}

export default PasswordSection