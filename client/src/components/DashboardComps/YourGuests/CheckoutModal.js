import React from "react";
import { useStoreContext } from "../../../utils/GlobalState";
import { MODAL_PROPS } from "../../../utils/actions";
import { useMutation } from "@apollo/client";
import { CHECK_OUT } from "../../../utils/mutations";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CheckOutModal = ({refetch}) => {
    const [state, dispatch] = useStoreContext();
    const { modalProps, modalOpen } = state;
    const [check_out] = useMutation(CHECK_OUT);

    const handleClose = () => {
        dispatch({
            type: MODAL_PROPS,
            modalOpen: false,
            modalProps: {},
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await check_out({
                variables: {
                    room_id: modalProps.room_id,
                },
            });
        } catch (err) {
            console.error(err);
        }
        
        handleClose();
        refetch()
    };

    return (
        <Dialog open={modalOpen} onClose={handleClose}>
            <DialogTitle>Guest Checkout</DialogTitle>
            <DialogContent>
                <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={12}>
                        <TextField
                            autoComplete="no"
                            autoFocus
                            fullWidth
                            required
                            disabled
                            id="name"
                            name="name"
                            label="Name"
                            value={modalProps.name}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            disabled
                            id="room_id"
                            name="room_id"
                            label="Room Number"
                            autoComplete="no"
                            value={modalProps.room_id}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            disabled
                            autoComplete="no"
                            id="balance"
                            name="balance"
                            label="Balance"
                            value={modalProps.balance}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleFormSubmit}>Pay and Check Out</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CheckOutModal;
