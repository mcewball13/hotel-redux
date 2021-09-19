import React from "react";
import { useQuery } from "@apollo/client";
import GuestCount from "../components/DashboardComps/GuestCount";
import LateCheckout from "../components/DashboardComps/LateCheckout";
import YourGuests from "../components/DashboardComps/YourGuests";
import CurrentDateTime from "../components/DashboardComps/Date";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const Home = () => {
    return (
        <Container>
            <Grid container spacing={1} rowSpacing={1}>
                <Grid item xs={12} md={3}>
                    <GuestCount></GuestCount>
                </Grid>

                <Grid item xs={12} md={6}>
                    <LateCheckout />
                </Grid>
                <Grid item xs={12} md={3}>
                    <CurrentDateTime/>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item md={12}>
                    <YourGuests/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
