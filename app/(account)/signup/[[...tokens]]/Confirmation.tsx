import { useState } from "react";
import Countdown from "./Countdown";

export default function Confirmation ({email}: {email:string}) {
    const [disabled, setDisabled] = useState(false);

    const resendEmail = () => {
        fetch("https://api.myvizbl.com/api/resend-email", {
            method: "POST",
            body: JSON.stringify({email: email}),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then (res => {if (res.ok) setDisabled(true);})
        .catch (err => console.error(err));
    }
      
    return(
        <>
            <img src="/images/bg.png" alt="background color" className="absolute w-full h-full object-cover -z-10 left-0 top-0"/>
            <div className='flex justify-center items-center h-screen'>
                <div className="flex flex-col items-center relative">
                    <img src="../images/login/mail.gif" alt="mail" className="w-52 mb-4"/>
                    <p className="text-[4rem] leading-none mb-12 text-center font-bold">VERIFY YOUR EMAIL</p>
                    <p className="text-gray text-2xl font-bold leading-[140%] text-center mb-6">We have sent a verification link to <span className="text-white">{email}</span></p>
                    <p className="text-gray text-2xl font-bold leading-[140%] text-center mb-12">Click the link to verify your account. <br/> You might need to <span className="text-white">check your spam.</span></p>
                    <button className="py-4 lg:py-[0.875rem] text-base px-12 colored-button border border-white font-bold disabled:opacity-50 disabled:pointer-events-none" disabled={disabled} onClick={resendEmail}>RESEND EMAIL</button>
                    {disabled && <Countdown expiryTimestamp={new Date(Date.now() + 59000)} setDisabled={setDisabled}/>}
                </div>
            </div>
        </>
    );
}