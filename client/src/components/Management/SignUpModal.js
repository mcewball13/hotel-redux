import React, { useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { SIGNUP_MODAL, CURRENT_TAB } from "../../utils/actions";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignUpModal = ({refetch}) => {
    const [state, dispatch] = useStoreContext();
    const { signupModal, signupProps} = state;
    const [signup] = useMutation(ADD_USER);

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            await signup({
                variables: {
                    ...formData
                },
            });
        } catch (err) {
            console.error(err);
        }
        handleClose();
        dispatch({
            type: CURRENT_TAB,
            currentTab: "management",
        });
        refetch();
    };

    const handleClose = () => {
        dispatch({
            type: SIGNUP_MODAL,
            signupModal: !signupModal,
            signupProps: {},
        });
    };

    return (
        <Dialog open={signupModal} onClose={handleClose}>
            <DialogTitle>Add Employee</DialogTitle>
            <DialogContent>
                <Grid container spacing={2} fullWidth sx={{ mt: 3 }}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            autoFocus
                            required
                            id="username"
                            name="username"
                            label="Username"
                            autoComplete="no"
                            value={signupProps.name}
                            onBlur={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="no"
                            fullWidth
                            required
                            id="email"
                            name="email"
                            label="Email"
                            value={signupProps.email}
                            onBlur={handleInputChange}
                        />
                    </Grid><Grid item xs={12}>
                        <TextField
                            autoComplete="no"
                            fullWidth
                            required
                            id="password"
                            name="password"
                            label="Password"
                            value={signupProps.password}
                            onBlur={handleInputChange}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleFormSubmit}>Add </Button>
            </DialogActions>
        </Dialog>
    );
};

export default SignUpModal;
