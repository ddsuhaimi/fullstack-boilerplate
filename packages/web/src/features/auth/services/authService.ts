import apiClient from "@/libs/axios";

export const login = async (email: string, password: string) => {
  try {
    const response = await apiClient.post("auth/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export const signup = async (email: string, password: string, confirmPassword: string) => {
  try {
    const response = await apiClient.post("auth/signup", {
      email,
      password,
      confirmPassword,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
