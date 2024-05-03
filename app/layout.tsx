import '@/styles/globals.css'
import { ReactNode } from 'react'
import Head from 'next/head'

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
          <Head>
            {/* Google Tag Manager */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-T556JXL3');
                `,
              }}
            />
            {/* Google Tag Manager (noscript) */}
            <noscript
              dangerouslySetInnerHTML={{
                __html: `
                  <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-T556JXL3"
                    height="0"
                    width="0"
                    style="display:none;visibility:hidden"
                  ></iframe>
                `,
              }}
            />
          </Head>
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