'use client'

import { useEffect, useState } from "react"
import LinkState from "@/app/(extension)/shared/LinkState"
import { useRouter } from 'next/navigation';

export default function Page ({ params }: { params: { token: string } }) {
    const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);
    const [pageContent, setPageContent] = useState<string | null>(null);
    const [friendImage, setFriendImage] = useState<string>('');

    const router = useRouter();

    useEffect(() => {
        fetch(`https://api.myvizbl.com/api/invite?friend=${params.token}`, {
            credentials: 'include',
        })
        .then (res => res.json())
        .then (data => {
            if (data.status === 400) return setPageContent('invalid');

            setPageContent('main');
            setFriendImage(data.image);
        })  
    }, []);

    useEffect(() => {
        fetch("https://api.myvizbl.com/api/check-user", {
            credentials: 'include',
        })
        .then(res => {
           res.ok ? setIsSignedIn(true) : setIsSignedIn(false);
        });
    }, []);

    if (isSignedIn === null || pageContent === null) return;

    const sendFriendRequest = () => {
        fetch("https://api.myvizbl.com/api/send-friend-request", {
            method: "POST",
            mode: "cors",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                friend: decodeURIComponent(params.token)
            }),
        })
        .then(res => {setPageContent('requestProccesed');})
        .catch(error => console.error('Error when /api/send-friend-request: ', error));
    }

    const declineFriendRequest = () => {
        setPageContent('requestProccesed');
    }

    const buttons = isSignedIn ?
        <div className="flex gap-6">
            <button className="py-4 lg:py-[0.875rem] w-48 colored-button flat border border-white font-bold" onClick={sendFriendRequest}>SEND REQUEST</button>
            <button className="py-4 lg:py-[0.875rem] w-48 border border-white font-bold bg-white bg-opacity-0 hover:bg-opacity-10 rounded-lg transition-all duration-200" onClick={declineFriendRequest}>NO, THANK YOU</button>
        </div> :
        <button className="py-4 lg:py-[0.875rem] px-12 colored-button border border-white font-bold" onClick={() => {router.push(`/signup/${params.token}`);}}>SIGN UP & INSTALL</button>

        let contentToLoad = 
        <>
            <img src="/images/invite/bg-models.png" alt="" className="fixed w-[65vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"/>
                <div className="flex flex-col items-center">
                <div className="relative rounded-lg overflow-hidden border-[2px] border-white bounce mb-12" onClick={(e) => {e.stopPropagation()}}>
                    <img src={friendImage} alt="profile image" className="w-[9.5rem]"/>
                </div>
                <p className="font-bold text-[4rem] leading-[140%] mb-12 text-center">{"@" + decodeURIComponent(params.token)} <br/> WANTS TO BE FRIENDS ON ViZBL </p>
                <p className="text-gray text-2xl font-bold leading-[140%] text-center mb-12"> This person wants to share their YouTube activity with you. <br/> Maybe they’ll also interact with you for much more fun.</p>
                {buttons}
            </div>
        </>;

        if (pageContent === 'requestProccesed') contentToLoad = <LinkState title="WE HAVE PROCESSED YOUR CHOICE" text="Your response was recorded in the extension." text2="Thank you for your time." succes={true} />; 
        if (pageContent === 'invalid') contentToLoad = <LinkState title="THE LINK IS NOT VALID" text="The provided link does not belong to any registered user." text2="Thank you for your time." succes={false} />; 

    return(
        <div className="w-screen h-screen relative flex justify-center items-center">
            <img src="/images/bg.png" alt="background" className="absolute left-0 top-0 w-full h-full object-cover -z-10"/>
            <img src="/images/logo.png" alt="logo" className="absolute left-[4.5rem] top-12 w-[8.3vw] max-w-40" />
            {contentToLoad}
        </div>
    )
}