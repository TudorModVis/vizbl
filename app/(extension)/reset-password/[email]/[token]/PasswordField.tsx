import { FormControl, FormHelperText, Input, styled } from "@mui/joy";
import React, { useEffect, useState } from "react";

const StyledInput = styled('input')({
  border: 'none', // remove the native input border
  minWidth: 0, // remove the native input width
  outline: 0, // remove the native input outline
  padding: 0, // remove the native input padding
  paddingTop: '1em',
  flex: 1,
  color: 'inherit',
  backgroundColor: 'transparent',
  fontFamily: 'inherit',
  fontStyle: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  textOverflow: 'ellipsis',
  '&::placeholder': {
    opacity: 0,
    transition: '0.1s ease-out',
  },
  '&:focus::placeholder': {
    opacity: 1,
  },
  '&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label': {
    top: '0.5rem',
    fontSize: '0.75rem',
  },
  '&:focus ~ label': {
    color: 'var(--Input-focusedHighlight)',
  },
  '&:-webkit-autofill': {
    alignSelf: 'stretch', // to fill the height of the root slot
  },
  '&:-webkit-autofill:not(* + &)': {
    marginInlineStart: 'calc(-1 * var(--Input-paddingInline))',
    paddingInlineStart: 'var(--Input-paddingInline)',
    borderTopLeftRadius:
      'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
    borderBottomLeftRadius:
      'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
  },
});

const StyledLabel = styled('label')(({ theme }) => ({
  position: 'absolute',
  lineHeight: 1,
  top: 'calc((var(--Input-minHeight) - 1em) / 2)',
  fontWeight: theme.vars.fontWeight.md,
  transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
}));

    interface PasswordProps {
      label: string,
      password: string,
      setPassword: (value: string) => void,
      error: string | null,
      setError: (value: string | null) => void
    }

  const PasswordField: React.FC<PasswordProps> = ({label, password, setPassword, error, setError}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [innerInput, setInnerInput] = useState<any>(null);

    useEffect(() => {
      setInnerInput(React.forwardRef<
      HTMLInputElement,
      JSX.IntrinsicElements['input']
    >(function InnerInput(props, ref) {
      const id = React.useId();
      return (
        <React.Fragment>
          <StyledInput {...props} ref={ref} id={id} />
          <StyledLabel htmlFor={id}>{label}</StyledLabel>
        </React.Fragment>
      );
    }))
    }, []);

    return(
      <FormControl sx={{marginTop: (error !== null) ? "-14.28px" : "0", width: '100%'}}  error={error !== null}>
        {error !== null && <FormHelperText sx={{fontSize: '10px', fontStyle: 'italic', justifyContent: 'end', fontWeight: "bold", margin: 0}}>{error}</FormHelperText>}
        <Input
            endDecorator={<img onClick={() => {setShowPassword(!showPassword)}} src={ showPassword ? "/images/icons/close-eye.svg" : "/images/icons/open-eye.svg" } alt="password icon" className="w-6 mr-4 cursor-pointer hover:opacity-75 transition duration-300" />}
            onChange = {(e) => {if (setPassword !== undefined && setError !== undefined) {
              setPassword(e.target.value)};
              setError(null);
            }}
            value={password}
            slots={{ input: innerInput }}
            slotProps={{ input: { placeholder: "", type: showPassword ? 'text' : 'password' } }}
            sx={{
                '--Input-minHeight': '48px',
                '--Input-radius': '6px',
                bgcolor: "transparent",
                borderColor: (error !== null) ? "#C41C1C" : "#a0a0a0",
                color: (error !== null) ? "#C41C1C" : "#f1f1f1",
                borderRadius: "8px",
                marginBottom: "1.3rem",
                width: '100%',
                paddingLeft: '1.5rem'
              }}
            className={error !== null ? "error" : ""}
        />
      </FormControl>
        
    );
}

export default PasswordField;