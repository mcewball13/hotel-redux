import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CURRENT_GUESTS } from "../../../utils/queries";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const YourGuests = () => {
    const [loading, data] = useQuery(QUERY_CURRENT_GUESTS);
    const rows = data.map((guest) => ({
        name: guest.name,
        party: guest.party,
        nights: guest.nights,
        check_in: guest.check_in,
        balance: guest.balance,
    }));
    // const columns:

    return (
    <>
     <DataGrid
        columns={[
          {field: 'name', headerName: 'Name', },
          { field: 'party', headerName: 'Party Count' },
          { field: 'nights', headerName: 'Number of Nights' },
          { field: 'check_in', headerName: 'Checked In' },
          { field: 'balance', headerName: 'Balance' },
        ]}
        rows={rows}
      />
    </>
    );
};
export default YourGuests;
