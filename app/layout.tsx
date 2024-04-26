import '@/styles/globals.css'
import 'react-image-crop/dist/ReactCrop.css'
import { ReactNode } from 'react'

import { SmoothScroll} from '@/components'
import { GoogleOAuthProvider } from '@react-oauth/google'

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
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID !== undefined ? process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID : '';

  return (
    <html lang='en'>
          <body className='bg-body-bg relative'>
            <GoogleOAuthProvider clientId={clientId}>
              <SmoothScroll>
                    {children}
                </SmoothScroll>
            </GoogleOAuthProvider>
          </body>
    </html>
  )
}

export default RootLayout