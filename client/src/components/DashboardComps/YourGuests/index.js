import React, { useEffect, Fragment} from "react";
import { useQuery} from "@apollo/client";
import { QUERY_CURRENT_GUESTS } from "../../../utils/queries";
import { useStoreContext } from "../../../utils/GlobalState";
import { CHECK_IN, MODAL_PROPS } from "../../../utils/actions";
import dateFormatter from "../../../utils/dateFormat";
import CheckOutModal from "./CheckoutModal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";

const YourGuests = () => {

    const [state, dispatch] = useStoreContext();
    const { modalOpen, checkedInGuests } = state;
    // console.log(`this is data ${JSON.stringify(data.checkedIn[0].guest.name)}`)
    const { loading, data } = useQuery(QUERY_CURRENT_GUESTS, {
        fetchPolicy: 'no-cache'
    });
    console.log(checkedInGuests)
    

    // useEffect(() => {
    //     if (data) {
    //         dispatch({
    //             type: CHECK_IN,
    //             checkedInGuests: data,
    //         });
    //     }

    //     // dispatch()
    // }, [dispatch, data]);
    
    const handleClickOpen = room => {
        dispatch({
            type: MODAL_PROPS,
            modalOpen: true,
            modalProps: {
                room_id: room.room_id,
                name: room.guest.name,
                balance: room.guest.balance
            }
        })
    };
    
    
    if (loading) return <div>Loading...</div>;
    const guestList = data.checkedIn
    

    return (
        <Box sx={{overflow: "auto"}}>
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
                        <TableCell>Name</TableCell>
                        <TableCell>Nights</TableCell>
                        <TableCell>Party</TableCell>
                        <TableCell>Checked In</TableCell>
                        <TableCell align="center">Balance</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {guestList.map((room, i) => (
                        <TableRow key={i}>
                            <TableCell>{room.room_id}</TableCell>
                            <TableCell>{room.guest.name}</TableCell>
                            <TableCell>{room.guest.nights}</TableCell>
                            <TableCell>{room.guest.party}</TableCell>
                            <TableCell>{dateFormatter(parseInt(room.guest.check_in))}</TableCell>

                            <TableCell align="center">{`$${room.guest.balance}`}</TableCell>
                            <TableCell>
                                <Button
                                    id={room.room_id}
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    style={{ marginLeft: 16 }}
                                    onClick={(event) =>
                                        handleClickOpen(room)
                                    }
                                >
                                    Check Out
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {modalOpen && <CheckOutModal/>}
        </Box>
    );
};
export default YourGuests;
