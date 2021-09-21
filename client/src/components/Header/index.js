import { display } from "@mui/system";
import React from "react";
import {Link} from 'react-router-dom';
import {useStoreContext} from "../../utils/GlobalState";
import {HEADER_ACTIVE} from "../../utils/actions";
import Nav from "../Nav"

const Header = () => {

  const [state, dispatch] = useStoreContext()
  const {isActive, isLoginPage, currentTab} = state;
  const handleActiveChange = () => {
    dispatch({
      type: HEADER_ACTIVE,
    })
  }


  return (
<>
    {isLoginPage ? <></>: <header className={`sideHeader ${isActive ? "" : "closed"}`}>
      <div className="flex-container-row end">
      <a className={`open-close-button ${isActive ? "open" : ""}`} onClick={()=>handleActiveChange()} />
      </div>
        <nav className="text-center">
          {isActive ? <Nav></Nav> : null}

        </nav>
      
    </header>}
    </>
  );
};

export default Header;
