import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Input } from "~/components";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
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
          <p>Digite o e-mail para recuperar sua conta</p>
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
              style={{ marginTop: "10px" }}
            />
          </div>

          <div>
            <Button
              type="submit"
              disabled={isLoading}
              isLoading={isLoading}
              className="button-full"
              style={{ backgroundColor: "green" }}
              onClick={handleNavigateLogin}
            >
              Recuperar
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              isLoading={isLoading}
              className="button-full"
              style={{ marginTop: "10px", backgroundColor: "grey" }}
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

export default ForgotPassword;
