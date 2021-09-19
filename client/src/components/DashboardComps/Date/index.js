import React from "react";
import dateFormat from "../../../utils/dateFormat";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CurrentDateTime = () => {
    return (
        <>
            <Card
                xs={12}
                sx={{
                    height: "100%",
                }}
            >
                <CardContent>
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
                </CardContent>
            </Card>
        </>
    );
};

export default CurrentDateTime;
