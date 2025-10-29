import { useState } from "react";
import { Button, Header, Input } from "../../components";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {};

  const handleNavigateLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h2>Sentinela Florestal</h2>
          <p>Faça o cadastro para sua conta</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <Input
              id="email-address"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="password"
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={error}
              style={{ marginTop: "10px" }}
            />
            <Input
              id="birthday"
              type="date"
              placeholder="Data de nascimento"
              required
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              error={error}
              style={{ marginTop: "10px" }}
            />
            <Input
              id="name"
              type="text"
              placeholder="Nome"
              required
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              error={error}
              style={{ marginTop: "10px" }}
            />
          </div>

          <div>
            <Button
              type="submit"
              disabled={isLoading}
              isLoading={isLoading}
              className="button-full"
            >
              Cadastrar
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              isLoading={isLoading}
              className="button-full"
              style={{ marginTop: "10px" }}
              onClick={handleNavigateLogin}
            >
              Voltar para login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
