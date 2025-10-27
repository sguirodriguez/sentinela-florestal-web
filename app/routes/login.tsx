import { LoginPage } from "../pages/login/login";

export function meta() {
    return [
        { title: "Login - Sentinela Florestal" },
        { name: "description", content: "Faça login para acessar o sistema" },
    ];
}

export default function Login() {
    return <LoginPage />;
}
