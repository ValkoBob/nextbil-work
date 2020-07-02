import React, {useEffect, useState} from "react";
import layer from "./assets/layer.svg";
import {CountryDiv, DropDown, Select, SelectWrapper} from "./styles";
import {ErrorField} from "./ErrorField";
import CheckContext from "../../context/CheckContext";

interface IProps {
    countries: string[],
    addCountry: (country: string) => void;
}

export const DropDownField = ({countries, addCountry}: IProps) => {
    const [isActive, setActive] = useState(false);
    const [error, setError] = useState('');
    const [selectedCountry, setCountry] = useState("Select country");
    const [isColor, setColor] = useState(false);
    const check = React.useContext(CheckContext);
    const errorString = "You must select your country";

    useEffect(() => {
        if (check && selectedCountry === "Select country") {
            setError(errorString);
        }
    }, [check, selectedCountry])

    const handleClick = (country: string) => {
        setCountry(country);
        addCountry(country);
        setActive(false);
        setError('');
        setColor(true);
    }

    const handleActiveSelect = () => {
        if(isActive && selectedCountry === "Select country") {
            setError(errorString);
        }
        setActive(!isActive);
    }

    return (
        <>
            <DropDown>
                <SelectWrapper
                    onClick={handleActiveSelect}
                    // @ts-ignore
                    isColor={isColor}
                >
                    <span>{selectedCountry}</span>
                    <img src={layer} alt="layer"/>
                </SelectWrapper>
                <Select
                    //@ts-ignore
                    isActive={isActive}>
                    {countries.map((item, id) => {
                        return (
                            <CountryDiv key={id}
                                        onClick={() => handleClick(item)}
                            >
                                {item}
                            </CountryDiv>
                        )
                    })}
                </Select>
            </DropDown>
            {error === '' ? null : <ErrorField error={error}/>}
        </>
    )
}
