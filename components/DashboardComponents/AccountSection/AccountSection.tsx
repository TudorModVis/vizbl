import LogOutBtn from "./LogOutBtn"


const AccountSection:React.FC = () => {

  return (
    <div className='w-full p-[1.5rem] boder-gray-border border rounded-[0.5rem] bg-card-bg flex gap-[1.5rem] mt-[1.5rem]'>
      <div>
        <h3 className='uppercase text-[1.125rem] font-bold text-gray-border'>ACCOUNT MANAGMENT</h3>
        <LogOutBtn />
        <h3 className='uppercase text-[1.125rem] font-bold text-gray-border'>DeactivatION</h3>
        <p className='font-[500] text-[1rem] text-gray-border mt-[0.5rem]'>This account will no longer be available, and all your <br /> saved data will be permanently deleted.</p>
        <div className='group mt-[1.5rem] w-fit cursor-pointer'>
            <h3 className=' text-[1.125rem] font-bold text-danger'>Delete Account</h3>
            <div className='bg-danger h-[1px] w-0 group-hover:w-full duration-[0.5s]'/>
        </div>
      </div>
    </div>
  )
}

export default AccountSection