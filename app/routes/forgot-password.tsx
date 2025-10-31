import ForgotPassword from "~/pages/forgot-password/forgot-password";

export function meta() {
  return [
    { title: "Configurações - Sentinela Florestal" },
    { name: "description", content: "Usuário esqueceu a senha" },
  ];
}

export default function ForgotPasswordRoute() {
  return <ForgotPassword />;
}
