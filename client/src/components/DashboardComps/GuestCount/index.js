import React, {useEffect} from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ROOMS_AVAILABLE } from "../../../utils/queries";
import {useStoreContext} from "../../../utils/GlobalState";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const GuestCount = () => {
    const [state, dispatch] = useStoreContext()
    const {roomsAvailable} = state;
    const { data: vacancy } = useQuery(QUERY_ROOMS_AVAILABLE);
    
    useEffect(() => {
        if (vacancy) {
            dispatch({
                type: GET_ROOM_COUNT,
                roomsAvailable: vacancy.length
            })
        }
    }, [vacancy, dispatch]);

    return (
        <>
            <Card sx={12}>
                <CardContent sx={{
                    height: "100%"
                }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Room Availability: {loading ? (<div>Loading...</div>):(<h2>{roomsAvailable}</h2>)}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};
export default GuestCount;
