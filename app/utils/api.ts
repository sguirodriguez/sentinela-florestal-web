import axios, { type AxiosInstance, type InternalAxiosRequestConfig, type AxiosError } from "axios";
import { storage } from "./storage";

const API_BASE_URL = "http://localhost:8080/api";

export const getErrorMessage = (error: any): string => {
    return error?.response?.data?.error
        || error?.data?.message
        || error?.data?.error
        || (typeof error?.data === "string" ? error.data : null)
        || error?.message
        || "Erro desconhecido";
};

const addAuthToken = (config: InternalAxiosRequestConfig) => {
    const token = storage.getItem("token");
    
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
};

const handleAuthError = (error: AxiosError) => {
    if (error.response?.status === 401) {
        storage.removeItem("token");
        
        if (typeof window !== "undefined") {
            window.location.href = "/login";
        }
    }
    
    return Promise.reject(error);
};

const createApiInstance = (): AxiosInstance => {
    const api = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            "Content-Type": "application/json",
        },
    });

    api.interceptors.request.use(
        (config) => addAuthToken(config),
        (error) => Promise.reject(error)
    );

    api.interceptors.response.use(
        (response) => response,
        (error) => handleAuthError(error)
    );

    return api;
};

const api = createApiInstance();

export const request = {
    get: async <T = unknown>(url: string) => {
        try {
            const response = await api.get<T>(url);
            return { data: response.data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },

    post: async <T = unknown>(url: string, body?: unknown) => {
        try {
            const response = await api.post<T>(url, body);
            return { data: response.data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },

    put: async <T = unknown>(url: string, body?: unknown) => {
        try {
            const response = await api.put<T>(url, body);
            return { data: response.data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },

    patch: async <T = unknown>(url: string, body?: unknown) => {
        try {
            const response = await api.patch<T>(url, body);
            return { data: response.data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },

    delete: async <T = unknown>(url: string) => {
        try {
            const response = await api.delete<T>(url);
            return { data: response.data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },
};

export default api;
