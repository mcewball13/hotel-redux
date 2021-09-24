import React, { useEffect, useState } from "react";
import Auth from "../../utils/auth";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";

function Nav() {
    const [state, dispatch] = useStoreContext();
    return (
        <div>
            <Link to="/">
                <ListItem button onClick={() => dispatch({currentTab: "dashboard"})}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
            </Link>

            
                <ListItem button onClick={() => dispatch({currentTab: "check-in"})}>
                    <ListItemIcon>
                        <ArrowForwardOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Check In" />
                </ListItem>
           

            
                <ListItem button onClick={() => dispatch({currentTab: "check-out"})}>
                    <ListItemIcon>
                        <ArrowBackOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Check Out" />
                </ListItem>
           

            {Auth.loggedIn() && (
                <ListItem button onClick={() => Auth.logout()}>
                    <ListItemIcon>
                        <LogoutOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Log Out" />
                </ListItem>
            )}
        </div>
    );
}

export default Nav;
