import React from "react";
import {useStoreContext} from "../../../utils/GlobalState";
import {ACTIVE_LOGIN_PLATE} from "../../../utils/actions"


const SignupForm = () => {

    const [state, dispatch] = useStoreContext()

    const handlePlateChange = () => {
        dispatch({
            type:ACTIVE_LOGIN_PLATE,

        })
    }


    return (
        <div className="login-signup-plate">
            <div className="flex-container-row" id="tabs-wrapper">
                <div className="cursor" id="login-comp-tab" onClick={handlePlateChange}>Login</div>
                <div className="cursor" id="signup-comp-tab">Sign Up</div>
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
                <label htmlFor="email">
                    <b>Emaiil</b>
                </label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
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

                <button className="login-btn">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;
