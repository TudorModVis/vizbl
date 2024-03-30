
import Link from 'next/link';

interface NavButtonProps {
  text: string;
}

const NavButtonRight: React.FC<NavButtonProps> = ({ text }) => {

  return (
    <div className={`select-none h-[3rem] rounded-[1rem] cursor-pointer z-[4] relative overflow-hidden border border-gray-border duration-[0.5] nav-button`}>

      <div className=' z-[5] transition-none duration-[0.5s] group nav-button-chlid h-[3rem] rounded-[1rem]'>
        <p className='text-[1rem] text-transparent hover:text-body-bg bg-gray-border duration-[0.7s] uppercase z-[6] font-bold nav-button-text px-[1.5rem] grid place-content-center w-full h-full'>{text}</p>
      </div>
    </div>
  )
}

export default NavButtonRight