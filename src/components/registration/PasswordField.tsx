import React, {useEffect, useState} from "react";
import passwordIcon from "./assets/password.svg";
import {DataInput} from "./styles";
import {ErrorField} from "./ErrorField";
import CheckContext from "../../context/CheckContext";

interface IProps {
    addPassword: (password: string) => void;
}

export const PasswordField = ({addPassword}: IProps) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const check = React.useContext(CheckContext);
    const errorString = "Password must contain at least 6 symbols";

    useEffect(() => {
        if (check && !password) {
            setError(errorString);
        }
    }, [check, password])

    const handleChange = (e: { target: HTMLInputElement; }) => {
        setPassword(e.target.value);
        if(e.target.value.length === 0) {
            addPassword('');
        }
    }

    const handleSubmit = () => {
        if (password.length >= 6) {
            setError('');
            addPassword(password);
        } else {
            setError(errorString);
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.which === 13) {
            handleSubmit()
        }
    }
    return (
        <>
            <DataInput
                type="password"
                placeholder={"Password"}
                aria-required="true"
                aria-invalid="false"
                onChange={handleChange}
                onBlur={handleSubmit}
                onKeyDown={handleKeyDown}
                // @ts-ignore
                img={passwordIcon}
            />
            {error === '' ? null : <ErrorField error={error}/>}
        </>
    )
}
