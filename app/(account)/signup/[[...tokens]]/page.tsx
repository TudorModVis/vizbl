'use client'

import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { useState } from 'react';
import PasswordField from '../../shared/PasswordField';
import EmailField from '../../shared/EmailField';
import React from 'react';
import Confirmation from './Confirmation';
import { useGoogleLogin } from '@react-oauth/google';

export default function signup ({ params }: { params: { tokens: string[]} }) {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState<string | null>(null);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState<string | null>(null);

    const [confirmation, setConfirmation] = useState(false);
    const router = useRouter();

    const checkPassword = () => {
        if (password === '') {
            setPasswordError('*This field is required');
            return 'error';
        }

        if (!/^(?=.*[1-9])[0-9a-zA-Z]{8,16}$/.test(password)) {
            setPasswordError('*Password must be 8-16 characters long and contain at least one digit.');
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

        fetch("https://api.myvizbl.com/api/signup", {
            method: "POST",
            mode: "cors",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                source: 'web'
            }),
        })
        .then(res => res.json())
        .then(data => {
            if (data.id !== undefined) {
                if (params.tokens === undefined) {
                    router.push("/authenticated");
                } else {
                    setConfirmation(true);
                }
            } else {
                setEmailError(data.msg);
            }
        });
    }

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
          console.log(tokenResponse);  
          fetch("https://api.myvizbl.com/api/google-auth", {
            method: "POST",
            mode: "cors",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token: tokenResponse.access_token
            }),
        })
            .then((res) => {
                if (res.ok) {
                    if (params.tokens === undefined) {
                        router.push("/authenticated");
                    } else {
                        router.push('/invite/' + params.tokens[0])
                    }
                }
            })
            .catch(error => console.error('Error:', error));
        },
        onError: errorResponse => console.log(errorResponse),
      });

    return (
        <>
            <img src="/images/bg.png" alt="background color" className="absolute w-full h-full object-cover -z-10 left-0 top-0"/>
            <div className='flex justify-center items-center h-screen'>
                {confirmation ? 
                    <Confirmation email={email}/> :
                    <div className='w-[22.5rem] mt-24 mb-16'>
                        <p className='text-[2.5rem] leading-[110%] font-bold mb-1 text-center relative z-10'>WELCOME TO</p>
                        <div className='relative'>
                            <img src="/images/login/star.gif" alt="star gif" className='absolute top-0 -translate-y-full h-44 left-1/2 -translate-x-1/2'/>
                            <img src="/images/login/logo.png" alt="logo" className='w-[22.5rem] mx-auto' />
                        </div>
                        <p className='mb-8 mt-4 text-base leading-[140%] font-bold text-gray text-center'>Sign in or create an account. <span className='text-white'>It’s free and fun!</span></p>
                        <form className='relative' onSubmit={(event) => {event.preventDefault(); sendLoginData();}}>
                            <EmailField email={email} setEmail={setEmail} error={emailError} setError={setEmailError}/>
                            <PasswordField password={password} setPassword={setPassword} error={passwordError} setError={setPasswordError}/>
                            <button className='w-full max-h-[48px] font-medium py-4 lg:py-3 text-black rounded-lg text-center bg-white border border-white hover:border-gray hover:bg-transparent transition duration-200 hover:text-white lg:font-bold mt-10'>Sign up & Accept</button>
                        </form>
                        <div className="flex gap-4 items-center w-full my-2">
                            <div className='h-[1px] bg-gray flex-1'></div>
                            <p className='text-gray'>or</p>
                            <div className='h-[1px] bg-gray flex-1'></div>
                        </div>
                        <button className='w-full max-h-[48px] font-medium py-4 lg:py-3 text-black lg:font-bold rounded-lg relative text-center bg-white mb-4 border border-white hover:border-gray hover:bg-transparent transition duration-200 hover:text-white' onClick={() => {googleLogin()}}>
                            <img src="/images/login/google.png" alt="google icon" className='absolute w-8 left-5 top-1/2 -translate-y-1/2'/>
                            Sign in with Google
                        </button>

                        <div className="flex justify-center">
                            <p className='font-medium text-gray text-[14px] lg:text-base'>Already have an account?&nbsp;</p>
                            <Link href={params.tokens === undefined ? "/login" : `/login/${params.tokens[0]}`} className='font-bold hover:opacity-75 transition duration-200 text-[14px] lg:text-base'>Log in</Link>
                        </div>
                        <div className="flex items-center gap-2 fixed bottom-12 left-1/2 -translate-x-1/2">
                            <img src="/images/login/tick.svg" alt="tick" className="w-[1.125rem] aspect-square"/>
                            <p className='leading-none font-medium text-gray text-base'>By signing up you accept the <a href='' className='cursor-pointer transition duration-200 hover:opacity-75 font-bold text-white'>Terms of Service and Privacy Policy</a></p>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}