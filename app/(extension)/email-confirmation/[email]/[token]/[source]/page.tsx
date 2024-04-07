'use client'

import LinkState from "@/app/(extension)/shared/LinkState";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { token: string, email: string, source: string } }) {
    const [pageContent, setPageContent] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://api.myvizbl/api/email-confirmation?token=" + params.token + "&email=" + decodeURIComponent(params.email), {
            credentials: 'include',
        })
        .then(res => {
           res.ok ? setPageContent('success') : setPageContent('invalid');
        });
    }, []);

    const contentToLoad = pageContent === 'invalid' ? 
    <LinkState title="YOUR VERIFICATION LINK HAS EXPIRED" text="Your verification link has expired, if you aren’t yet verified open the extension to resend the link." succes={false} /> : 
    params.source === 'web' ? <WebLayout /> : <LinkState title="YOUR ACCOUNT HAS BEEN VERIFIED" text="We’ve been able to confirm your identity and now we are sure you did not type a random email." succes={true} />

    if (pageContent === null) {
        return;
    }

    return(
        <div className="w-screen h-screen relative flex justify-center items-center">
            <img src="/images/bg.png" alt="background" className="absolute left-0 top-0 w-full h-full object-cover -z-10"/>
            <img src="/images/logo.png" alt="logo" className="absolute left-[4.5rem] top-12 w-[8.3vw] max-w-40" />
            {contentToLoad}
        </div>
    )
}

const WebLayout = () => {
    return(
        <div className="flex flex-col items-center">
            <img src="/images/models/heart.png" alt="gif" className="w-60 mb-6"/>
            <div className="flex gap-8 items-center">
                <p className="font-bold text-[4rem] leading-none text-center">GREAT! NOW YOU CAN</p>
                <div className="h-[2px] w-72 bg-white"></div>
            </div>
            <p className="font-bold text-[4rem] leading-[140%] mb-12 text-right self-end">INSTALL THE EXTENSION</p>
            <p className="text-gray text-2xl font-bold leading-[140%] text-center mb-12">Add the extension through Google Extension or access the button for a faster redirect. <br/> <br/> <span className="text-white">Let the fun begin - Get to know your friends.</span></p>
            <a href="https://chromewebstore.google.com/detail/vizbl-get-to-know-your-fr/lcaeomijnkkglaabildphmdinpoodaho"><button className="py-4 lg:py-[0.875rem] px-12 colored-button border border-white font-bold disabled:opacity-50 disabled:pointer-events-none">ADD TO CHROME - IT’S FREE</button></a> 
        </div>
    )
}