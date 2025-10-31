import Register from "~/pages/register/register";

export function meta() {
  return [
    { title: "Configurações - Sentinela Florestal" },
    { name: "description", content: "Configurações do usuário" },
  ];
}

export default function RegisterRoute() {
  return <Register />;
}
