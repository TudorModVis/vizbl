import { useState } from "react";
import PasswordInput from "./PasswordInput";

interface ResetPasswordPanelProps {
    setResetPasswordPanel: (value: boolean) => void,
    email: string | null,
}

const ResetPasswordPanel:React.FC<ResetPasswordPanelProps> = ({setResetPasswordPanel, email}) => {
    const [confirmation, setConfirmation] = useState(false);
    const [newEmail, setNewEmail] = useState(() => {return email === null ? '' : email});
    const [emailError, setEmailError] = useState<string | null>(null);

    const text = email === null ? 
    "Don’t worry, write your email address and we’ll send you an link to reset your password." :
    "Don’t worry, we’ll send you an email to reset your password. (don’t forget it this time)";

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
            <div className="bg-semi-black border border-gray rounded-[5px] p-4 w-[19.3rem] bounce" onClick={(e) => {e.stopPropagation()}}>
                {confirmation ? <Confirmation setPasswordPanel={setResetPasswordPanel} email={newEmail}/> : 
                    <>
                        <p className="font-medium leading-[140%] mb-2">Forgot your password?</p>
                        <p className="text-xs font-medium leading-[140%] text-gray mb-6">{text}</p>
                        {email === null && <div className="-mt-2 mb-6"><PasswordInput  password={newEmail} setPassword={setNewEmail} error={emailError} setError={setEmailError} label="Email" endDecorator={false} placeholder=""/></div>}
                        <div className="flex justify-end">
                            <button onClick={() => {setResetPasswordPanel(false)}} className="px-4 py-2 text-xs leading-[140%] border border-transparent font-medium">Cancel</button>
                            <button onClick={sendEmail} className="border border-transparent transition duration-200 hover:border-white colored-button small text-xs leading-[140%] font-medium px-4 py-2 rounded-[4px]">Reset password</button>
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