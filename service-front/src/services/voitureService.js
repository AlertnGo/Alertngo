import api from "./api";

const VoitureService = {
  getByNdp: async (title) => {
    return await api.get(`/car`, { title });
  },
  deleteCar: async (id) => {
    return await api.delete(`/car/${id}`);
  },
  addCar: async (title, userId) => {
    return await api.post("/car", { title, userId });
  },
  getAllByUser: async (id) => {
    return await api.get(`/car/${id}`);
  },
};

export default VoitureService;
