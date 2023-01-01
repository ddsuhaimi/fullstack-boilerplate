import axios from "axios";
import apiClient from "src/libs/axios";
export const login = async (email: string, password: string) => {
  try {
    await apiClient.post("auth/login", {
      email,
      password,
    });
  //   const result = await axios.post("api/auth/login", {
  //     email,
  //     password,
  //   });
  //   return result.data;
  // } catch (error) {
  //   if (axios.isAxiosError(error)) {
  //     return error?.response?.data;
  //   }
  // }
};

export const register = async (email: string, password: string, passwordConfirm: string): Promise<any> => {
  try {
    const result = await axios.post("auth/register", {
      email,
      password,
      passwordConfirm,
    });
    return result.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error?.response?.data;
    }
  }
};
