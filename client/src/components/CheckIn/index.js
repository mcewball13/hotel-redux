import "date-fns";
import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import { CHECK_IN_GUEST } from "../../utils/mutations";
import { CHECK_IN } from "../../utils/actions";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Auth from "../../utils/auth";

const CheckInForm = () => {
    const [, dispatch] = useStoreContext();
    const [check_in] = useMutation(CHECK_IN_GUEST);

    const [formState, setFormState] = useState({
        name: "",
        balance: "",
        party: "",
        nights: "",
        date: "",
    });

    // useEffect(() => {
    //     if (check_in) {
    //         dispatch({
    //             type: CHECK_IN,
    //             checkedInGuests: check_in,
    //         });
    //     }
    // }, [check_in, dispatch]);

    // local state for date picker
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    // Hand form submit function
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        console.log(formState.date);

        try {
            const { data } = await check_in({
                variables: {
                    room_id: "3",
                    input: {
                        name: formState.name,
                        balance: formState.balance,
                        party: formState.party,
                        nights: formState.nights,
                        check_in: formState.date,
                    }
                },
                
            });
            console.log(data);
            
            // dispatch({
            //     type: CHECK_IN_GUEST,
            //     checkedInGuests: data,
            // });
            //Auth.login(data.addUser.token);
        } catch (err) {
            //console.log("clicked");
            console.error(err);
        }

        setFormState({
            name: "",
            balance: "",
            party: "",
            nights: "",
            check_in: "",
        });
    };

    console.log(selectedDate);
    return (
        <Grid
            alignItems="center"
            justifyContent="center"
            container
            component="form"
            xs={12}
            sx={{
                "& .MuiTextField-root": { m: 1 },
                minHeight: "100vh",
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleFormSubmit}
        >
            <Grid item xs={10} md={6} align="center">
                <Paper
                    xs={8}
                    spacing={16}
                    elevation={4}
                    sx={{ borderRadius: 4, p: 4 }}
                >
                    <h2>Check in</h2>

                    <TextField
                        fullWidth
                        required
                        id="name"
                        name="name"
                        label="Name"
                        variant="standard"
                        onBlur={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        required
                        id="balance"
                        name="balance"
                        label="Balance"
                        variant="standard"
                        onBlur={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        required
                        id="partyNum"
                        name="party"
                        label="Number in Party"
                        variant="standard"
                        onBlur={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        required
                        id="nightsNum"
                        name="nights"
                        label="Nights"
                        variant="standard"
                        onBlur={handleInputChange}
                    />
                    <TextField
                        fullWidth
                        required
                        type="date"
                        id="date"
                        name="date"
                        label="check-in"
                        variant="standard"
                        defaultValue={selectedDate}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleDateChange}
                        onBlur={handleInputChange}
                    />
                    <Grid item xs={8}>
                        <Button type="submit" variant="contained">
                            Check-in
                        </Button>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default CheckInForm;
