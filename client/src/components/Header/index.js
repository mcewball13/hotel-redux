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
      <div className="flex-container-row end">
      <a className={`open-close-button ${isActive ? "open" : ""}`} onClick={ToggleClass} />
      </div>
        <nav className="text-center">
          {isActive ? <Nav></Nav> : null}

        </nav>
      
    </header>
  );
};

export default Header;
