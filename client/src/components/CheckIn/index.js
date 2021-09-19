import React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';


const CheckInForm = () => {


    return (
        <>
        <Grid
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
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
          id="partyNum"
          label="Required"
          defaultValue="Check"
        />
        </div>
    </Grid>
        </>
    )
}

export default CheckInForm;