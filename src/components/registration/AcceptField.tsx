import React, {useEffect, useState} from "react";
import {AcceptContainer, BlueSpan, CheckboxInput} from "./styles";
import CheckContext from "../../context/CheckContext";
import {ErrorField} from "./ErrorField";

interface IProps {
    addAccept: () => void;
}

export const AcceptField = ({addAccept}: IProps) => {
    const [error, setError] = useState('');
    const [accept, setAccept] = useState(false);
    const handleChange = (e: { target: HTMLInputElement; }) => {
        addAccept();
        setAccept(!accept);
        setError('');
    }
    const check = React.useContext(CheckContext);
    const errorString = "You must accept the policies";
    useEffect(() => {
        if (check && !accept) {
            setError(errorString);
        }
    }, [check, accept])
    return (
        <>
            <AcceptContainer>
                <CheckboxInput
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    value="accept"
                    onChange={handleChange}
                />
                <label htmlFor="checkbox">Accept
                    <BlueSpan> terms </BlueSpan>
                    and
                    <BlueSpan> conditions </BlueSpan></label>
            </AcceptContainer>
            {error === '' ? null : <ErrorField error={error}/>}
        </>
    )
}
