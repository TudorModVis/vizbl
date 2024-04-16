import '@/styles/globals.css'
import { ReactNode } from 'react'

import { SmoothScroll} from '@/components'

export const metadata = {
  metadataBase: new URL('https://myvizbl.com/'),
  title: "ViZBL | Get to Know Your Friends",
  description: 'Ever wondered what your friends watch on YouTube? Well, the ViZBL Extension allows you to share that!',
  twitter: {
    card: 'summary_large_image',
    title: 'ViZBL | Get to Know Your Friends',
    description: 'Ever wondered what your friends watch on YouTube? Well, the ViZBL Extension allows you to share that!',
    images: ['https://myvizbl.com/twitter-image.jpg'],
  },
  openGraph: {
    title: 'ViZBL | Get to Know Your Friends',
    description: 'Ever wondered what your friends watch on YouTube? Well, the ViZBL Extension allows you to share that!',
    type: 'website',
    url: 'https://myvizbl.com',
    images: ['/opengraph-image.jpg'],
  },
}

const RootLayout = ({ children } : { children: ReactNode }) => {

  return (
    <html lang='en'>
        <head>
          <meta name="viewport" content="height=device-height, 
                        width=device-width, initial-scale=1.0, 
                        minimum-scale=1.0, maximum-scale=1.0, 
                        user-scalable=no, target-densitydpi=device-dpi"/>
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