import React, { useState, useEffect, Fragment } from "react";
import DeleteUserModal from "./DeleteUserModal";
import { useQuery } from "@apollo/client";
import { QUERY_EMPLOYEES } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";
import { CHECK_IN, MODAL_PROPS } from "../../utils/actions";
import { useMutation } from "@apollo/client";
import Link from '@mui/material/Link'
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const Management = () => {
    const [state, dispatch] = useStoreContext();
    const { modalOpen } = state;

    const { loading, error, data, refetch } = useQuery(QUERY_EMPLOYEES);

    if (loading) return <div>Loading...</div>;

    let employeeData = data.employees;

    const handleClickOpen = (employee) => {
        dispatch({
            type: MODAL_PROPS,
            modalOpen: true,
            modalProps: {
                name: employee.username,
                email: employee.email,
            },
        });
    };

    return (
        <Fragment>
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
            >
                <Link href='signup'>
                <Fab size='small' color="primary" aria-label="add" sx={{m:3 }}>
                    <AddIcon />
                </Fab>
                </Link>
             
                
                <Typography
                    component="h2"
                    variant="h6"
                    color="primary"
                    gutterBottom
                >
                    Your Current Employees
                </Typography>
                
            </Stack>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Employee Username</TableCell>
                        <TableCell>Employee email</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employeeData.map((employee, i) => (
                        <TableRow key={i}>
                            <TableCell>{i + 1}</TableCell>
                            <TableCell>{employee.username}</TableCell>
                            <TableCell>{employee.email}</TableCell>

                            <TableCell>
                                <Button
                                    id={employee.room_id}
                                    variant="contained"
                                    size="small"
                                    style={{ marginLeft: 16 }}
                                    onClick={(event) =>
                                        handleClickOpen(employee)
                                    }
                                >
                                    Remove Employee
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {modalOpen && <DeleteUserModal refetch={refetch} />}
        </Fragment>
    );
};

export default Management;
