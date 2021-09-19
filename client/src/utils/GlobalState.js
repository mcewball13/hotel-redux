import React, {createContext, useContext} from 'react';
import {useUiReducer} from "./reducers"

const StoreContext = createContext()
const { Provider } = StoreContext

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useUiReducer({
    isActive: false,
    isLoginPlate: true,
  })
    return <Provider value={[state, dispatch]} {...props} />;
  };

  const useStoreContext = () => {
    return useContext(StoreContext);
  };

  export {StoreProvider, useStoreContext};

  