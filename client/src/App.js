import React, { useState } from "react";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from "@apollo/client";
import { StoreProvider, useStoreContext } from "./utils/GlobalState";
import {HEADER_ACTIVE} from "./utils/actions"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import CheckInForm from "./components/CheckIn";

const httpLink = createHttpLink({
    uri: "/graphql",
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

function App() {
    const [state, dispatch] = useStoreContext();
    
    const {isActive} = state;

    return (
        <ApolloProvider client={client}>
            <Router>
                <StoreProvider>
                    <header>
                        <Header />
                    </header>
                    <div
                        className={`flex-container-column w-100 h-100 j-center ${
                            isActive ? "shift-right" : "normal"
                        }`}
                    >
                        <Switch>
                            <Route
                                exact
                                path="/login"
                                component={Login}
                            ></Route>
                            <Route exact path="/" component={Home}></Route>
                            <Route
                                exact
                                path="/check-in"
                                component={CheckInForm}
                            ></Route>
                        </Switch>
                    </div>
                </StoreProvider>
            </Router>
        </ApolloProvider>
    );
}

export default App;
