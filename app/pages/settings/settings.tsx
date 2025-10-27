import { Button, Header } from '~/components';
import { useAuth } from '~/context/auth-context';

const Settings = () => {
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
        <div
          style={{
            width: 600,
            height: 100,
            backgroundColor: 'white',
            borderRadius: 20,
            border: '1px solid black',
            padding: 10,
          }}
        >
          <p>PAGINA DE TESTE</p>
        </div>
      </main>
    </div>
  );
};

export default Settings;
