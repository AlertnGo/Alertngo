import api from "./api";

const addServices = {
  getAll: async () => {
    return await api.get("/add");
  },

  add: async (latitude, longitude, userId) => {
    return await api.get(`/add/${userId}`, { latitude, longitude });
  },
};

export default addServices;
