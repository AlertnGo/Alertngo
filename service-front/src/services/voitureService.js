import api from "./api";

const VoitureService = {
  getByNdp: async (title) => {
    return await api.get(`/car/${title}`);
  },
  deleteCar: async (id) => {
    return await api.delete(`/car/${id}`);
  },
  addCar: async (title, userid) => {
    return await api.post("/car", { title, userid });
  },
};

export default VoitureService;
