import axios from "axios";
import { baseURL } from "./constant/index";
const http = axios.create({
    baseURL: baseURL,
});

export default http;
