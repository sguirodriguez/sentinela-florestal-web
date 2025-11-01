import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { login as loginService } from "../services/auth";
import { storage } from "../utils/storage";
import { useNavigate } from "react-router";

interface AuthContextType {
    isLoading: boolean;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = storage.getItem("token");
        setIsAuthenticated(!!token);
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        const response = await loginService({ email, password });

        if (!response?.token) {
            setIsAuthenticated(false);
            setIsLoading(false);
            return;
        }

        setIsAuthenticated(true);
        setIsLoading(false);

        navigate("/dashboard");
    };

    const logout = () => {
        storage.removeItem("token");
        setIsAuthenticated(false);
    };

    const value: AuthContextType = {
        isLoading,
        isAuthenticated,
        login,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
}
