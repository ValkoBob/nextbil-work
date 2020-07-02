import React, {useEffect, useState} from "react";
import {NameInput} from "./styles";
import {ErrorField} from "./ErrorField";
import CheckContext from "../../context/CheckContext";

interface IProps {
    addName: (name: string) => void;
}

export const NameField = ({addName}: IProps) => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const check = React.useContext(CheckContext);
    const errorString = "Please enter a valid name";
    useEffect(() => {
        if(check && name === '') {
            setError(errorString);
        }
    }, [check, name])
    const handleChange = (e: { target: HTMLInputElement; }) => {
        setName(e.target.value)
        if(e.target.value.length === 0) {
            addName('');
        }
    }

    const handleSubmit = () => {
        const nameValid = name.match("^[a-zA-Z]+$");
        if (nameValid && name.length > 0) {
            setError('');
            addName(name);
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
            <NameInput
                type="text"
                placeholder={"Enter your name"}
                onChange={handleChange}
                onBlur={handleSubmit}
                onKeyDown={handleKeyDown}
            />
            {error === '' ? null : <ErrorField error={error}/>}
        </>
    )
}
