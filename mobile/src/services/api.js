import axios from 'axios'

export const baseURL = 'http://192.168.100.24:3113' 

const api = axios.create({
    //Dev only
    baseURL: baseURL
})

export default api