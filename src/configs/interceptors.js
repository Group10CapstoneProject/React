// import axios, { AxiosError } from "axios";
// import CONST from "../utils/Constants";
// import Auth from "../utils/Auth";

// const exceptionApiUrlforRT = (config) => {
//   if (!config) return null;
//   const arr = [config.url.includes("/auth/admin/login")];
//   return !arr.includes(true);
// };

// export const isHandlerEnabled = (config) => {
//   return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
//     ? false
//     : true;
// };

// export const requestHandler = async (config) => {
//   if (isHandlerEnabled(config)) {
//     const auth = Auth.getAccessToken();

//     if (auth) {
//       config.headers.token = auth;
//     } else if (exceptionApiUrlforRT(config)) {
//       try {
//         const rt = Auth.getRefreshToken();
//         if (rt) {
//           const resRT = await axios.post(
//             `${CONST.BASE_URL}/auth/admin/refresh`,
//             {
//               refresh_token: rt,
//             }
//           );
//           const payload = resRT.data.data;
//           Auth.storeUserInfoToCookie(payload);
//           config.headers.token = payload.access.token;
//         }
//       } catch (error) {
//         const { message, code, request, response } = error;
//         throw new AxiosError(message, code, config, request, response);
//       }
//     }
//   }
//   return config;
// };

// export const successHandler = (response) => {
//   if (isHandlerEnabled(response)) {
//     if (response.status === 200) {
//       return response;
//     }
//   }
//   return response;
// };

// export const errorHandler = (error) => {
//   return Promise.reject({ ...error });
// };
