import axios from "axios";
// import { useContext } from "react";
// import { UserContext } from "../context/user";
const url = "http://localhost:9000/api";

const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use((config) => {
//   const user = useContext(UserContext);
//   const token = user?.user.token;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default api;
