import { DashboardPage } from "../pages/dashboard/dashboard";

export function meta() {
    return [
        { title: "Dashboard - Sentinela Florestal" },
        { name: "description", content: "Painel de controle do sistema" },
    ];
}

export default function Dashboard() {
    return <DashboardPage />;
}
