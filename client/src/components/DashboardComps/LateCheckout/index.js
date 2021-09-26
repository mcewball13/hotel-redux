import React, { Fragment, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CURRENT_GUESTS } from "../../../utils/queries";
import { useStoreContext } from "../../../utils/GlobalState";
import Typography from "@mui/material/Typography";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const LateCheckout = () => {
    const [state] = useStoreContext();
    const {modalOpen} = state;
    const { loading, data, refetch } = useQuery(QUERY_CURRENT_GUESTS, {
        fetchPolicy: 'no-cache'
    });

    useEffect(() => {
        if(!modalOpen) {
            refetch()
        }
    }, [modalOpen, refetch])

    if (loading) return <div>Loading...</div>;
    const { checkedIn } = data;
    const lateCheckouts = checkedIn.filter((room) => {
        return parseInt(room.guest.check_out) < Date.now();
    });

    return (
        <Fragment>
            <Typography gutterBottom variant="h5" component="div">
                Late Checkouts:
            </Typography>

            <Typography
                component="div"
                gutterBottom
                variant="body2"
                color="text.secondary"
            >
                <Table size="small">
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
        </Table>
            </Typography>
            </Fragment>
    );
};
export default LateCheckout;
