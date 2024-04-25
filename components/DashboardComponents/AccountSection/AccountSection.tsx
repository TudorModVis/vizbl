import DeleteAccBtn from "./DeleteAccBtn"
import LogOutBtn from "./LogOutBtn"


const AccountSection:React.FC = () => {

  return (
    <div className='w-full p-[1.5rem] boder-gray-border border rounded-[0.5rem] bg-card-bg flex gap-[1.5rem] mt-[1.5rem]'>
      <div>
        <h3 className='uppercase text-[1.125rem] font-bold text-gray-border'>ACCOUNT MANAGMENT</h3>
        <LogOutBtn />
        <h3 className='uppercase text-[1.125rem] font-bold text-gray-border'>DeactivatION</h3>
        <p className='font-[500] text-[1rem] text-gray-border mt-[0.5rem]'>This account will no longer be available, and all your <br /> saved data will be permanently deleted.</p>
        <DeleteAccBtn />
      </div>
    </div>
  )
}

export default AccountSection