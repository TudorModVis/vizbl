import DeleteAccBtn from "./DeleteAccBtn"
import LogOutBtn from "./LogOutBtn"
import CardLoader from "../CardLoader"


const AccountSection:React.FC = () => {

  return (
    <CardLoader>
        <div>
          <h3 className='uppercase text-[1.125rem] font-bold text-gray-border'>ACCOUNT MANAGMENT</h3>
          <LogOutBtn />
          <h3 className='uppercase text-[1.125rem] font-bold text-gray-border'>DeactivatION</h3>
          <p className='font-[500] text-[1rem] text-gray-border mt-[0.5rem]'>This account will no longer be available, and all your <br /> saved data will be permanently deleted.</p>
          <DeleteAccBtn />
        </div>
    </CardLoader>
  )
}

export default AccountSection