import React, { useEffect, useState } from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
    const tabs = ["check-in", "check-out"];
    const [state, dispatch] = useStoreContext();
    const { currentTab } = state;

    return (
        <div>
            <Link to="/">
                <h1>Hotel Redux</h1>
            </Link>
            <ul className="nav-links-wrapper">
                {tabs.map((tab) => (
                    <Link to={`/${tab}`}>
                        <li>{capitalizeFirstLetter(tab)}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Nav;
