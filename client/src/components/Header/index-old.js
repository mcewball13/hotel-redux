import { display } from "@mui/system";
import React from "react";
import {Link} from 'react-router-dom';
import {useStoreContext} from "../../utils/GlobalState";
import {HEADER_ACTIVE} from "../../utils/actions";
import Nav from "../Nav"

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

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
