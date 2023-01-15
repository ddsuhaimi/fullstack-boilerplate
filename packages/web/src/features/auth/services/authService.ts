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
