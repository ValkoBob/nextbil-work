import React, {useEffect, useState} from "react";
import {Gender, GenderContainer, RadioInput} from "./styles";
import {ErrorField} from "./ErrorField";
import CheckContext from "../../context/CheckContext";

interface IProps {
    addGender: (gender: string) => void;
}

export const GenderField = ({addGender}: IProps) => {
    const [error, setError] = useState('');
    const [gender, setGender] = useState('');

    const check = React.useContext(CheckContext);
    const errorString = "You must select the gender";

    useEffect(() => {
        if (check && !gender) {
            setError(errorString);
        }
    }, [check, gender])

    const handleChange = (e: { target: HTMLInputElement; }) => {
        addGender(e.target.value);
        setError('');
        setGender(e.target.value);
    }
    return (
        <>
            <Gender>
                <GenderContainer>
                    <RadioInput
                        type="radio"
                        id="male"
                        name="gender"
                        value="MALE"
                        onChange={handleChange}
                    />
                    <label htmlFor="male">Male</label>
                </GenderContainer>
                <GenderContainer>
                    <RadioInput
                        type="radio"
                        id="female"
                        name="gender"
                        value="FEMALE"
                        onChange={handleChange}
                    />
                    <label htmlFor="male">Female</label>
                </GenderContainer>
            </Gender>
            {error === '' ? null : <ErrorField error={error}/>}
        </>
    )
}
