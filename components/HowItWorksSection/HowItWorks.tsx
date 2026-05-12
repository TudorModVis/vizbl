'use client'

import { useRef, useEffect, useState } from "react"
import { useSectionRefs } from "../SectionContext"
import SectionText from "./SectionText";
import Video from "./Video";
import { useInView } from "framer-motion";
import MobileSection from "./MobileSection";

const HowItWorks: React.FC = () => {

  const { howItWorksRef  } = useSectionRefs();

  const refSec1 = useRef<HTMLDivElement | null>(null)
  const isInViewSec1 = useInView(refSec1, {
    margin: "-40% 0% 0% 0%"
  })

  const refSec2 = useRef<HTMLDivElement | null>(null)
  const isInViewSec2 = useInView(refSec2, {
    margin: "-40% 0% -40% 0%"
  })

  const refSec3 = useRef<HTMLDivElement | null>(null)
  const isInViewSec3 = useInView(refSec3, {
    margin: "0% 0% -40% 0%"
  })


  return (
    <div className="sm:pt-[9rem] pt-[5rem] pb-[2rem] sm:mt-[5rem] mt-[2rem] bg-body-bg" ref={howItWorksRef} id="how-it-works">
        <div className="smm:px-[6rem] px-[0rem]">
          <div className="w-full flex justify-center sm:mb-[10rem] mb-[6rem]">
            <div className="text-custom-white uppercase text-[4rem] font-[600] w-[55rem] max-mmd:hidden">
              <div className="flex gap-[2rem] items-center">
                <h1>How does the</h1>
                <div className="w-[24rem] h-[1px] bg-custom-white" />
              </div>
              <div className="flex justify-end">
                <h1>Extension work</h1>
              </div>
            </div>

            {/* Tittle for mobile */}
            <div className="text-custom-white mmd:hidden uppercase sm:text-[4rem] text-[3rem] font-[600] w-full max-sm:max-w-[30rem]">
                <h1>How does</h1>
              <div className="flex flex-col items-end">
                <h1>the extension</h1>
                <div className="w-full flex gap-[1rem] items-center">
                  <div className="w-full h-[1px] bg-custom-white" />
                  <h1>work</h1>
                </div>
              </div>
            </div>

          </div>

            {/* Cardurile pe mobil */}
            <MobileSection />

            {/* cardurile */}
            <div className="flex w-full justify-center max-sm:hidden">
              <div className="w-full max-w-[70rem]">
                  <div className="h-[31.25rem] flex justify-between items-center mb-[6rem]"
                    ref={refSec1}>
                    {
                      isInViewSec1 ? (
                        <Video videoPath="/gifs/addFriend.mp4"/>
                      ) : <div></div>
                    }

                    <SectionText
                      imageTop={-8.5}
                      imageRight={-2}
                      color="#FDA2FF"
                      imagePath="/images/people.png"
                      imageRotation={10}
                      subtitle="YOU CAN INVITE THEM"
                      title="SEARCH FOR YOUR FRIENDS & ADD THEM IN YOUR FRIEND LIST"
                      text="Easily find and connect with your friends on ViZBL by searching for their usernames or email. Build your friend list effortlessly by adding those you want to share your video experiences with."
                      />
                  </div>

                  <div className="h-[31.25rem] flex justify-between items-center mb-[6rem]"
                    ref={refSec2}>
                    {
                      isInViewSec2 ? (
                        <Video videoPath="/gifs/watchFriend.mp4"/>
                      ) : <div></div>
                    }

                    <SectionText
                      imageTop={-7.25}
                      imageRight={-2}
                      color="#299DED"
                      imagePath="/images/magn_glass.png"
                      imageRotation={0}
                      subtitle="GET TO KNOW THEM"
                      title="EASILY SHARE YOUR FRIEND'S YOUTUBE ACTIVITY"
                      text="Share your latest video discoveries and favorite content with your friends on ViZBL in just a few clicks. Keep your friends updated on what you're watching, fostering discussions and recommendations."
                      />
                  </div>

                  <div className="h-[31.25rem] flex justify-between items-center"
                    ref={refSec3}>
                    {
                      isInViewSec3 ? (
                        <Video videoPath="/gifs/emojiFriend.mp4"/>
                      ) : <div></div>
                    }

                    <SectionText
                      imageTop={-6.85}
                      imageRight={-6}
                      color="#782AD5"
                      imagePath="/images/like.png"
                      imageRotation={0}
                      subtitle="LET THEM KNOW YOU FOLLOW"
                      title="INTERACT AND SEND EMOJIS - LET THEM KNOW YOU FOLLOW"
                      text="Express yourself and react to videos through a wide range of  emojis available on ViZBL. Connect on a deeper level by using emojis to convey emotions, opinions, and reactions, making your shared video experiences even more enjoyable."
                      />
                  </div>

                </div>
              </div>


        </div>

    </div>
  )
}

export default HowItWorks