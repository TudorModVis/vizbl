import Link from "next/link"

const FreeCard = () => {
  return (
    <div className='w-[24rem] h-[32rem] bg-card-bg border border-grayborder rounded-[1.5rem] p-[2rem]'>
        <h2 className='uppercase text-custom-white font-bold text-[2.5rem]'>Free</h2>
        <p className='text-gray-border text-[1.125rem] font-[500] leading-normal'>Get a taste of ViZBL and find out what it can do.</p>
        <h1 className='mt-[3.25rem] text-custom-white font-[700] text-[2.5rem]'>0$ <span className='text-[1.125rem]'>USD /<span className='font-[500] text-[1rem]'>month</span></span></h1>
        <Link 
            href="https://chromewebstore.google.com/detail/vizbl-get-to-know-your-fr/lcaeomijnkkglaabildphmdinpoodaho"
            className="w-full h-[3rem] flex justify-center items-center border border-gray-border rounded-[1rem] mt-[1.5rem] text-[1.125rem] text-custom-white font-bold uppercase"
            target="_blank"
        >
            Get Started
        </Link>

        <div className="w-full flex gap-[0.5rem] mt-[2rem]">
            <img src="/icons/check.svg" alt="check" draggable={false} />
            <p className="text-gray-border text-[1.125rem] font-[500]">add only <span className="text-custom-white">10</span> friends</p>
        </div>

        <div className="w-full flex gap-[0.5rem] mt-[1rem]">
            <img src="/icons/check.svg" alt="check" draggable={false} />
            <p className="text-gray-border text-[1.125rem] font-[500]">send <span className="text-custom-white">3</span> different emojis to others</p>
        </div>
    </div>
  )
}

export default FreeCard