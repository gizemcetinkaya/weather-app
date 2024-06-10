import axios from "axios";

export const http = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    params: {
        key: process.env.REACT_APP_API_KEY,
    }
});