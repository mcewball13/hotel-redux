import React, {createContext, useContext} from 'react';

const StoreContext = createContext()
const { Provider } = StoreContext

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
      products: [],
      categories: [],
      currentCategory: '',
    });


   
    return <Provider value={[state, dispatch]} {...props} />;
  };

  const UiProvider = ({value = [], ...props}) => {
    const [state, dispatch] = useUiReducer({
      isActive: false,
      isLoginPage: false,
    })
    return <Provider value={[state, dispatch]} {...props} />;
  }