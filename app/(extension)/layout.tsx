import '@/styles/globals.css'
import '@/styles/extension.css'
import { ReactNode } from 'react'

import { SmoothScroll} from '@/components'

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'ViZBL | Get to Know Your Friends.',
  description: 'Ever wondered what your friends watch on YouTube? Well, the ViZBL Extension allows you to share that!',
  openGraph: {
    title: 'ViZBL | Get to Know Your Friends.',
    description: 'Ever wondered what your friends watch on YouTube? Well, the ViZBL Extension allows you to share that!',
    image: 'url/image.png'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@eMartiiin94',
    title: 'Title webtsite',
    description: 'this is the desciption',
    image: 'url/image.png'
  }
}

const ExtensionLayout = ({ children } : { children: ReactNode }) => {

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

export default ExtensionLayout;