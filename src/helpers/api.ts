import axios from "axios";

export const baseURL =
    process.env.REACT_APP_API_BASE_URL ?? "http://192.168.86.47:1337";

export const api = axios.create({
    baseURL,
});
