import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [user, setUser] = useState({});

  // Login updates the user data with a name parameter
  const login = (data) => {
    setUser(() => data);
  };

  const connected = (data) => {
    setToken(() => data);
  };

  const userConnected = (data) => {
    setUserId(() => data);
  };

  // Logout updates the user data to default
  const logout = () => {
    setToken(() => ({}));
  };

  return (
    <UserContext.Provider
      value={{ user, login, logout, token, connected, userId, userConnected }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
