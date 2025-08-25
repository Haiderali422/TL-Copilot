import { axiosInstance } from "./axios.ts";
import {setTokens} from "../utils/storage.ts";
import type {AuthResponse, LoginPayload, SignupPayload} from "../types/auth";



export const login = async (payload: LoginPayload): Promise<AuthResponse> => {
  const response = await axiosInstance.post("/user/auth/login", payload);
  const data = response.data.data;
  setTokens(data.accessToken , data.refreshToken);
  return response.data;
};

export const signup = async (payload: SignupPayload): Promise<AuthResponse> => {
  const response = await axiosInstance.post("/user/auth/signup", payload);
  return response.data;
};
