import React from "react";
import dateFormat from "../../../utils/dateFormat";
import Typography from "@mui/material/Typography";

const CurrentDateTime = () => {
    return (
        <>
            
                    <Typography gutterBottom variant="h5" component="div">
                        Date and Time:
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="body2"
                        color="text.secondary"
                    >
                        {dateFormat(Date.now())}
                    </Typography>
        </>
    );
};

export default CurrentDateTime;
