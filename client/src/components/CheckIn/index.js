import "date-fns";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
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
    console.log(selectedDate);
    return (
            <Grid
                alignItems="center"
                justifyContent="center"
                container
                component="form"
                xs={12}
                sx={{
                    "& .MuiTextField-root": { m: 1, width: '25ch'},
                    minHeight: '100vh'
                }}
                noValidate
                autoComplete="off"
            >
                <Grid item xs={12} md={8} align="center">
                    <Paper  spacing={16} elevation={4} sx={{borderRadius: 4, p:4 }}>
                        <h2>Check in</h2>
                            <TextField
                                required
                                id="fName"
                                label="First Name"
                                variant="standard"
                            />
                            <TextField
                                required
                                id="lNAme"
                                label="Last Name"
                                variant="standard"
                            />
                            <TextField
                                required
                                id="email"
                                label="Email"
                                variant="standard"
                            />
                            <TextField
                                required
                                id="tel"
                                label="Phone Number"
                                variant="standard"
                            />
                            <TextField
                                required
                                id="partyNum"
                                label="Number in Party"
                                variant="standard"
                            />
                            <TextField
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
                    </Paper>
                </Grid>
            </Grid>
      
    );
};

export default CheckInForm;
