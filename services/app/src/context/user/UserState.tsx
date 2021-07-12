import React, { createContext, useEffect, useReducer } from 'react';

import userReducer from './userReducer';
import User from "../../models/user";


//define initial state for the context
var initialState = {
  user: new User('','',"guest",true)
};
// create new context and assing the initial state
export const UserContext = createContext(initialState);
// create a provider
export const UserProvider = ({ children }) => {

  const [state, dispatch] = useReducer(userReducer, initialState);

  function setUser(user:User) {
    dispatch({
      type: "SET_USER",
      payload: user
    });
  }
  // define shared variables and functions
  // use Memo is only used to render components only if state has changed
  const value = React.useMemo(() => {
    return { user:state.user, setUser};
  }, [state]);

  return (
    <UserContext.Provider
      value={value}
    >
      {children}
    </UserContext.Provider>
  );
};