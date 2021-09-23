import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_LATE_CHECKOUT } from "../../../utils/queries";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const LateCheckout = () => {
    const { loading, data } = useQuery(QUERY_LATE_CHECKOUT);
    const lateCheckouts = data?.lateCheckouts || [];

    useEffect(() => {
        // query the database at 11:01am to see who hasn't checked out that day
    }, [lateCheckouts]);
    return (
        <>
            <Typography gutterBottom variant="h5" component="div">
                Late Checkouts:
            </Typography>

            <Typography
                component="div"
                gutterBottom
                variant="body2"
                color="text.secondary"
            >
                {loading ? <div>Loading...</div> : <h2>{lateCheckouts}</h2>}
            </Typography>
        </>
    );
};
export default LateCheckout;
