import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/auth-context";


export default function AuthLayout() {
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

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}

export function meta() {
    return [{ title: "Dashboard - Sentinela Florestal" }];
}
