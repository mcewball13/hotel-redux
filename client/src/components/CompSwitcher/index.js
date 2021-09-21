import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { HEADER_ACTIVE } from "../../utils/actions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Header from "../Header";
import Login from "../../pages/Login";
import CheckInForm from "../CheckIn";

const CompSwitcher = () => {
    const [state] = useStoreContext();

    const { isActive } = state;

    return (
        <Router>
            <Header />
            <div className={`${isActive ? "shift-right" : "normal"}`}>
                <Switch>
                    <Route exact path="/login" component={Login}></Route>
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
