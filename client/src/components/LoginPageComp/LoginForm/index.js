import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useStoreContext } from "../../../utils/GlobalState";
import { ACTIVE_LOGIN_PLATE } from "../../../utils/actions";
import { LOGIN } from '../../../utils/mutations';
import Auth from '../../../utils/auth';
import { useMutation } from "@apollo/client";

const LoginForm = () => {
    const [formState, setFormState] = useState({email: '', password: '' });
    const [login, {error}] = useMutation(LOGIN);
    const [_, dispatch] = useStoreContext();

    const handlePlateChange = () => {
        dispatch({
            type: ACTIVE_LOGIN_PLATE,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const {data} = await login({
                variables: { email: formState.email, password: formState.password},
            });
            
            Auth.login(data.login.token);
        } catch (e) {
            console.log(e);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="login-signup-plate">
            <div className="flex-container-row" id="tabs-wrapper">
                <div className="cursor" id="login-tab">
                    Login
                </div>
                <div
                    className="cursor"
                    id="signup-tab"
                    onClick={handlePlateChange}
                >
                    Sign Up
                </div>
            </div>
            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} md={8}>
                    <TextField
                        id="username"
                        label="Email"
                        name="email"
                        variant="standard"
                        sx={{
                            width: "100%",
                        }}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <TextField
                        id="password"
                        label="Password"
                        name="password"
                        variant="standard"
                        sx={{
                            width: "100%",
                        }}
                        onChange={handleChange}

                    />
                </Grid>
                {error ? (
                    <div> 
                        <p className = "error-text">The provided password is Incorrect</p>
                    </div>
                ) : null}
                <Grid item xs={12} md={8}>
                    <Button
                        color="success"
                        variant="contained"
                        sx={{
                            width: "100%",
                        }}
                        onClick={handleFormSubmit}
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default LoginForm;
