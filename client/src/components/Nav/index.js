import React from "react";
import Auth from "../../utils/auth";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import {CURRENT_TAB} from '../../utils/actions'

function Nav() {
    const [, dispatch] = useStoreContext();

    const handleCompChange = (tab) => {
     dispatch({
        type: CURRENT_TAB,
        currentTab: tab
     })   
    }
    return (
        <div>
            <Link to="/">
                <ListItem button onClick={() => handleCompChange("dashboard")}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
            </Link>

            
                <ListItem button onClick={() => handleCompChange("check-in")}>
                    <ListItemIcon>
                        <ArrowForwardOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Check In" />
                </ListItem>
                
                <ListItem button onClick={() => handleCompChange("management")}>
                    <ListItemIcon>
                        <AssignmentIndIcon />
                    </ListItemIcon>
                    <ListItemText primary="User Management" />
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
