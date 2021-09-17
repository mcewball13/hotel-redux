import React from "react";


const LoginForm = ({ToggleClass}) => (
    <div className="login-signup-plate">
        <div className="flex-container-row" id="tabs-wrapper">
            <div className="cursor" id="login-tab" onClick={()=> ToggleClass()}>
                Login
            </div>
            <div className="cursor" id="signup-tab" onClick={()=> ToggleClass()}>
                Sign Up
            </div>
        </div>
        <form className="flex-container-column">
            <label htmlFor="uname">
                <b>Username</b>
            </label>
            <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
            />

            <label htmlFor="psw">
                <b>Password</b>
            </label>
            <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
            />

            <button className="login-btn">Login</button>
        </form>
        
    </div>
);

export default LoginForm;