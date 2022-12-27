import axios from "axios";
// import { store } from "redux/store";

export const configureAxios = () => {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;
  // if (typeof window !== "undefined" && localStorage.getItem("token")) {
  //   const token = localStorage.getItem("token");
  //   if (token) attachedToken(token);
  // }
};

export const attachedToken = (token: string) => {
  axios.defaults.headers.common["Authorization"] = token;
};
