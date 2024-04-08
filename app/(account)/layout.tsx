import '@/styles/globals.css'
import '@/styles/extension.css'
import { ReactNode } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';

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
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID !== undefined ? process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID : '';
  return (
    <html lang='en'>
        <head>
          <meta name="viewport" content="height=device-height, 
                        width=device-width, initial-scale=1.0, 
                        minimum-scale=1.0, maximum-scale=1.0, 
                        user-scalable=no, target-densitydpi=device-dpi"/>
        </head>

          <body className='bg-body-bg relative'>
            <GoogleOAuthProvider clientId={clientId}>
                {children}
            </GoogleOAuthProvider>;
          </body>

    </html>
  )
}

export default ExtensionLayout;