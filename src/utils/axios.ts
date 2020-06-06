import axios from 'axios';
import https from 'https';

const axiosInstance = (baseURL: string, customHeaders: object = {}) => {
    if (customHeaders.toString() !== '[object Object]') {
        throw new Error('Invalid syntax for headers object');
    }
    const options = {
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
            ...customHeaders
        }
    };
    let axiosInstance = axios.create(options);
    axiosInstance.defaults.httpsAgent = new https.Agent({
        rejectUnauthorized: false
    });
    axiosInstance.interceptors.request.use(config => {
        console.log(config);
        return config;
    }, error => {
        console.error(error);
        return Promise.reject(error);
    });
    axiosInstance.interceptors.response.use(response => {
        console.log(response);
        return response;
    }, error => {
        console.error(error);
        return Promise.reject(error);
    });
    return axiosInstance;
};

export default axiosInstance;