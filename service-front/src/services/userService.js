import api from './api';

const userServices = {  
    signup: async (user) => {
        return await api.post('/user/signup', user)
    },
    getAll: async () => {
        return await api.get('/user')
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
    changeMyName: async (name , id) => {
        return await api.patch(`/user/name/${id}` , {name})
    },
    changeMyNum: async (num , id) => {
        return await api.patch(`/user/telephone/${id}` , {num})
    }
}

export default userServices;