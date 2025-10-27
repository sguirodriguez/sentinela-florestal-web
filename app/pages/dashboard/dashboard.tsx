import { useAuth } from "../../context/auth-context";
import { Button, Header } from "../../components";

export function DashboardPage() {
    const { user, logout } = useAuth();

    return (
        <div className="dashboard-page">
            <Header
                logo={<h1>Sentinela Florestal</h1>}
                userInfo={<span>{user?.email}</span>}
                actions={
                    <Button variant="danger" size="sm" onClick={logout}>
                        Sair
                    </Button>
                }
            />

            <main className="dashboard-main">
                <div className="dashboard-content">
                    <h2>Bem-vindo ao Dashboard!</h2>
                    <p>
                        Esta é uma rota protegida. Você só pode ver este conteúdo porque
                        está autenticado.
                    </p>
                    {user && (
                        <div className="user-info">
                            <p>
                                <strong>ID:</strong> {user.id}
                            </p>
                            <p>
                                <strong>Email:</strong> {user.email}
                            </p>
                            <p>
                                <strong>Nome:</strong> {user.name}
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
