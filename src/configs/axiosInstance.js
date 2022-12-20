import axios from "axios";
import Cookies from "js-cookie";
import Auth from "../utils/Auth";
import CONST from "../utils/Constants";
import { errorHandler, requestHandler, successHandler } from "./interceptors";

const axiosInstance = axios.create({
  baseURL: CONST.BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${Auth.getAccessToken()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axios.interceptors.request.use(
//   async (config) => {
//     const token = Auth.getAccessToken();
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     } else {
//       try {
//         const token = await Auth.getAccessToken();
//         config.headers["Authorization"] = `Bearer ${token}`;
//       } catch (e) {
//         console.log(e);
//       }
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Handle request process
// axiosInstance.interceptors.request.use((request) => requestHandler(request));

// // Handle response process
// axiosInstance.interceptors.response.use(
//   (response) => successHandler(response),
//   (error) => errorHandler(error)
// );

export default axiosInstance;
