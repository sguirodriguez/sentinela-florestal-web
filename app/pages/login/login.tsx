import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router";
import { Button, Input } from "../../components";

export function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            await login(email, password);
            navigate("/dashboard");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erro ao fazer login");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-header">
                    <h2>Sentinela Florestal</h2>
                    <p>Faça login na sua conta</p>
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
                            Entrar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
