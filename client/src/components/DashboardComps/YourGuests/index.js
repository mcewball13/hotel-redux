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
    const {loading, data} = useQuery(QUERY_CURRENT_GUESTS);
    const guests = data?.guests || []
    
    const rows = guests.map((guest) => ({
        name: guest.name,
        party: guest.party,
        nights: guest.nights,
        check_in: guest.check_in,
        balance: guest.balance,
    }));
    // const columns:

    return (
    <div style={{height: 250}}>
     <DataGrid
        columns={[
          {field: 'name', headerName: 'Name', width: 150 },
          { field: 'party', headerName: 'Party', width: 150 },
          { field: 'nights', headerName: 'Nights', width: 150 },
          { field: 'check_in', headerName: 'Checked In', width: 150},
          { field: 'balance', headerName: 'Balance', width: 150 },
          { field: "pay_now", width: 150, headerName: "Pay Now", renderCell: () => (
            <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
          >
            Open
          </Button>
          )}
          
        ]}
        rows={rows}
      />
    </div>
    );
};
export default YourGuests;
