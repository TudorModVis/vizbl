"use client"

import { ReactNode } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

const SmoothScroll = ({ children } : { children: ReactNode }) => {
    return (
    <ReactLenis root>
      { children }
    </ReactLenis>
    )
}

export default SmoothScroll