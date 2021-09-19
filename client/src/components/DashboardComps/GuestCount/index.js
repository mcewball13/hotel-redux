import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_GUEST_COUNT } from "../../../utils/queries";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const GuestCount = () => {
    const { loading, data } = useQuery(QUERY_GUEST_COUNT);
    const guestCount = data?.guestCount || 0;

    return (
        <>
            <Card sx={12}>
                <CardContent sx={{
                    height: "100%"
                }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Room Availability: {loading ? (<div>Loading...</div>):(<h2>{guestCount}</h2>)}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};
export default GuestCount;
