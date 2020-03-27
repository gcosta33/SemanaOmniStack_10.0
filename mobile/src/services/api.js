import axios from 'axios'

const api = axios.create({
    //Dev only
    baseURL: 'http://192.168.100.28:3113' 
})

export default api