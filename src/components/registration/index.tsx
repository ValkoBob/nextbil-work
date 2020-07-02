import React, {useEffect, useState} from "react";
import {
    ButtonSubmit,
    Form,
    Header
} from "./styles";
import {NameField} from "./NameField";
import {EmailField} from "./EmailField";
import {DropDownField} from "./DropDownField";
import {PasswordField} from "./PasswordField";
import {GenderField} from "./GenderField";
import {AcceptField} from "./AcceptField";

import CheckContext from "../../context/CheckContext";
import {useAuth} from "../../hooks/auth.hook";


const countries = ["Latvia", "Lebanon", "Lesotho", "Liberia"];

export const Registration = () => {

    const {signup} = useAuth()
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        country: '',
        gender: '',
        accept: false,
        activeSubmit: false,
        checkForm: false
    });

    const {name, email, password, country, gender, accept, activeSubmit, checkForm} = state;

    useEffect(() => {
        if (name && email && password && country && gender && accept) {
            setState(prevState => ({
                ...prevState,
                activeSubmit: true
            }));
        } else {
            setState(prevState => ({
                ...prevState,
                activeSubmit: false
            }));
        }
    }, [name, email, password, country, gender, accept])
    const setName = (name: string) => {
        setState(prevState => ({
            ...prevState,
            name
        }));
    }
    const setEmail = (email: string) => {
        setState(prevState => ({
            ...prevState,
            email
        }));
    }
    const setPassword = (password: string) => {
        setState(prevState => ({
            ...prevState,
            password
        }));
    }
    const setCountry = (country: string) => {
        setState(prevState => ({
            ...prevState,
            country
        }));
    }
    const setGender = (gender: string) => {
        setState(prevState => ({
            ...prevState,
            gender
        }));
    }
    const setAccept = () => {
        setState(prevState => ({
            ...prevState,
            accept: !prevState.accept
        }));
    }

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setState(prevState => ({
            ...prevState,
            checkForm: true
        }));
        if(activeSubmit) {
            signup({name, email, password, country, gender});
        }
    }

    return (
        <>
            <Form>
                <CheckContext.Provider
                    // @ts-ignore
                    value={checkForm}>
                    <Header>
                        Create a new account
                    </Header>
                    <NameField addName={setName}/>
                    <EmailField addEmail={setEmail}/>
                    <PasswordField addPassword={setPassword}/>
                    <DropDownField countries={countries}
                                   addCountry={setCountry}/>
                    <GenderField addGender={setGender}/>
                    <AcceptField addAccept={setAccept}/>
                    <ButtonSubmit
                        // @ts-ignore
                        activeSubmit={activeSubmit}
                        type='button'
                        value={"Sign up"}
                        onClick={handleClick}
                    />
                </CheckContext.Provider>
            </Form>
        </>
    )
}
