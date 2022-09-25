import React from "react";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/user";

const ProtectedRoute = ({ children }) => {
  const token = useContext(UserContext);
  return token ? children : <Redirect to="/me/login" />;
};

export default ProtectedRoute;
