import { axiosInstance } from "./axios.ts";

type LoginPayload = {
  email: string;
  password: string;
};

type SignupPayload = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: Date;
};

type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
};

export const login = async (payload: LoginPayload): Promise<AuthResponse> => {
  console.log(axiosInstance);
  const response = await axiosInstance.post("/user/auth/login", payload);
  console.log(response);
  const data = response.data.data;
  console.log(data);
  console.log("the access token from api", data.accessToken);
  console.log("the access token from api", data.refreshToken);
  return response.data;
};

export const signup = async (payload: SignupPayload): Promise<AuthResponse> => {
  const response = await axiosInstance.post("/user/auth/signup", payload);
  return response.data;
};
