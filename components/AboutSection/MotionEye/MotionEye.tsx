'use client'

import { useRef } from 'react';
import Image from 'next/image';

const MotionEye = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className='w-full h-full aspect-square flex items-center justify-center'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        <Image
          unoptimized
          width={255}
          height={255}
          draggable={false}
          src="/gifs/eye.gif"
          alt='motion_eye'
          className='sm:w-[8.5rem] xs:w-[7.5rem] w-[5rem] aspect-square '
          />
    </div>
  );
};

export default MotionEye;