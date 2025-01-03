import axios from "axios";

interface RegisterUserPayload {
  username: string;
  email: string;
  password: string;
}

interface LoginUserPayload {
  identifier: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    username: string;
  };
}

export const registerUser = async (payload: RegisterUserPayload) => {
  const response = await axios.post("http://localhost:3000/register", payload);
  return response.data;
};

export const loginUser = async (
  payload: LoginUserPayload
): Promise<LoginResponse> => {
  const response = await axios.post("http://localhost:3000/login", payload);
  return response.data;
};
