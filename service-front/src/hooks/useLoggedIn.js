import { useContext, useEffect, useHistory } from "react";
import { UserContext } from "../context/user";

const useLoggedIn = () => {
  const user = useContext(UserContext);

  useEffect(() => {
    if (!user.user.token) {
      alert("please log in");
    }
  }, [user]);
};

export default useLoggedIn;
