import "date-fns";
import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { useMutation } from "@apollo/client";
import { CHECK_IN_GUEST } from "../../utils/mutations";

import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useStoreContext } from "../../utils/GlobalState";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme();

const CheckInForm = () => {
    const [state, dispatch] = useStoreContext();
    const {checkedInGuests} = state;

    const [check_in] = useMutation(CHECK_IN_GUEST);

    const [formState, setFormState] = useState({
        name: "",
        balance: "",
        party: "",
        nights: "",
        check_in: "",
    });

   
    // local state for date picker
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        //console.log(name, value);
        setFormState({ ...formState, [name]: value });
        //console.log(formState);
    };

    // Hand form submit function
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("clicked");

        // check if form has everything
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        console.log(`This is Form State ${formState}`);

        try {
            console.log(formState);
            const data = await check_in({
                variables: {
                    room_id: 8,
                    input: {

                        name: formState.name,
                        balance: formState.balance,
                        party: formState.party,
                        nights: formState.nights,
                        check_in: formState.date,
                    },
                },
            });
            console.log(data.data);
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

    // console.log(selectedDate);
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Check In
                    </Typography>
                    <Box
                    component="form"
                        noValidate
                        autoComplete="off"
                        onSubmit={handleFormSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="no"
                                    autoFocus
                                    fullWidth
                                    required
                                    id="name"
                                    name="name"
                                    label="Name"
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
                                    onBlur={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    id="partyNum"
                                    name="party"
                                    autoComplete="no"
                                    label="Number in Party"
                                    onBlur={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    id="nightsNum"
                                    name="nights"
                                    label="Nights"
                                    autoComplete="no"
                                    onBlur={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    required
                                    type="date"
                                    id="date"
                                    name="date"
                                    autoComplete="no"
                                    label="check-in"
                                    defaultValue={selectedDate}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={handleDateChange}
                                    onBlur={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Check-in
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default CheckInForm;
