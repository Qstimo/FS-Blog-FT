import axios from "axios";
export const API_URL = process.env.REACT_APP_API_URL;
// export const API_URL = 'http://localhost:4444';

const instance = axios.create(
    { baseURL: API_URL }
    // {baseURL: 'http://localhost:4444'}
)
instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token');
    return config
})
export default instance