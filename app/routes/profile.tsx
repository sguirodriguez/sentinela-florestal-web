import ProfilePage from "../pages/profile/profile";

export function meta() {
  return [
    { title: "Dashboard - Sentinela Florestal" },
    { name: "description", content: "Perfil de usuário" },
  ];
}

export default function Profile() {
  return <ProfilePage />;
}
