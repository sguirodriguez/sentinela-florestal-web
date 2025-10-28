import { useState, useEffect } from "react";
import { Button, Header, Input } from '~/components';
import { useAuth } from '~/context/auth-context';
import { useNavigate } from "react-router";

export function Settings() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState(user?.email || "");
  const [name, setName] = useState(user?.email || "");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);
}
 /* 
    tentativa de mudanças nos dados de usuário

    falta mexer no auth-context 

    auxilio chat gepeto


        try {
            await saveSettings(email, password);
            navigate("/dashboard");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erro ao fazer login");
        } finally {
            setIsLoading(false);
        }
 */
return (
        <div className="settings-page">
            <div className="settings-card">
                <div className="settings-header">
                    <h2>Sentinela Florestal</h2>
                    <p>Faça as alterações em sua conta</p>
                </div>
                <form className="settings-form" onSubmit={handleSubmit}>
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
                            id="user"
                            name="user"
                            type="text"
                            autoComplete="current-user"
                            placeholder="User"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            error={error}
                        />
                    </div>

                    <div>
                        <Button
                            type="submit"
                            disabled={isLoading}
                            isLoading={isLoading}
                            className="button-full"
                        >
                            Salvar alterações
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
  }

export default Settings;
