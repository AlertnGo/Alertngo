import api from "./api";

const messagesServices = {
  getAll: async () => {
    return await api.get("/messages");
  },
};

export default messagesServices;
