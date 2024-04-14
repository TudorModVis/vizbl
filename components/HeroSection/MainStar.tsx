'use client'

import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { useState, useEffect } from "react";
import Image from "next/image";

const MainStar: React.FC = () => {

  const [isViewportWidthAboveThreshold, setIsViewportWidthAboveThreshold] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsViewportWidthAboveThreshold(window.innerWidth >= 1280);
    };

    handleResize()

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <div className="absolute w-max left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center z-[0]">
          <MouseParallaxContainer
            enabled={isViewportWidthAboveThreshold}
            globalFactorX={0.03} 
            globalFactorY={0.03}
            inverted
            useWindowMouseEvents
            resetOnLeave={true}
            containerStyle={{
              overflow: 'visible',
            }}>
            <MouseParallaxChild
            >
                <Image
                  unoptimized
                  priority
                  draggable={false}
                  width={813}
                  height={1000}
                  src="/gifs/star.gif"
                  alt="star"
                  className="ss:h-[70vh] h-[37vh] max-ss:mb-[5rem]  max-md:max-h-[30rem]"
                  style={{
                    width: '100%',
                    objectFit: 'contain',
                  }}
                />
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
  );
};

export default MainStar;