import "date-fns";
import React, { useEffect, Fragment} from "react";
import { useQuery} from "@apollo/client";
import { QUERY_ROOMS_AVAILABLE } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";
import { MODAL_PROPS } from "../../utils/actions";
import CheckInModal from "./CheckInModal";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const CheckIn = () => {
    const [state, dispatch] = useStoreContext();
    const { modalOpen } = state;
    const { loading, data, refetch } = useQuery(QUERY_ROOMS_AVAILABLE);
    useEffect(() => {
        if(!modalOpen) {
            refetch();
        }
    }, [modalOpen, refetch]);

    if (loading) return <div>Loading...</div>;
    
    let roomList = data.vacancy;

    const handleClickOpen = room => {
        dispatch({
            type: MODAL_PROPS,
            modalOpen: true,
            modalProps: {
                room_id: room.room_id
            }
        })
    };

    return (
        <Fragment>
            <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
            >
                Your Guests
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Room Number</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {roomList.map((Room, i) => (
                        <TableRow key={i}>
                            <TableCell>{Room.room_id}</TableCell>
                            <TableCell>{Room.description}</TableCell>

                            <TableCell>
                                <Button
                                    id={Room.room_id}
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    style={{ marginLeft: 16 }}
                                    onClick={(event) =>
                                        handleClickOpen(Room)
                                    }
                                >
                                    Book Now
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {modalOpen && <CheckInModal refetch={refetch}/>}
        </Fragment>
    );
};

export default CheckIn;
