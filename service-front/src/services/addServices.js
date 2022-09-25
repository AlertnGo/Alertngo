import api from "./api";

const addServices = {
  getAll: async () => {
    return await api.get("/add");
  },

  add: async (data) => {
    return await api.post(`/add/`, data);
  },
};

export default addServices;
