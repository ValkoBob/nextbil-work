import {useCallback} from 'react'
import {gql} from "apollo-boost";

export const useAuth = () => {
    const signup = useCallback((data: any) => {
        const {name, email, password, country, gender} = data;
        try {
            gql`
            mutation{
              signup(input: {
                name: "${name}",
                email: "${email}",
                password: "${password}",
                country: "${country}",
                gender: ${gender}
              }) {
                id
                name
                email
                country
                gender
              }
            }`;
        } catch(err) {
            console.log(err);
        }
    }, [])

    return {signup}
}
