import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/'


const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000, //don't handler forever
    headers: {
        'Content-Type': 'application/json',
         accept: 'application/json',
    }

});


export default axiosInstance;

