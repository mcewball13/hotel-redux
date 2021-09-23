import React from 'react'
import GuestCount from './GuestCount'
import LateCheckout from './LateCheckout'
import CurrentDateTime from './Date'
import YourGuests from './YourGuests'
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";


function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="#">
                Hotel Redux
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}


const Dashboard = () => (

<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                                <Grid container spacing={3}>
                                    {/* Guest Count */}
                                    <Grid item xs={12} md={4} lg={3}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: "flex",
                                                flexDirection: "column",
                                                height: 240,
                                            }}
                                        >
                                            <GuestCount />{" "}
                                        </Paper>
                                    </Grid>
                                    {/* Late Check Outs */}
                                    <Grid item xs={12} md={4} lg={6}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: "flex",
                                                flexDirection: "column",
                                                height: 240,
                                            }}
                                        >
                                            <LateCheckout />
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={4} lg={3}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: "flex",
                                                flexDirection: "column",
                                                height: 240,
                                            }}
                                        >
                                            <CurrentDateTime />
                                        </Paper>
                                    </Grid>
                                    {/* Recent Orders */}
                                    <Grid item xs={12}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <YourGuests />
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{ pt: 4 }} />
                            </Container>
)

export default Dashboard;