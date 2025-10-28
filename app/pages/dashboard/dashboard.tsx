import { useAuth } from "../../context/auth-context";
import { Button, Header } from "../../components";
import { useNavigate } from "react-router";

export function DashboardPage() {
    /* Aqui eu declarei a constante goToSettings, que chama um navigate
    (permite redirecionar o usuário para diferentes rotas da aplicação)
    e "/settings", ela navega o usuário para a rota de configurações. */
    const { user, logout, } = useAuth();
    const navigate = useNavigate();
    const goToSettings = () => {
        navigate("/settings")

    }

    return (
        <div className="dashboard-page">
            <Header
                logo={<h1>Sentinela Florestal</h1>}
                userInfo={<span>{user?.email}</span>}
                actions={
                    /* Botão novo
                    no *clique*, vai para a goToSettings */
                    <>
                    <Button variant="primary" size="sm" onClick={goToSettings}>
                            Editar
                    </Button><Button variant="danger" size="sm" onClick={logout}>
                            Sair
                        </Button></>
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
