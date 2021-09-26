import React, {useState} from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { MODAL_PROPS } from "../../utils/actions";
import { useMutation } from "@apollo/client";
import { CHECK_IN_GUEST } from "../../utils/mutations";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CheckInModal = ({refetch}) => {
    const [state, dispatch] = useStoreContext();
    const { modalProps, modalOpen } = state;
    const [check_in] = useMutation(CHECK_IN_GUEST);

    const [formData, setFormData] = useState({
        name: "",
        balance: "",
        party: "",
        nights: "",
        check_in: "",
    });

    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

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
            await check_in({
                variables: {
                    room_id: modalProps.room_id,
                    input: {...formData},
                },
            });
        } catch (err) {
            console.error(err);
        }
        
        setFormData({
            name: "",
            balance: "",
            party: "",
            nights: "",
            check_in: "",
        });
        handleClose();
        refetch()
    };

    const handleClose = () => {
        dispatch({
            type: MODAL_PROPS,
            modalOpen: false,
            modalProps: {},
        });
    };

    return (
        <Dialog open={modalOpen} onClose={handleClose}>
            <DialogTitle>Guest Checkout</DialogTitle>
            <DialogContent>
                <Grid container spacing={2} sx={{ mt: 3 }}>
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
                            autoComplete="no"
                            autoFocus
                            fullWidth
                            required
                            id="name"
                            name="name"
                            label="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="no"
                            fullWidth
                            required
                            id="party"
                            name="party"
                            label="Party"
                            value={formData.party}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="no"
                            fullWidth
                            required
                            id="nights"
                            name="nights"
                            label="Nights"
                            value={formData.nights}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            type="date"
                            id="date"
                            name="check_in"
                            autoComplete="no"
                            label="Check-in-Date"
                            defaultValue={selectedDate}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleDateChange}
                            onBlur={handleInputChange}
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
                            value={formData.balance}
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleFormSubmit}>Check In</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CheckInModal;
