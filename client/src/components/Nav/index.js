import React, { useEffect, useState } from "react";
import Auth from "../../utils/auth";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
    const [state, dispatch] = useStoreContext();
    const { currentTab } = state;

    return (
        <div>
            <Link to="/">
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
            </Link>

            <Link to="/check-in">
                <ListItem button>
                    <ListItemIcon>
                        <ArrowForwardOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Check In" />
                </ListItem>
            </Link>

            <Link to="/check-out">
                <ListItem button>
                    <ListItemIcon>
                        <ArrowBackOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Check Out" />
                </ListItem>
            </Link>

            {Auth.loggedIn() && (
                <ListItem button onClick={() => Auth.logout()} href={"/login"}>
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
