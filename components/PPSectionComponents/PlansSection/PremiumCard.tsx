import Link from "next/link";
import SaleSpan from "./SaleSpan";

interface PremiumCardProps{
    plan: string;
    price: number;
}

const PremiumCard:React.FC<PremiumCardProps> = ({ plan, price }) => {
  return (
    <div 
        className="h-fit w-[24rem] rounded-[1.5rem] flex flex-col px-[1px] pb-[1px]"
        style={{
            background: 'linear-gradient(93deg, #FDA2FF -64.38%, #782AD5 48.4%, #52B8FF 158.85%), #F1F1F1'
        }}
    >
        <h3 className="uppercase text-custom-white text-[1rem] font-[500] text-center my-[0.5rem]">Recomended</h3>

        <div className="w-full h-[32rem] bg-card-bg rounded-b-[1.5rem] p-[2rem]">
            <h2 className='uppercase text-custom-white font-bold text-[2.5rem]'>PREMIUM</h2>
            <p className='text-gray-border text-[1.125rem] font-[500] leading-normal'>Maximize the amount of possibilities the extension can offer.</p>

            <div className="relative">
                <SaleSpan plan={plan}/>
  
                <h1 className='mt-[3.25rem] text-custom-white font-[700] text-[2.5rem]'>${price} <span className='text-[1.125rem]'>USD /<span className='font-[500] text-[1rem]'>month, billed annually</span></span></h1>
            </div>

            <Link 
            href="https://chromewebstore.google.com/detail/vizbl-get-to-know-your-fr/lcaeomijnkkglaabildphmdinpoodaho"
            className="w-full h-[3rem] flex justify-center items-center border border-gray-border rounded-[1rem] mt-[1.5rem] text-[1.125rem] text-custom-white font-bold uppercase"
            target="_blank"
            style={{
                background: 'linear-gradient(93deg, #FDA2FF -64.38%, #782AD5 48.4%, #52B8FF 158.85%)'
            }}
            >
                Upgrade now
            </Link>

            <div className="w-full flex gap-[0.5rem] mt-[2rem]">
                <img src="/icons/check.svg" alt="check" draggable={false} />
                <p className="text-gray-border text-[1.125rem] font-[500]">add <span className="text-custom-white">unlimited</span> friends</p>
            </div>

            <div className="w-full flex gap-[0.5rem] mt-[1rem]">
                <img src="/icons/check.svg" alt="check" draggable={false} />
                <p className="text-gray-border text-[1.125rem] font-[500]">send <span className="text-custom-white">20</span> different emojis to others</p>
            </div>

            <div className="w-full flex gap-[0.5rem] mt-[1rem]">
                <img src="/icons/check.svg" alt="check" draggable={false} />
                <p className="text-gray-border text-[1.125rem] font-[500]">change the <span className="text-custom-white">theme</span> of the extension</p>
            </div>
        </div>
    </div>
  )
}

export default PremiumCard