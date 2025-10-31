import { useAuth } from "../../context/auth-context";
import { Button, Header } from "../../components";
import { useNavigate } from "react-router";

export function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="dashboard-page">
      <Header
        logo={<h1>Sentinela Florestal</h1>}
        userInfo={<span>{user?.email}</span>}
        actions={
          <>
            <Button variant="primary" size="sm" onClick={handleProfile}>
              Perfil
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                  fill="currentColor"
                />
                <path
                  d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                  fill="currentColor"
                />
              </svg>
            </Button>
            <Button variant="danger" size="sm" onClick={logout}>
              Sair
            </Button>
          </>
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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem",
          }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/nova-acao")}
          >
            Novo botão à direita
          </Button>
        </div>

        <Button variant="danger" size="sm" onClick={handleProfile}>
          <svg
            width="300"
            height="300"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 12C2 6.47715 6.47715 2 12 2V4H20V12H22C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM18 12H16V8H12V6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12Z"
              fill="currentColor"
            />
          </svg>
        </Button>
        <p>Denúncia de incêndio</p>
        <Button variant="danger" size="sm" onClick={handleProfile}>
          <svg
            width="300"
            height="300"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 21H6V11H12V13H20V5H13V3H4V21ZM12 5H6V9H13V11H18V7H12V5Z"
              fill="currentColor"
            />
          </svg>
        </Button>
        <p>Denúncia de incidente</p>
      </main>
    </div>
  );
}
