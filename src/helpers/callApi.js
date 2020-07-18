import { getConfig } from '../env';
import { getTokenFromLocalStorage } from './helpers';
import axios from 'axios';

export const callApi = (data, options) => {
    const { endpoint, token, method } = options;
    const config = {
        method: method || 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        data: method === 'POST' ? JSON.stringify({
            ...data,
            token: token || getTokenFromLocalStorage(),
        }) : undefined,
        url: `${getConfig('API_SERVER')}/${endpoint}`
    };
    /*eslint-disable-next-line*/
    return axios({...config })
        .then(response => {
            return response.data
        })
        .catch(err => {
            return { errorMessage: err }
        });
};