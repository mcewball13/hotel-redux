import React, { useState } from "react";
import {StoreProvider} from "./utils/GlobalState"
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";
import CompSwitcher from "./components/CompSwitcher";

const httpLink = createHttpLink({
    uri: "/graphql",
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

function App() {

    return (
        <ApolloProvider client={client}>
            <StoreProvider>
                <CompSwitcher />
            </StoreProvider>
        </ApolloProvider>
    );
}

export default App;
