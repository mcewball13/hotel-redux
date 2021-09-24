import "date-fns";
import React, { useState, useEffect, Fragment} from "react";
import { useQuery} from "@apollo/client";
import { QUERY_ROOMS_AVAILABLE } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";
import { CHECK_IN, MODAL_PROPS } from "../../utils/actions";
import CssBaseline from "@mui/material/CssBaseline";
import { useMutation } from "@apollo/client";
import { CHECK_IN_GUEST } from "../../utils/mutations";
import CheckInModal from "./CheckInModal";

import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const CheckIn = () => {
    const [state, dispatch] = useStoreContext();
    const { modalOpen } = state;
    // console.log(`this is data ${JSON.stringify(data.checkedIn[0].guest.name)}`)
    const { loading, data } = useQuery(QUERY_ROOMS_AVAILABLE);
    useEffect(() => {
        if (data) {
            dispatch({
                type: CHECK_IN,
                checkedInGuests: data,
            });
        }
        // dispatch()
    }, [dispatch, data]);

    
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
    
    if (loading) return <div>Loading...</div>;

    // console.log(selectedDate);
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
            {modalOpen && <CheckInModal/>}
        </Fragment>
    );
};

export default CheckIn;
