import { useContext, useEffect } from "react";
import { UserContext } from "../context/user";

const useLoggedIn = () => {
  const token = useContext(UserContext);
  const { logout } = useContext(UserContext);

  useEffect(() => {
    if (!token) {
      logout();
    }
  }, [logout, token]);
};

export default useLoggedIn;
