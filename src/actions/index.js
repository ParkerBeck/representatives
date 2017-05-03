import axios from 'axios';

const API_KEY = 'AIzaSyDPox7gYab-LdEKLJ3H7Y5JB7lg2ChrRY0';

export const GET_REPRESENTATIVES = 'GET_REPRESENTATIVES';

const ROOT_URL = 'https://www.googleapis.com/civicinfo/v2/';

export function getRepresentatives(address) {
    const url = `${ROOT_URL}representatives`;

    const request = axios.get(url, {
        params: {
            key: API_KEY,
            address: address
        }
    });

    return {
        type: GET_REPRESENTATIVES,
        payload: request
    };

}