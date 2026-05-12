import FrozenModeSelect from "./FrozenModeSelect"
import Notifications from "./Notifications"
import CardLoader from "../CardLoader"

const FrozenModeSection:React.FC = () => {
  return (
    <CardLoader>
      <div>
        <h3 className='uppercase text-[1.125rem] font-bold text-gray-border'>FROZEN MODE</h3>
        <p className='font-[500] text-[1rem] text-gray-border mt-[0.5rem]'>Everyone in your friend list will see your last viewed video prior to being frozen and you will no longer see anyone's live viewings.</p>
        <FrozenModeSelect />
        <h3 className='uppercase text-[1.125rem] font-bold text-gray-border mt-[2rem]'>Notifications</h3>
        <p className='font-[500] text-[1rem] text-gray-border mt-[0.5rem]'>You can turn on/off the notifications sound from the extension.</p>
        <Notifications />
      </div>
    </CardLoader>
  )
}

export default FrozenModeSection