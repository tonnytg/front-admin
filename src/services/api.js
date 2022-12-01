import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL_BACKEND;

const api = axios.create({
    baseURL: BASE_URL
})

export default api;