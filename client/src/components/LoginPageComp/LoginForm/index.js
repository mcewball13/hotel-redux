import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useStoreContext} from "../../../utils/GlobalState";
import {ACTIVE_LOGIN_PLATE} from "../../../utils/actions"



const LoginForm = () => {
    const [_, dispatch] = useStoreContext()

    const handlePlateChange = () => {
        dispatch({
            type:ACTIVE_LOGIN_PLATE,

        })
    }


return (
    <div className="login-signup-plate">
        <div className="flex-container-row" id="tabs-wrapper">
            <div className="cursor" id="login-tab">
                Login
            </div>
            <div className="cursor" id="signup-tab" onClick={handlePlateChange}>
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

            <Button variant="contained">Login</Button>
        </form>
        
    </div>
)
};

export default LoginForm;
