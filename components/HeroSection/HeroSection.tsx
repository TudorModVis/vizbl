import MainStar from "./MainStar"
import Image from "next/image"
import GradientButton from "../GradientButton"

const HeroSection: React.FC = () => {
  return (
      <div className='md:h-[70vh] ssm:h-[80vh] select-none flex justify-center mt-[3.5rem] relative bg-body-bg'>
        {/* 3D star - ei deja nu 3D*/}
          <MainStar />

          {/* Main Star on mobile */}
          
        {/* 3D star */}

        <div className="w-full max-md:max-w-[60rem] h-full flex flex-col smm:justify-between max-smm:gap-[25vh]">

          <div className="flex ss:flex-row gap-[1rem] flex-col-reverse justify-between">
            <div className="xl:text-[15vh] md:text-[14vh] sm:text-[7rem] text-[5rem] text-custom-white font-bold">
              <h1 className="leading-[75%]">GET TO</h1>
              <h1 className="lg:ml-[11rem] md:ml-[9rem] smm:ml-[6rem] leading-[145%]">KNOW</h1>
            </div>

            <div className="max-ss:hidden text-right text-custom-white font-[500] smm:text-[1.5rem] text-[1.2rem] leading-normal">
              <p>SHARE YOUR VIDEO ACTIVITY WITH</p>
              <p>FRIENDS AND INTERACT</p>
              <div className="flex gap-[0.9rem] items-center justify-end">
                <img 
                  src="/icons/star-white.svg"
                  alt="star"
                  width={18}
                  height={18}/>
                <div className="w-[13rem] h-[1px] bg-custom-white text-right" />
                <p>WITH THEM</p>
              </div>
            </div>
          </div>


          <div className="flex ss:flex-row gap-[1rem] flex-col-reverse justify-between items-end">
              <div className="text-left w-full flex flex-col text-custom-white font-[500] smm:text-[1.5rem] text-[1.2rem] leading-normal">
                <div className="max-ss:hidden w-full">
                  <div className="flex items-center gap-[0.9rem]">
                    <p>EVER WANTED TO KNOW</p>
                    <div className="w-[6rem] h-[1px] bg-custom-white text-left" />
                  </div>
                  <p>YOUR FRIENDS' VIDEO INTERESTS?</p>
                </div>
                  <div className="mt-[1.5rem] w-full flex ss:justify-start justify-center">
                    <GradientButton text="INSTALL NOW - IT'S FREE" route="https://chromewebstore.google.com/detail/vizbl-get-to-know-your-fr/lcaeomijnkkglaabildphmdinpoodaho"/>
                  </div>
              </div>

            <div className="xl:text-[15vh] md:text-[14vh] sm:text-[7rem] text-[5rem] text-custom-white leading-[10.45rem] font-bold smm:text-left text-right">
              <h1 className="leading-[145%]">YOUR</h1>
              <h1 className="leading-[70%]">FRIENDS</h1>
            </div>
          </div>


        </div>


      </div>
  )
}

export default HeroSection