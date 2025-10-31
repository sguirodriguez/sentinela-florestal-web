import { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Input } from "~/components";
import { useAuth } from "~/context/auth-context";

const ProfilePage = () => {
  const { user } = useAuth();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [birthday, setBirthday] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChangeSettings = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/settings");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <svg
            width="60"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              display: "block",
              margin: "0 auto", // centraliza horizontalmente
            }}
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
          <h2>
            <strong></strong> {user.name}
          </h2>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <Input
              id="name"
              type="text"
              placeholder="Nome"
              required
              value={user.name}
              onChange={(e) => setName(e.target.value)}
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
              id="email-address"
              name="email"
              type="email"
              placeholder="Email"
              required
              value={user.email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginTop: "10px" }}
            />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Senha"
              value={password}
              error={error}
              style={{ marginTop: "10px" }}
            />
          </div>
          <div>
            <Button
              disabled={isLoading}
              isLoading={isLoading}
              className="button-full"
              style={{ marginTop: "10px", backgroundColor: "grey" }}
              onClick={handleChangeSettings}
            >
              Editar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
