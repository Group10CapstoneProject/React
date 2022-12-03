import axios from "axios";
import Cookies from "js-cookie";
import Auth from "../utils/Auth";
import CONST from "../utils/Constants";
import { errorHandler, requestHandler, successHandler } from "./interceptors";

const axiosInstance = axios.create({
  baseURL: CONST.BASE_URL,
});

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${Auth.getAccessToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle request process
axiosInstance.interceptors.request.use((request) => requestHandler(request));

// Handle response process
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export default axiosInstance;
