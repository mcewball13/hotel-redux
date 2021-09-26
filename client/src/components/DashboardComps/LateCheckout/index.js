import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CURRENT_GUESTS } from "../../../utils/queries";
import { useStoreContext } from "../../../utils/GlobalState";
import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const LateCheckout = () => {
    const [state, dispatch] = useStoreContext();
    const {modalOpen} = state;
    const { loading, data, error, refetch } = useQuery(QUERY_CURRENT_GUESTS, {
        fetchPolicy: 'no-cache'
    });

    useEffect(() => {
        if(!modalOpen) {
            refetch()
        }
    }, [modalOpen])

    if (loading) return <div>Loading...</div>;
    const { checkedIn } = data;
    console.log(checkedIn);
    const lateCheckouts = checkedIn.filter((room) => {
        return parseInt(room.guest.check_out) < Date.now();
    });
    console.log(lateCheckouts);

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
                <TableHead>
                    <TableRow>
                        <TableCell>Room Number</TableCell>
                        <TableCell>Name</TableCell>
                    </TableRow>
                </TableHead>
                {lateCheckouts.map((room, i) => (
                    <TableRow key={i}>
                        <TableCell>{room.room_id}</TableCell>
                        <TableCell>{room.guest.name}</TableCell>
                    </TableRow>
                ))}
            </Typography>
        </>
    );
};
export default LateCheckout;
