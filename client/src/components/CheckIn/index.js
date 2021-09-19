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
    const [selectedDate, setSelectedDate] = useState(
        new Date()
    );
    const handleDateChange = (e) => {
        setSelectedDate(e.target.value)

    };
console.log(selectedDate);
    return (
        <>
            <Grid
                component="form"
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        required
                        id="fName"
                        label="Required"
                        defaultValue="First Name"
                    />
                    <TextField
                        required
                        id="lNAme"
                        label="Required"
                        defaultValue="Last Name"
                    />
                    <TextField
                        required
                        id="email"
                        label="Required"
                        defaultValue="Email"
                    />
                    <TextField
                        required
                        id="tel"
                        label="Required"
                        defaultValue="Phone Number"
                    />
                    <TextField
                        required
                        id="partyNum"
                        label="Required"
                        defaultValue="Number in Party"
                    />
                    <TextField
                        required
                        id="nightsNum"
                        label="Required"
                        defaultValue="Number of Nights"
                    />
                    <TextField
                        required
                        type="date"
                        id="date"
                        label="check-in"
                        defaultValue={selectedDate}
                        InputLabelProps={{
                            shrink: true,
                          }}
                          onChange={handleDateChange}
                    />
                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                        disableToolbar
                        format="MM/dd/yyy"
                        margin='normal'
                        id='date-picker'
                        label='Date Picker'
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change-date'
                        }}
                        />
                    </MuiPickersUtilsProvider> */}
                </div>
            </Grid>
        </>
    );
};

export default CheckInForm;
