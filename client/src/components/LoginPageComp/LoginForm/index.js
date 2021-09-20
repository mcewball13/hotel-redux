import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useStoreContext } from "../../../utils/GlobalState";
import { ACTIVE_LOGIN_PLATE } from "../../../utils/actions";

const LoginForm = () => {
    const [_, dispatch] = useStoreContext();

    const handlePlateChange = () => {
        dispatch({
            type: ACTIVE_LOGIN_PLATE,
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
                        label="Username"
                        variant="standard"
                        sx={{
                            width: "100%",
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <TextField
                        id="password"
                        label="Password"
                        variant="standard"
                        sx={{
                            width: "100%",
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Button
                        color="success"
                        variant="contained"
                        sx={{
                            width: "100%",
                        }}
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default LoginForm;
