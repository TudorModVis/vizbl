'use client'

import { ReactNode } from 'react'
import { TailSpin } from 'react-loader-spinner'
import useUserData from '@/utils/useUserData'

const CardLoader = ({ children } : { children : ReactNode }) => {

    const { userData } = useUserData()

  return (
    <div className='w-full p-[1.5rem] boder-gray-border border rounded-[0.5rem] bg-card-bg flex gap-[1.5rem]'>
        {
            userData ? (
                <>
                    {children}
                </>
            ) : (
                <div className='w-full h-full grid place-content-center bg-card-bg boder-gray-border border rounded-[0.5rem]'>
                    <TailSpin
                        visible={true}
                        height="30"
                        width="30"
                        color="#a0a0a0"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            )
        }
    </div>
  )
}

export default CardLoader