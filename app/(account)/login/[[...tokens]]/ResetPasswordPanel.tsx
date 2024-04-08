import { useState } from "react";
import PasswordInput from "../../shared/PasswordInput";

interface ResetPasswordPanelProps {
    setResetPasswordPanel: (value: boolean) => void,
}

const ResetPasswordPanel:React.FC<ResetPasswordPanelProps> = ({setResetPasswordPanel}) => {
    const [confirmation, setConfirmation] = useState(false);
    const [newEmail, setNewEmail] = useState('');
    const [emailError, setEmailError] = useState<string | null>(null);

    const checkEmail = () => {
        if (newEmail === '') {
            setEmailError('*This field is required');
            return 'error';
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(newEmail)) {
            setEmailError('*Email is not valid');
            return 'error';
        }

        return 'ok';
    }

    const sendEmail = () => {
        if (checkEmail() === 'error') return;

        fetch("https://api.myvizbl.com/api/send-reset-password-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify({
                email: newEmail
            }),
        })
        .then(res => {
            if (res.ok) setConfirmation(true)
            else setEmailError('*Account with this email does not exist')
        })
        .catch(err => console.error(err));
    }
    
    return (
        <div className="fixed w-full h-full left-0 top-0 flex justify-center items-center bg-semi-black bg-opacity-75 z-50" onClick={() => {setResetPasswordPanel(false)}}>
            <div className="bg-semi-black border border-gray rounded-[5px] p-6 w-[25.8rem] bounce" onClick={(e) => {e.stopPropagation()}}>
                {confirmation ? <Confirmation setPasswordPanel={setResetPasswordPanel} email={newEmail}/> : 
                    <>
                        <p className="font-medium leading-[140%] mb-1 text-2xl">Forgot your password?</p>
                        <p className="font-medium leading-[140%] text-gray mb-6 text-base">Don’t worry, write your email address and we’ll send you an link to reset your password.</p>
                        <PasswordInput  password={newEmail} setPassword={setNewEmail} error={emailError} setError={setEmailError} label="Email" endDecorator={false} placeholder=""/>
                        <div className="flex justify-end mt-8">
                            <button onClick={() => {setResetPasswordPanel(false)}} className="px-4 py-2 leading-[140%] border border-transparent font-medium text-base">Cancel</button>
                            <button onClick={sendEmail} className="border border-transparent transition duration-200 hover:border-white colored-button small leading-[140%] font-medium px-5 py-[0.625rem] rounded-[4px] text-base">Reset password</button>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

const Confirmation = ({setPasswordPanel, email}: {setPasswordPanel: (value: boolean) => void, email: string}) => {
    return (
        <div className="w-full px-2 flex pt-2 items-center flex-col relative">
            <img src="../images/login/mail.gif" alt="mail" className="w-32"/>
            <p className="text-2xl leading-[140%] font-medium text-center mb-2">VERIFY YOUR EMAIL</p>
            <p className="text-xs leading-[140%] font-medium text-center text-gray mb-4">We have sent a link to <span className="text-white">{email}</span></p>
            <p className="text-xs leading-[140%] font-medium text-center text-gray mb-6">Click the link to reset your password. <br/> You might need to <span className="text-white">check your spam.</span></p>
            <button onClick={() => {setPasswordPanel(false)}} className="border border-transparent transition duration-200 hover:border-white colored-button small text-xs leading-[140%] font-medium px-4 py-2 rounded-[4px]">Done</button>
        </div>
    )
}

export default ResetPasswordPanel;