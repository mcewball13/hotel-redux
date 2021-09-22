import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { HEADER_ACTIVE } from "../../utils/actions";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "../../pages/Home";
import Header from "../Header";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import CheckInForm from "../CheckIn";
import Auth from "../../utils/auth"

const CompSwitcher = () => {
    const [state, dispatch] = useStoreContext();

    const { isActive, isLoginPage } = state;

    return (
        <Router>
            {Auth.loggedIn() ? <Header /> : <Redirect push to="/login" />}
            <div className={`${isActive ? "shift-right" : "normal"}`}>
                <Switch>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/signup" component={SignUp}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <Route
                        exact
                        path="/check-in"
                        component={CheckInForm}
                    ></Route>
                </Switch>
            </div>
        </Router>
    );
};
export default CompSwitcher;
