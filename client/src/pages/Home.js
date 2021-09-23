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
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
// }));

const theme = createTheme();

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
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
                        Dashboard
                    </Typography>
                    
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={3}>
                            <GuestCount />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <LateCheckout />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <CurrentDateTime />
                        </Grid>
                         <Grid item xs={12} md={12}>
                            <YourGuests />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Home;
