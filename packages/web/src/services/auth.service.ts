import axios from "axios";
import apiClient from "@/libs/axios";
export const login = async (email: string, password: string) => {
  try {
    const response = await apiClient.post("auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error?.response?.data;
    }
  }
};

export const register = async (email: string, password: string, passwordConfirm: string): Promise<any> => {
  try {
    const result = await apiClient.post("auth/register", {
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
