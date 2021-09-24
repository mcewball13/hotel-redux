import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";

const CompSwitcher = () => {

    return (
        <>
        <Router>
                <Switch>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/signup" component={SignUp}></Route>
                    <Route exact path="/" component={Home}></Route>

                </Switch>
        </Router>
        </>
    );
};
export default CompSwitcher;
