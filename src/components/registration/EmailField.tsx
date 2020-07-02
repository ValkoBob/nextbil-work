import React, {useEffect, useState} from "react";
import emailIcon from "./assets/email.svg";
import {DataInput} from "./styles";
import {ErrorField} from "./ErrorField";
import CheckContext from "../../context/CheckContext";

interface IProps {
    addEmail: (email: string) => void;
}

export const EmailField = ({addEmail}: IProps) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const check = React.useContext(CheckContext);
    const errorString = "Please enter a valid email address";

    useEffect(() => {
        if (check && !email) {
            setError(errorString);
        }
    }, [check, email])

    const handleChange = (e: { target: HTMLInputElement; }) => {
        setEmail(e.target.value);
        if(e.target.value.length === 0) {
            addEmail('');
        }
    }

    const handleSubmit = () => {
        const emailValid = email.match(/[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g);
        if (emailValid && email.length > 0) {
            setError('');
            addEmail(email);
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
                type="email"
                placeholder={"Email"}
                aria-required="true"
                aria-invalid="false"
                onChange={handleChange}
                onBlur={handleSubmit}
                onKeyDown={handleKeyDown}
                // @ts-ignore
                img={emailIcon}
            />
            {error === '' ? null : <ErrorField error={error}/>}
        </>
    )
}
