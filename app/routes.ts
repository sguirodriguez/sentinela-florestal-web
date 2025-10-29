import { type RouteConfig, route, layout, index } from "@react-router/dev/routes";

export default [
    // Rota raiz - redireciona para login ou dashboard
    index("routes/index.tsx"),

    // Rotas publicas (login, signup, etc.)
    layout("routes/_guest.tsx", [
        route("login", "routes/login.tsx"),
        route("register", "routes/register.tsx"),
        route("forgot-password", "routes/forgot-password.tsx"),
        //cadastro
    ]),

    // Rotas protegidas (requerem autenticação)
    layout("routes/_auth.tsx", [
        route("dashboard", "routes/dashboard.tsx"),
        route("settings", "routes/settings.tsx")
        // Adicione mais rotas protegidas aqui
        // route("profile", "routes/profile.tsx"),
        // route("settings", "routes/settings.tsx"),
    ]),
] satisfies RouteConfig;
