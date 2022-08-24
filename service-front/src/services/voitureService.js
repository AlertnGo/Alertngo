import api from './api';

const VoitureService = {
    getByNdp: async (ndp) => {
        return await api.get(`/voitures/${ndp}`)
    },
    deleteCar: async (id) => {
        return await api.delete(`/voitures/${id}`)
    },
    addCar: async (title,userid) => {
        return await api.post('/car', {title, userid})
    },
}

export default VoitureService;

