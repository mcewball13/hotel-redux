import React from "react";
import { useStoreContext } from "../../../utils/GlobalState";
import { MODAL_PROPS } from "../../../utils/actions";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CheckOutModal = () => {
    const [state, dispatch] = useStoreContext();
    const { modalProps, modalOpen } = state;

    const handleClose = () => {
        dispatch({
            type: MODAL_PROPS,
            modalOpen: false,
            modalProps: {},
        });
    };

    console.log();

    return (
        <Dialog open={modalOpen} onClose={handleClose}>
            <DialogTitle>Guest Checkout</DialogTitle>
            <DialogContent>
                <Grid container spacing={2} fullWidth sx={{ mt: 3 }}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            id="room_id"
                            name="room_id"
                            label="Room Number"
                            autoComplete="no"
                            value={modalProps.room_id}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="no"
                            autoFocus
                            fullWidth
                            required
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
                <Button onClick={handleClose}>Pay and Check Out</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CheckOutModal;
