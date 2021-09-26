import React, {createContext, useContext} from 'react';
import {useUiReducer} from "./reducers"

const StoreContext = createContext()
const { Provider } = StoreContext

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useUiReducer({
    currentTab: "dashboard",
    roomsAvailable: "",
    checkedInGuests: {},
    modalOpen: false,
    signupModal: false,
    signupProps: {
      username: "",
      email: "",
      password: ""
    },
    modalProps: {
      name: "",
      room_id: "",
      balance: ""
    }
  })
    return <Provider value={[state, dispatch]} {...props} />;
  };

  const useStoreContext = () => {
    return useContext(StoreContext);
  };

  export {StoreProvider, useStoreContext};

  