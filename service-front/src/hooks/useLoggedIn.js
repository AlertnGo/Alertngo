import { useContext, useEffect } from "react";
import {userContext} from "../context/user";

const useLoggedIn = () => {
  const context = useContext(userContext);


  useEffect(() => {
    if (!context.user) {
      alert("dfd")
    }
  }, [context.user]);
};

export default useLoggedIn;
