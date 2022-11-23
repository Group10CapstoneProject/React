import axios from "axios";
import CONST from "../utils/Constants";

const config = {
  baseURL: CONST.BASE_URL,
};

export const axiosInstance = axios.create(config);
