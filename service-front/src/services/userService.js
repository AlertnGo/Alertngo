import api from './api';

const userServices = {  
    signup: async (user) => {
        return await api.post('/user/signup', user)
    },
    login: async (user) => {
        return await api.post('/user/login', user)
    },
    profil: async (id) => {
        const url = "/user/" + id
        return await api.get (url)
    },
    getAllMyCars: async (id) => {
        return await api.get(`/user/cars/${id}`)
    },
    getAll: async () => {
        return await api.get('/user')
    },
    editName : async (id , name) => {
        return await api.patch ( `user/${id}/${name}`)
    },
}

export default userServices;

