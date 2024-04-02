'use client'

import { useState } from "react";

interface feedbackProps {
    setIsSent: (value: boolean) => void
}

export default function Feedback ({setIsSent}: feedbackProps) {
    const [reasons, setReasons] = useState<Array<string>>([]);
    const [otherCheck ,setOtherCheck] = useState(false);
    const [other, setOther] = useState('');

    const sendFeedback = () => {
        fetch("https://server.studiomodvis.com/api/feedback", {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                reasons, other
            })
        })
        .then(res => {if (res.ok) setIsSent(true)})
        .catch(e => console.error(e));
    }

    return(
        <>
            <p className="font-bold text-[4rem] leading-[140%] mb-4 text-center">THANK YOU FOR USING ViZBL</p>
            <p className="text-gray text-2xl font-medium leading-[140%] text-center mb-12">We are sorry to see you leave! <br/> Can you tell us why are you uninstalling? (select all that apply)</p>
            <form className="flex flex-col" onSubmit={(e) => {e.preventDefault(); sendFeedback();}}>
                <div className="flex gap-16 w-fit mx-auto mb-16">
                    <div className="flex flex-col gap-6">
                        <CheckBox label="I have privacy concerns" id="privacy_concerns" reasons={reasons} setReasons={setReasons}/>
                        <CheckBox label="It is difficult to use/learn" id="difficult_to_learn" reasons={reasons} setReasons={setReasons}/>
                        <CheckBox label="Encountered technical issues (bugs, glitches...)" id="technical_issues" reasons={reasons} setReasons={setReasons}/>
                    </div>
                    <div className="flex flex-col gap-6">
                        <CheckBox label="I did not know what ViZBL Extension is" id="didnt_know_what_it_was" reasons={reasons} setReasons={setReasons}/>
                        <CheckBox label="Does not have the features I need/want" id="does_not_have_features" reasons={reasons} setReasons={setReasons}/>
                        <CheckBox label="Other:" id="other" reasons={reasons} setReasons={setReasons} otherCheck={otherCheck} setOtherCheck={setOtherCheck} other={other} setOther={setOther}/>
                    </div>
                </div>
                <button className="py-4 lg:py-[0.875rem] px-7 colored-button border border-transparent hover:border-white font-bold mx-auto">Submit responses</button>
            </form>
        </>
    )
}

const CheckBox = ({label, id, reasons, setReasons, otherCheck, setOtherCheck, other, setOther}: {label: string, id: string, reasons: Array<string>, setReasons: (value: Array<string>) => void, otherCheck?: boolean, setOtherCheck?: (value: boolean) => void, other?: string, setOther?: (value: string) => void}) => {
    return (
        <div className="flex items-center">
            <label className="relative flex items-center rounded-full cursor-pointer" htmlFor={id}>
                <input type="checkbox"
                className="outline-none before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-md border border-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10"
                id={id}
                checked={id === 'other' ? otherCheck : reasons.includes(id)}
                onChange={
                    id === 'other' && setOtherCheck ? () => {setOtherCheck(!otherCheck)} :
                    (e) => {
                        if (e.target.checked) {
                            setReasons(reasons.concat(id));
                        } else {
                            setReasons(reasons.filter(e => e !== id));
                        }
                    }
                }/>
                <span
                className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#f1f1f1"
                    stroke="#f1f1f1" strokeWidth="1">
                    <path fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"></path>
                </svg>
                </span>
            </label>
            <label className="mt-px font-medium text-white cursor-pointer select-none pl-3 2xl:text-lg leading:[140%]" htmlFor={id}>
                {label}
            </label>
            {id === 'other' && <input type="text" id="reason" className="bg-transparent border-b border-white focus:outline-none ml-3 flex-1 disabled:border-gray disabled:text-gray pb-1" disabled={!otherCheck} value={other} onChange={(e) => {if (setOther) setOther(e.target.value)}}/>}
        </div> 
    )
}