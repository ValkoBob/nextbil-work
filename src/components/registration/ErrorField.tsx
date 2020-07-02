import React from "react";
import {ErrorContainer} from "./styles";

interface IProps {
    error: string
}

export const ErrorField = (props: IProps) => {
    const {error} = props;
    return (
        <ErrorContainer>
            {error}
        </ErrorContainer>
    )
}
