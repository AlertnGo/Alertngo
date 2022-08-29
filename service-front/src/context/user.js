import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({});

  // Login updates the user data with a name parameter
  const login = (data) => {
    setUser(() => data);
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser(() => ({}));
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
