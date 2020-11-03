import { getConfig } from '../env';
import axios from 'axios';

export const callApi = (data, options) => {
    const { endpoint, method } = options;
    const config = {
        // withCredentials: true,
        // credentials: 'include',
        method: method || 'POST',
        headers: {
            // 'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            // 'Authorization': document.cookie
        },
        data:
            method === 'POST' || method === 'PUT'
                ? JSON.stringify({
                    ...data
                })
                : undefined,
        url: `${getConfig('API_SERVER')}/${endpoint}`
    };
    /*eslint-disable-next-line*/
    return axios({ ...config })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            return { errorMessage: err };
        });
};