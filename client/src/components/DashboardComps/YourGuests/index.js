import React, { useEffect, Fragment} from "react";
import { useQuery} from "@apollo/client";
import { QUERY_CURRENT_GUESTS } from "../../../utils/queries";
import { useStoreContext } from "../../../utils/GlobalState";
import { CHECK_IN, MODAL_PROPS } from "../../../utils/actions";
import CheckOutModal from "./CheckoutModal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const YourGuests = () => {

    const [state, dispatch] = useStoreContext();
    const { modalOpen } = state;
    // console.log(`this is data ${JSON.stringify(data.checkedIn[0].guest.name)}`)
    const { loading, data } = useQuery(QUERY_CURRENT_GUESTS);

    useEffect(() => {
        if (data) {
            dispatch({
                type: CHECK_IN,
                checkedInGuests: data,
            });
        }
        // dispatch()
    }, [dispatch, data]);
    
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

    // console.log(`this is checkedIn ${data.checkedIn[0].guest.name}`)

    let roomList = data.checkedIn;

    // const rows = roomList.map((guest, i) => ({
    //     id: i,
    //     name: guest.guest.name,
    //     party: guest.guest.party,
    //     nights: guest.guest.nights,
    //     check_in: guest.guest.check_in,
    //     balance: guest.guest.balance,
    // }));
    // console.log(rows);
    // const columns:

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
                        <TableCell>Name</TableCell>
                        <TableCell>Nights</TableCell>
                        <TableCell>Party</TableCell>
                        <TableCell>Checked In</TableCell>
                        <TableCell align="center">Balance</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {roomList.map((room, i) => (
                        <TableRow key={i}>
                            <TableCell>{room.room_id}</TableCell>
                            <TableCell>{room.guest.name}</TableCell>
                            <TableCell>{room.guest.nights}</TableCell>
                            <TableCell>{room.guest.party}</TableCell>
                            <TableCell>{room.guest.check_in}</TableCell>

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
        </Fragment>

        // old page code
        // <DataGrid
        //     columns={[
        //         { field: "name", headerName: "Name", width: 150 },
        //         { field: "party", headerName: "Party", width: 150 },
        //         { field: "nights", headerName: "Nights", width: 150 },
        //         { field: "check_in", headerName: "Checked In", width: 150 },
        //         { field: "balance", headerName: "Balance", width: 150 },
        //         {
        //             field: "pay_now",
        //             width: 150,
        //             headerName: "Pay Now",
        //             renderCell: () => (
        // <Button
        //     variant="contained"
        //     color="primary"
        //     size="small"
        //     style={{ marginLeft: 16 }}
        // >
        //     Pay Now
        // </Button>
        //             ),
        //         },
        //     ]}
        //     rows={rows}
        // />
    );
};
export default YourGuests;
