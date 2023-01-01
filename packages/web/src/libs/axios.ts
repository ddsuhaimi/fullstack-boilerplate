// import axios from "axios";
// // import { store } from "redux/store";

// // export const configureAxios = () => {
// //   axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
// //   // if (typeof window !== "undefined" && localStorage.getItem("token")) {
// //   //   const token = localStorage.getItem("token");
// //   //   if (token) attachedToken(token);
// //   // }
// // };

// // export const attachedToken = (token: string) => {
// //   axios.defaults.headers.common["Authorization"] = token;
// // };

import Axios from "axios";

// DEBUG
const isDebug = process.env.NODE_ENV !== "production";

// set axios client
const apiClient = Axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}/api`,
});

// intercept when request
// apiClient.interceptors.request.use(
//   (config) => {
//     if (isDebug) {
//       // can output log here
//     }

//     // can make common setting while request here

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // intercept while response
// apiClient.interceptors.response.use(
//   (response) => {
//     if (isDebug) {
//       // can output log here
//     }

//     return response;
//   },
//   (error) => {
//     if (isDebug) {
//       // can output log here
//     }

//     return Promise.reject(error);
//   }
);

export default apiClient;
