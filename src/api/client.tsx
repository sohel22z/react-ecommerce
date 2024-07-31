import axios from "axios";

const API_URL = 'https://fakestoreapi.com'

const client = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default client;