import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import Nav from "../Nav"

const Header = () => {
  const [isActive, setActive] = useState("true");
  const ToggleClass = () => {
      setActive(!isActive);
  }
  return (
    <header className={`sideHeader ${isActive ? "" : "closed"}`}>
      <a className="open-close-btn" onClick={ToggleClass} />
      
        <h1>Hotel Redux</h1>
      
        <nav className="text-center">
          <Nav></Nav>

        </nav>
      
    </header>
  );
};

export default Header;
