'use client'

import { useSectionRefs } from '../SectionContext'

import { MouseParallax } from "react-just-parallax"
import Image from "next/image"

import AboutCard from "./AboutCard"
import Rating from "./Rating/Rating"
import WhatIs from "./WhatIs/WhatIs"
import ChartCard from "./PieChart/ChartCard"
import Created from "./Created/Created"
import MotionEye from "./MotionEye/MotionEye"

const About: React.FC = () => {

  const { aboutRef } = useSectionRefs();

  return (
    <div ref={aboutRef} id="about" className="bg-body-bg relative sm:pt-[12rem] pt-[6rem] mt-[3rem] w-full flex justify-center">

      
      <div className="relative w-full md:max-w-full max-w-[40rem] flex md:flex-row flex-col gap-[1.5rem] justify-center items-center">

    {/* Heart */}
      <div className="absolute z-[10] lg:w-[23rem] md:w-[20vw] ss:w-[22rem] xs:w-[50vw] w-[60vw]  md:right-[49%] md:bottom-[-7%] xs:right-[-5%] right-[-15%] xs:bottom-[65%] bottom-[62%]">
          <MouseParallax
            strength={0.03}
            enableOnTouchDevice={false}
            shouldResetPosition>
          <Image
              width={300}
              height={300}
              draggable={false}
              src="/images/heart.png"
              alt="star"
              style={{
                width: '100%',
              }}
            />
          </MouseParallax>
        </div>
      {/* Heart */}


        <div className="w-full flex md:flex-col flex-col-reverse gap-[1.5rem] max-w-[42rem]">
          <AboutCard height={11} needsCover={false}>
            <Rating />
          </AboutCard>
          
          <AboutCard height={23.5} needsCover={true}>
            <WhatIs />
          </AboutCard>
        </div>

        <div className="w-full flex flex-col gap-[1.5rem] max-w-[42rem]">
          <AboutCard height={23.5} needsCover={false}>
            <ChartCard />
          </AboutCard>

          <div className="flex gap-[1.5rem]">
            <div className="flex-[2.5]">
              <AboutCard height={11} needsCover={false}>
                <Created />
              </AboutCard>
            </div>

            <div className="flex-1">
              <AboutCard height={11} needsCover={false}>
                <MotionEye />
              </AboutCard>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default About