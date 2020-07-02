import React from "react";
import {Registration} from "./components/registration";
import Global from "./styles";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
    uri: 'http://homework.nextbil.com/graphql',
});

function App() {
    return (
        <>
            <Global/>
            <ApolloProvider client={client}>
            <Registration/>
            </ApolloProvider>
        </>
    );
}

export default App;
