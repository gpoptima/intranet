import axios from 'axios';
import config from '../config/config.json';
export const API_URL = config[config.mode].api;

axios.defaults.withCredentials = true;

export const request = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    responseType: 'json',
    transformResponse: [(data) => {
        return data;
    }]
});