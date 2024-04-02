'use client'

import { useEffect, useState } from "react"
import PasswordField from "./PasswordField";
import LinkState from "@/app/(extension)/shared/LinkState";

export default function Page({ params }: { params: { token: string, email: string } }) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [newPasswordError, setNewPasswordError] = useState<string | null>(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);

    const [pageContent, setPageContent] = useState<string | null>(null);
    useEffect(() => {
        fetch("https://server.studiomodvis.com/api/reset-password?token=" + params.token + "&email=" + decodeURIComponent(params.email), {
            credentials: 'include'
        })
        .then(res => {
           res.ok ? setPageContent('password') : setPageContent('invalid');
        });
    }, []);

    const checkNewPassword = () => {
        if (newPassword === '') {
            setNewPasswordError('*This field is required');
            return 'error';
        }

        if (!/^(?=.*[1-9])[0-9a-zA-Z]{8,16}$/.test(newPassword)) {
            setNewPasswordError('*Password must be 8-16 characters long and contain at least one digit.');
            return 'error';
        }

        return 'ok';
    }

    const checkConfirmPassword = () => {
        if (confirmPassword !== newPassword) {
            setConfirmPasswordError('*Passwords do not match');
            return 'error';
        }

        return 'ok';
    }

    const sendLoginData = () => {
        if (checkNewPassword() === 'error' || checkConfirmPassword() === 'error') {
            return;
        }

        fetch("https://server.studiomodvis.com/api/reset-password", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify({
                token: params.token,
                email: decodeURIComponent(params.email),
                password: confirmPassword
            }),
        })
        .then(res => {
            if (res.ok) {
                setPageContent('success');
            }
        })
    }

    let contentToLoad = <div className="w-[40rem] flex flex-col items-center pt-6 pb-12 px-16">
    <img src="/images/models/lock.png" alt="lock" className="w-60" />
    <p className="font-bold text-5xl leading-[140%] mb-6">RESET PASSWORD</p>
    <p className="text-gray font-bold leading-[140%] text-center mb-12 small">Write a new password that doesn’t match your previous one. (and remember it this time)</p>
    <PasswordField label="New Password*" password={newPassword} setPassword={setNewPassword} error={newPasswordError} setError={setNewPasswordError}/>
    <PasswordField label="Confirm New Password*" password={confirmPassword} setPassword={setConfirmPassword} error={confirmPasswordError} setError={setConfirmPasswordError}/>
    <button className="mt-[1.7rem] py-4 w-44 colored-button border border-transparent hover:border-white font-bold" onClick={sendLoginData}>Continue</button>
</div>;

    switch (pageContent) {
        case 'invalid': contentToLoad = <LinkState title="THE LINK HAS EXPIRED" text="Your verification link has expired, if you still want to reset your password send another link." succes={false} />; break;
        case 'success': contentToLoad = <LinkState title="YOUR NEW PASSWORD IS SET" text="Your password has been successfully modified. Enjoy the extension and don’t forget it this time." text2="" succes={true} />; break;
    }

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