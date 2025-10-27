import { Navigate } from "react-router";
import { useAuth } from "../context/auth-context";

export default function Index() {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="loading-screen">
                <div className="loading-content">
                    <div className="spinner"></div>
                    <p>Carregando...</p>
                </div>
            </div>
        );
    }

    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }

    return <Navigate to="/login" replace />;
}

export function meta() {
    return [
        { title: "Sentinela Florestal" },
        { name: "description", content: "Sistema de monitoramento florestal" },
    ];
}
