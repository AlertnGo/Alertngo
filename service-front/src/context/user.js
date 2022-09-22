import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  let history = useHistory();
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({});

  // Login updates the user data with a name parameter
  const login = (data) => {
    setUser(() => data);
  };

  const refreshName = (data) => {
    setUser(() => data.user.name);
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser(() => ({}));
    history.push("/me/login");
  };

  return (
    <UserContext.Provider value={{ user, login, logout, refreshName }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
