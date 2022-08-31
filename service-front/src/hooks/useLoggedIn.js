import { useContext, useEffect } from "react";
import { UserContext } from "../context/user";

const useLoggedIn = () => {
  const user = useContext(UserContext);
  const { logout } = useContext(UserContext);

  useEffect(() => {
    if (!user.user.token) {
      logout();
    }
  }, [logout, user]);
};

export default useLoggedIn;
