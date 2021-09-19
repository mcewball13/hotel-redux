import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import LoginForm from "../components/LoginPageComp/LoginForm";
import SignUpForm from "../components/LoginPageComp/SignUpForm";
import "../assets/login.scss";

function Login() {
    const [state, dispatch] = useStoreContext();
    const { isLoginPlate } = state;

    return (
        
            <div className="flex-container-column center">
                {isLoginPlate ? <LoginForm /> : <SignUpForm />}
            </div>
    );
}
export default Login;
