import React, { useEffect, Fragment } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_CURRENT_GUESTS } from "../../../utils/queries";
import { useStoreContext } from "../../../utils/GlobalState";
import { CHECK_IN } from "../../../utils/actions";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const YourGuests = () => {
    const [state, dispatch] = useStoreContext();
    const { checkedInGuests } = state;
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
                        <TableCell>Name</TableCell>
                        <TableCell>Nights</TableCell>
                        <TableCell>Party</TableCell>
                        <TableCell>Checked In</TableCell>
                        <TableCell align="right">Balance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {roomList.map((room, i) => (
                        <TableRow key={i}>
                            <TableCell>{room.guest.name}</TableCell>
                            <TableCell>{room.guest.nights}</TableCell>
                            <TableCell>{room.guest.party}</TableCell>
                            <TableCell>{room.guest.check_in}</TableCell>
                            <TableCell align="center">{`$${room.guest.balance}`}</TableCell>
                            <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{ marginLeft: 16 }}
                        >
                            Check Out
                        </Button>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
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
