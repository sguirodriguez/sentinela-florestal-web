import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from "axios";

const API_BASE_URL = "http://localhost:3471/api";

export const getErrorMessage = (error: any): string => {
    return error?.data?.message
        || error?.data?.error
        || (typeof error?.data === "string" ? error.data : null)
        || error?.message
        || "Erro desconhecido";
};

const addAuthToken = (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (!token) return config;

    config.headers.Authorization = `Bearer ${token}`;
    return config;
};

const createApiInstance = (): AxiosInstance => {
    const api = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            "Content-Type": "application/json",
        },
    });

    api.interceptors.request.use(addAuthToken, Promise.reject);

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
