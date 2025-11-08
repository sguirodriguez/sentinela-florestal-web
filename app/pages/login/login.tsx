import { useState } from 'react';
import { useAuth } from '../../context/auth-context';
import { useNavigate } from 'react-router';
import { Button, Input } from '../../components';
import logoImage from '../../assets/logo/logo.png';

export function LoginPage() {
  const { login, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  const handleNavigateRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/register');
  };

  // const handleNavigateForgotPassword = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   navigate("/forgot-password");
  // };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <img src={logoImage} alt="Sentinela Florestal Logo" />
          <p>Faça login para acessar sua conta</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginTop: '10px' }}
            />
          </div>

          <div>
            <Button
              type="submit"
              disabled={authLoading}
              isLoading={authLoading}
              className="button-full"
            >
              Entrar
            </Button>
            <Button
              disabled={authLoading}
              isLoading={authLoading}
              className="button-full"
              style={{ marginTop: '10px', backgroundColor: 'grey' }}
              onClick={handleNavigateRegister}
            >
              Ir para cadastro
            </Button>
            {/* <Button
              disabled={isLoading}
              isLoading={isLoading}
              className="button-full"
              style={{ marginTop: "10px", backgroundColor: "#ff847bff" }}
              onClick={handleNavigateForgotPassword}
            >
              Esqueci minha senha
            </Button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
