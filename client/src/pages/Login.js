import React, {useState} from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginPageComp/LoginForm";
import SignUpForm from "../components/LoginPageComp/SignUpForm";
import "../assets/login.scss";

function Login() {
    const [isLogin, setIsLogin] = useState("true");
    const ToggleClass = () => {
        setIsLogin(!isLogin);
    }

    return (
        <div className="flex-container-column center">
            {isLogin ? <LoginForm ToggleClass={ToggleClass} /> : <SignUpForm ToggleClass={ToggleClass}/>}
        </div>
    );
}
export default Login;
