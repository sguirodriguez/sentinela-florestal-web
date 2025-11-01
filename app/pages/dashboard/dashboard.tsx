import { useAuth } from "../../context/auth-context";
import { Button, Header } from "../../components";
// import { useNavigate } from "react-router";

export function DashboardPage() {
  const { logout } = useAuth();
  // const navigate = useNavigate();

  // const handleProfile = () => {
  //   navigate("/profile");
  // };

  return (
    <div className="dashboard-page">
      <Header
        logo={<h1>Sentinela Florestal</h1>}
        actions={
          <>
            {/* <Button variant="primary" size="sm" onClick={handleProfile}>
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
            </Button> */}
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

        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "0.5rem",
              marginTop: "2rem",
              width: "800px",
              marginLeft: "13rem",
            }}
          >
            <Button variant="danger" size="lg">
              Reportar
            </Button>
            <Button
              variant="primary"
              size="lg"
              style={{ marginBottom: "-3rem" }}
            >
              Filtros
            </Button>
          </div>
          <h3
            style={{
              marginLeft: "13rem",
              textAlign: "left",
              margin: 0,
              paddingBottom: "0.5rem",
            }}
          >
            Incidentes
          </h3>
        </div>
        <div
          style={{
            marginTop: "20px",
            width: "800px",
            margin: "0 auto",
            height: "500px",
            border: "2px solid #ccc",
            borderRadius: "20px",
            padding: "1rem",
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "1fr",
            gap: "1rem",
            backgroundColor: "#fefefe",
          }}
        >
          {/* Bloco de INCIDENTES */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#f8d7da",
              borderRadius: "10px",
              border: "2px solid #ccc",
              padding: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
              }}
            >
              {/* Bloco interno: Foto(s) */}
              <div
                style={{
                  width: "350px",
                  height: "350px",
                  backgroundColor: "#e2e3e5",
                  borderRadius: "10px",
                  border: "2px solid #ccc",
                  padding: "1rem",
                  flexShrink: 0,
                }}
              >
                <h3>Foto ou Fotos</h3>
              </div>

              {/* Texto ao lado do bloco de fotos */}
              <div
                style={{
                  flexDirection: "column",
                  marginTop: "4rem",
                  justifyContent: "flex-start",
                  lineHeight: "1.8",
                }}
              >
                <p>
                  <strong>Título:</strong> Nome do incidente
                </p>
                <p>
                  <strong>Descrição:</strong> Breve explicação do ocorrido
                </p>
                <p>
                  <strong>Data:</strong> 31/10/2025
                </p>
                <p>
                  <strong>Status:</strong> Em andamento
                </p>
                <p>
                  <strong>Classificação:</strong> Alta
                </p>
                <p>
                  <strong>Categoria:</strong> Ambiental
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
