import { request, getErrorMessage } from "../utils/api";
import { storage } from "../utils/storage";
import toast from "react-hot-toast";

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
}

export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    birthday: string;
}

export const login = async (credentials: LoginRequest): Promise<LoginResponse | null> => {
    const { data, error } = await request.post<LoginResponse>("/auth/login", credentials);

    if (error) {
        const message = getErrorMessage(error);
        toast.error(message);
        return null;
    }

    if (!data?.token) return null;

    storage.setItem("token", data.token);
    return data;
};

export const register = async (userData: RegisterRequest): Promise<unknown> => {
    const { data, error } = await request.post("/auth/register", userData);

    if (error) {
        const message = getErrorMessage(error);
        toast.error(message);
    }

    return data;
};

