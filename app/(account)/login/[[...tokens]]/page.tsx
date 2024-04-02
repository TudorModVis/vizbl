'use client'

import { redirect } from 'next/navigation';
import Link from 'next/link';

import { useState } from 'react';
import PasswordField from '../../shared/PasswordField';
import EmailField from '../../shared/EmailField';
import React from 'react';
import ResetPasswordPanel from '../../shared/ResetPasswordPanel';
import { useGoogleLogin } from '@react-oauth/google';

export default function login ({ params }: { params: { tokens: []} }) {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState<string | null>(null);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState<string | null>(null);

    const [forgotPasswordPanel, setForgotPasswordPanel] = useState(false);

    const checkPassword = () => {
        if (password === '') {
            setPasswordError('*This field is required');
            return 'error';
        }

        if (password.length < 8) {
            setPasswordError('*Password is too short');
            return 'error';
        }

        return 'ok';
    }

    const checkEmail = () => {
        if (email === '') {
            setEmailError('*This field is required');
            return 'error';
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError('*Email is not valid');
            return 'error';
        }

        return 'ok';
    }

    const sendLoginData = () => {
        if (checkEmail() === 'error' || checkPassword() === 'error') {
            return;
        }

        fetch("https://server.studiomodvis.com/api/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
        .then(res => res.json())
        .then(data => {
            if (data.id !== undefined) {
                redirect('/invite');
            }
            data.type === 'email' ? setEmailError(data.msg) : setPasswordError(data.msg);
        });
    }

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
          console.log(tokenResponse);  
        },
        onError: errorResponse => console.log(errorResponse),
      });

    return (
        <>
            {forgotPasswordPanel && <ResetPasswordPanel setResetPasswordPanel={setForgotPasswordPanel} email={null}/>}
            <img src="/images/bg.png" alt="background color" className="absolute w-full h-screen object-cover -z-10 left-0 top-0"/>
            <div className='flex justify-center items-center h-screen'>
                <div className='w-[22.5rem] mt-24'>
                    <p className='text-[2.5rem] leading-[110%] font-bold mb-1 text-center relative z-10'>WELCOME TO</p>
                    <div className='relative'>
                        <img src="/images/login/star.gif" alt="star gif" className='absolute top-0 -translate-y-full h-44 left-1/2 -translate-x-1/2'/>
                        <img src="/images/login/logo.png" alt="logo" className='w-[22.5rem] mx-auto' />
                    </div>
                    <p className='mb-8 mt-4 leading-[140%] text-base font-bold text-gray text-center'>Sign in or create an account. <span className='text-white'>It’s free and fun!</span></p>
                    <form action="" method="post" onSubmit={(event) => {event.preventDefault(); sendLoginData();}}>
                        <EmailField email={email} setEmail={setEmail} error={emailError} setError={setEmailError}/>
                        <PasswordField password={password} setPassword={setPassword} error={passwordError} setError={setPasswordError}/>
                        <p className='text-[12px] lg:text-sm leading-[140%] font-medium mb-6 cursor-pointer transition duration-200 hover:opacity-75 w-fit' onClick={() => {setForgotPasswordPanel(true)}} >Forgot password?</p>
                        <button className='w-full max-h-[48px] py-4 lg:py-3 text-black font-medium lg:font-bold rounded-lg text-center bg-white border border-white hover:border-gray hover:bg-transparent transition duration-200 hover:text-white'>Log in</button>
                    </form>
                    <div className="flex gap-4 items-center w-full my-2">
                        <div className='h-[1px] bg-gray flex-1'></div>
                        <p className='text-gray'>or</p>
                        <div className='h-[1px] bg-gray flex-1'></div>
                    </div>
                    <button className='w-full max-h-[48px] py-4 lg:py-3 text-black font-medium lg:font-bold rounded-lg relative text-center bg-white mb-4 border border-white hover:border-gray hover:bg-transparent transition duration-200 hover:text-white' onClick={() => {googleLogin()}}>
                        <img src="/images/login/google.png" alt="google icon" className='absolute w-8 left-5 top-1/2 -translate-y-1/2'/>
                        Sign in with Google
                    </button>

                    <div className="flex justify-center">
                        <p className='font-medium text-gray text-[14px] lg:text-base'>Don’t have an account yet?&nbsp;</p>
                        <Link href="/signup" className='font-bold hover:opacity-75 transition duration-200 text-[14px] lg:text-base'>Sign up</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

// const authorize = async () => {
//     const redirectURL = browser.identity.getRedirectURL('index.html');
//     const { oauth2 } = browser.runtime.getManifest();
//     const clientId = oauth2.client_id;

//     const authParams = new URLSearchParams({
//         client_id: clientId,
//         response_type: 'token',
//         redirect_uri: redirectURL,
//         scope: oauth2.scopes.join(' '),
//     });

//     const authURL = `https://accounts.google.com/o/oauth2/v2/auth?${authParams.toString()}`;

//     browser.identity.launchWebAuthFlow({ interactive: true, url: authURL }).then( async (responseUrl: string) => {
//         const url = new URL(responseUrl);
//         const urlParams = new URLSearchParams(url.hash.slice(1));
//         const params = Object.fromEntries(urlParams.entries());

//         fetch("https://server.studiomodvis.com/api/google-auth", {
//             method: "POST",
//             mode: "cors",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 token: params.access_token
//             }),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 browser.storage.local.set({
//                     "userData" : JSON.stringify(data)
//                 });
//                 redirect('/invite');
//             })
//             .catch(error => console.error('Error:', error));

//       });
// }