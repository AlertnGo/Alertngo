import React, { createContext, useState, useCallback } from "react";

// create context
const userContext = createContext();

const UserContextProvider = ({ children, data }) => {
  // the value that will be given to the context
  const [user, setUser] = useState(null);

  // const saveUser = useCallback(() => {
  //   setUser(data);
  // }, [data]);

  return (
    // the Provider gives access to the context to its children
    <userContext.Provider value={user}>{children}</userContext.Provider>
  );
};

export { userContext, UserContextProvider };
