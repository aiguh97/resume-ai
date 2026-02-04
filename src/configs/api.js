import axios from 'axios'

const api = axios.create({
    baseURL: "http://202.155.90.6:30080"
})

export default api