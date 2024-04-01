import '@/styles/globals.css'
import { ReactNode } from 'react'

import { SmoothScroll } from '@/components'

export const metadata = {
    title: "Vizbl"
}

const RootLayout = ({ children } : { children: ReactNode }) => {

  return (
    <html lang='en'>
        <head>
          <meta name="viewport" content="height=device-height, 
                        width=device-width, initial-scale=1.0, 
                        minimum-scale=1.0, maximum-scale=1.0, 
                        user-scalable=no, target-densitydpi=device-dpi"/>

          {/* <!-- Primary Meta Tags -->  */}
          <title>ViZBL | Get to Know Your Friends.</title> 
          <meta name="title" content="ViZBL | Get to Know Your Friends." /> 
          <meta name="description" content="Ever wondered what your friends watch on YouTube? Well, the ViZBL Extension allows you to share that! " /> 
          
          {/* <!-- Open Graph / Facebook -->  */}
          <meta property="og:type" content="website" /> 
          <meta property="og:url" content="https://myvizbl.com/" /> 
          <meta property="og:title" content="ViZBL | Get to Know Your Friends." /> 
          <meta property="og:description" content="Ever wondered what your friends watch on YouTube? Well, the ViZBL Extension allows you to share that! " /> 
          
          {/* <!-- Twitter -->  */}
          <meta property="twitter:card" content="summary_large_image" /> 
          <meta property="twitter:url" content="https://myvizbl.com/" /> 
          <meta property="twitter:title" content="ViZBL | Get to Know Your Friends." /> 
          <meta property="twitter:description" content="Ever wondered what your friends watch on YouTube? Well, the ViZBL Extension allows you to share that! " /> 
        </head>

          <body className='bg-body-bg relative'>
              <SmoothScroll>
                {children}
              </SmoothScroll>
          </body>

    </html>
  )
}

export default RootLayout