import "date-fns";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from "@material-ui/pickers";

const CheckInForm = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    function handleCheckIn () {
        // make query
        console.log("clicked")
        // will it need cleanup?
    }
    console.log(selectedDate);
    return (
            <Grid
                alignItems="center"
                justifyContent="center"
                container
                component="form"
                xs={12}
                sx={{
                    "& .MuiTextField-root": { m: 1},
                    minHeight: '100vh'
                }}
                noValidate
                autoComplete="off"
            >
                <Grid item xs={10} md={6} align="center">
                    <Paper  xs={8} spacing={16} elevation={4} sx={{borderRadius: 4, p:4}}>
                        <h2>Check in</h2>
                            <TextField
                            fullWidth
                                required
                                id="fName"
                                label="First Name"
                                variant="standard"
                            />
                            <TextField
                            fullWidth
                                required
                                id="lNAme"
                                label="Last Name"
                                variant="standard"
                            />
                            <TextField
                            fullWidth
                                required
                                id="email"
                                label="Email"
                                variant="standard"
                            />
                            <TextField
                            fullWidth
                                required
                                id="tel"
                                label="Phone Number"
                                variant="standard"
                            />
                            <TextField
                            fullWidth
                                required
                                id="partyNum"
                                label="Number in Party"
                                variant="standard"
                            />
                            <TextField
                            fullWidth
                                required
                                id="nightsNum"
                                label="Nights"
                                variant="standard"
                            />
                            <TextField
                            fullWidth
                                required
                                type="date"
                                id="date"
                                label="check-in"
                                variant="standard"
                                defaultValue={selectedDate}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={handleDateChange}
                            />
                            <Grid item xs={8}>
                            <Button onClick={handleCheckIn} variant="contained" >Check-in</Button>
                            </Grid>
                    </Paper>
                </Grid>
            </Grid>
      
    );
};

export default CheckInForm;
