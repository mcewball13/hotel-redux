import React, { useState } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { MODAL_PROPS, CURRENT_TAB } from "../../utils/actions";
import { useMutation } from "@apollo/client";
import { CHECK_IN_GUEST, DELETE_USER } from "../../utils/mutations";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const DeleteUserModal = ({refetch}) => {
    const [state, dispatch] = useStoreContext();
    const { modalProps, modalOpen} = state;
    const [removeUser] = useMutation(DELETE_USER);


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("clicked");

        // check if form has everything
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            await removeUser({
                variables: {
                    email: modalProps.email,
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
        refetch()
    };

    const handleClose = () => {
        dispatch({
            type: MODAL_PROPS,
            modalOpen: !modalOpen,
            modalProps: {},
        });
    };

    return (
        <Dialog open={modalOpen} onClose={handleClose}>
            <DialogTitle>Guest Checkout</DialogTitle>
            <DialogContent>
                <Grid container spacing={2} fullWidth sx={{ mt: 3 }}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            autoFocus
                            required
                            disabled
                            id="name"
                            name="name"
                            label="Name"
                            autoComplete="no"
                            value={modalProps.name}
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
                            value={modalProps.email}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleFormSubmit}>Delete User</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteUserModal;
