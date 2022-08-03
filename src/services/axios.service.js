import axios from "axios";

import {baseURL} from "../constans";

let axiosService = axios.create({baseURL});

export {
    axiosService
}