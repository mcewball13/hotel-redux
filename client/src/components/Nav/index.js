import React, {useEffect, useState} from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
   
    return (
        <div>
             <h1>Hotel Redux</h1>
            <ul className="nav-links-wrapper">
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Clients</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
