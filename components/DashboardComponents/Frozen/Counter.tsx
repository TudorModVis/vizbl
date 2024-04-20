import React from 'react'

interface CounterProps{
    text: string;
}

const Counter: React.FC<CounterProps> = ({ text }) => {
  return (
    <div className='w-[6rem] h-[1.5rem] text-[.75rem] text-custom-white grid place-content-center border border-gray-border rounded-[0.15rem]'>
        {text}
    </div>
  )
}

export default Counter