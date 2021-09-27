import React, {useEffect} from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ROOMS_AVAILABLE } from "../../../utils/queries";
import {useStoreContext} from "../../../utils/GlobalState";
import {GET_ROOM_COUNT} from "../../../utils/actions"
import Typography from "@mui/material/Typography";

const GuestCount = () => {
    const [state, dispatch] = useStoreContext()
    const {roomsAvailable, modalOpen} = state;

    const { loading, data, refetch} = useQuery(QUERY_ROOMS_AVAILABLE)
    

    useEffect(() => {
        if (data) {
            dispatch({
                type: GET_ROOM_COUNT,
                roomsAvailable: data.vacancy.length
            })
        }
        if(!modalOpen) {
            refetch()
        }
        
        
    }, [ modalOpen, dispatch, refetch, data])
    if (loading) return <div>Loading...</div>

    
   

    return (
        <>
                    <Typography gutterBottom variant="h5" component="div">
                        Room Availability: {<h2>{roomsAvailable}</h2>}
                    </Typography>
        </>
    );
};
export default GuestCount;
