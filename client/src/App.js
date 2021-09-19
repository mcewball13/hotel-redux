import React, { useState } from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";

import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";

const httpLink = createHttpLink({
    uri: "/graphql",
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

function App() {
    const [isActive, setActive] = useState("false");
    const toggleActive = () => {
        setActive(!isActive);
    };
    return (
        <ApolloProvider client={client}>
            <header>
                <Header
                    isActive={isActive}
                    toggleActive={toggleActive}
                ></Header>
            </header>
            <div
                className={`flex-container-column w-100 h-100 j-center ${
                    isActive ? "shift-right" : "normal"
                }`}
            >
                {/* <Login toggleActive={toggleActive}/> */}
                <Home />
            </div>
        </ApolloProvider>
    );
}

export default App;
