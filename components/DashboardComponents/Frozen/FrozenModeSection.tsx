import FrozenModeSelect from "./FrozenModeSelect"

const FrozenModeSection:React.FC = () => {
  return (
    <div className='mt-[1.5rem] w-full p-[1.5rem] boder-gray-border border rounded-[0.5rem] bg-card-bg flex gap-[1.5rem]'>
      <div>
        <h3 className='uppercase text-[1.125rem] font-bold text-gray-border'>FROZEN MODE</h3>
        <p className='font-[500] text-[1rem] text-gray-border mt-[0.5rem]'>Everyone in your friend list will see your last viewed video prior to being frozen and you will no longer see anyone's live viewings.</p>
        <FrozenModeSelect />
        <h3 className='uppercase text-[1.125rem] font-bold text-gray-border mt-[2rem]'>Notifications</h3>
        <p className='font-[500] text-[1rem] text-gray-border mt-[0.5rem]'>You can turn on/off the notifications sound from the extension.</p>
      </div>
    </div>
  )
}

export default FrozenModeSection