import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { HEADER_ACTIVE } from "../../utils/actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
// import Header from "../Header";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import CheckInForm from "../CheckIn";
import Header from '../Header'
import Auth from "../../utils/auth"

const CompSwitcher = () => {
    const [state, dispatch] = useStoreContext();

    const { isActive, isLoginPage } = state;

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
