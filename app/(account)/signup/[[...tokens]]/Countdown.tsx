"use client"

import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

export default function MyTimer({ expiryTimestamp, setDisabled }: {expiryTimestamp: Date, setDisabled: (value: boolean) => void}) {
  const {
    seconds,
    start,
  } = useTimer({ 
        expiryTimestamp,
        onExpire: () => setDisabled(false)
       })

       useEffect(() => {
        start
       }, []);
  
       return (
        <p className="text-gray text-base leading-[140%] text-center absolute -bottom-8">You can send another email in {String(seconds).padStart(1, "0")} s</p>
      );
}