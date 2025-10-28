import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface User {
    id: string;
    email: string;
    name: string;
}
/* Adicionei o updateUser. Responsável por deixar alterar o usuário na tela settings
copilot salvou nessa. Nao entendi direito a montagem da declaração.      */
interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    updateUser: (data: Partial<User>) => Promise<User>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Erro ao recuperar usuário:", error);
                localStorage.removeItem("user");
            }
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 500));

            const mockUser: User = {
                id: "1",
                email,
                name: "Usuário",
            };

            setUser(mockUser);
            localStorage.setItem("user", JSON.stringify(mockUser));
        } catch (error) {
            throw new Error("Credenciais inválidas");
        } finally {
            setIsLoading(false);
        }
    };

    const updateUser = async (data: Partial<User>): Promise<User> => {
  if (!user) throw new Error("Usuário não autenticado");
  setIsLoading(true);
  try {
    // Se tiver backend, troque por chamada fetch/axios para persistir no servidor
    const updatedUser: User = { ...user, ...data };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    return updatedUser;
  } finally {
    setIsLoading(false);
  }
};

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    const value: AuthContextType = {
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
        updateUser,
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
