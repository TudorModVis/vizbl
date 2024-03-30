'use client'

import ChartRollNumbers from "./ChartRollNumbers";
import DiskSvg from "./DiskSvg"
import { useState } from "react";

const ChartCard = () => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full select-none h-full sm:p-[2rem] p-[1rem] flex justify-between items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>

      <div className="h-full">
        <div className="w-full flex justify-between items-start">
          <h2 className="text-custom-white uppercase xs:text-[2.5rem] xxs:text-[2.3rem] text-[2rem] font-[500] leading-[120%]">
            INCREASE <br className="ss:hidden"/> YOUR 
            FUN <br className="ss:hidden"/> WATCHING <br className="ss:hidden"/>
            YOUTUBE
          </h2>

          <div className="relative aspect-square xs:h-[12.5rem] xxs:h-[11rem] h-[9.5rem] ss:hidden">
            <DiskSvg isHovered={isHovered} gradID="gradient2"/>
            <ChartRollNumbers isHovered={isHovered}/>
          </div>
        </div>
        
        <p className="ss:w-[18.75rem] ss:mr-[0.7rem] font-[500] mt-[1.5rem] text-gray-border text-[1rem]">
          Our latest surveys have shown that users are enjoying YouTube even more with ViZBL.
        </p>
        <p className="ss:w-[18.75rem] font-[500] text-gray-border text-[1rem] mt-[1rem]">
          Become part of our community, where watching videos is much more enjoyable?
        </p>
      </div>

      <div className="relative aspect-square w-full max-ss:hidden">
        <DiskSvg isHovered={isHovered} gradID="gradient1"/>
        <ChartRollNumbers isHovered={isHovered}/>
      </div>

    </div>
  )
}

export default ChartCard