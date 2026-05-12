import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy"
import { useState } from "react"

interface PasswordInputProps {
    password: string,
    setPassword: (value: string) => void,
    error: string | null,
    setError: (value: string | null) => void,
    label: string,
    errorY?: string,
    endDecorator?: boolean,
    placeholder?: string 
}

const PasswordInput: React.FC<PasswordInputProps> = ({password, setPassword, error, setError, label, errorY='0', endDecorator = true, placeholder = ""}) => {
    const [showPassword, setShowPassword] = useState(!endDecorator);
    return (
        <FormControl sx={{width: '100%', marginBottom: '0.5rem'}}>
        {error !== null && <FormHelperText sx={{fontSize: '0.625rem', fontStyle: 'italic', justifyContent: 'end', fontWeight: "bold", margin: 0, color:"#FF4141", position: 'absolute', right: '0', maxWidth: '12.5rem', top: errorY}}>{error}</FormHelperText>}
            <FormLabel
                sx={{
                    fontSize: '0.75',
                    fontWeight: 'bold',
                    lineHeight: '140%',
                    marginBottom: '0.25rem',
                    color: '#F1F1F1'
                }}
            >{label}</FormLabel>
            <Input 
                slotProps={{ input: { placeholder: placeholder, type: showPassword ? 'text' : 'password' } }}
                endDecorator={<img onClick={() => {setShowPassword(!showPassword)}} src={ showPassword ? "../images/login/close-eye.png" : "../images/login/open-eye.png" } alt="password icon" className={"w-4 cursor-pointer hover:opacity-75 transition duration-300" + (endDecorator ? "" : " hidden")}/>}
                onChange = {(e) => {if (setPassword !== undefined && setError !== undefined) {
                    setPassword(e.target.value)};
                    setError(null);
                  }}
                  value={password}
                sx={{
                    '&:placeholder': {
                        fontSize: '0.75rem'
                    },
                    width: '100%',
                    bgcolor: "transparent",
                    fontSize: '1rem',
                    minHeight: '2.625',
                    borderWidth: '1px',
                    color: "#F1F1F1",
                    borderColor: (error !== null) ? "#C41C1C" : "#F1F1F1",
                    borderRadius: '0.25rem',
                    '--Input-focusedInset': 'var(--any, )',
                    '--Input-focusedThickness': '1px',
                    '--Input-focusedHighlight': 'rgba(13,110,253,.25)',
                    '&::before': {
                    transition: 'box-shadow .15s ease-in-out',
                    },
                    '&:focus-within': {
                        borderColor: "#F1F1F1",
                    },
                }}
                className={error !== null ? "error" : ""}
            />
        </FormControl>
    )
}

export default PasswordInput;