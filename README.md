# Sentinela Florestal Web

Sistema web para monitoramento florestal desenvolvido com React Router e TypeScript.

## 📋 O que é este projeto?

Este é um sistema de monitoramento florestal que permite:
- **Login e autenticação** de usuários
- **Dashboard** para visualização de dados
- Interface moderna e responsiva

## 🚀 Como rodar o projeto (Passo a Passo)

### Pré-requisitos

Você precisa ter o **Node.js** instalado no seu computador. Se não tiver, baixe em: [https://nodejs.org/](https://nodejs.org/)

### Passo 1: Instalar as dependências

Abra o terminal (Prompt de Comando ou PowerShell) na pasta do projeto e digite:

```bash
npm install
```

**O que faz?** Instala todas as bibliotecas necessárias para o projeto funcionar. Isso pode levar alguns minutos.

### Passo 2: Iniciar o projeto

Depois que a instalação terminar, digite:

```bash
npm run dev
```

### Passo 3: Acessar o projeto

Abra seu navegador e acesse:

```
http://localhost:5173
```

Pronto! O projeto está rodando! 🎉

**Dica:** Para parar o projeto, pressione `Ctrl + C` no terminal.

---

## 📁 Estrutura do Projeto - O que é cada pasta?

```
sentinela-florestal-web/
│
├── app/                          # Pasta principal com todo o código
│   ├── components/               # Componentes reutilizáveis (botões, inputs, etc)
│   │   ├── button/              # Componente de botão
│   │   ├── container/            # Container para agrupar conteúdo
│   │   ├── header/               # Cabeçalho da aplicação
│   │   └── input/                # Campo de entrada de texto
│   │
│   ├── pages/                    # Páginas da aplicação
│   │   ├── dashboard/           # Página principal (dashboard)
│   │   └── login/                # Página de login
│   │
│   ├── routes/                   # Definição das rotas (navegação)
│   │   ├── _auth.tsx            # Rotas protegidas (precisa estar logado)
│   │   ├── _guest.tsx           # Rotas públicas (acesso livre)
│   │   ├── dashboard.tsx        # Rota do dashboard
│   │   ├── login.tsx            # Rota de login
│   │   └── index.tsx            # Página inicial
│   │
│   ├── context/                  # Contextos React (gerenciamento de estado)
│   │   └── auth-context.tsx     # Contexto de autenticação
│   │
│   └── styles/                   # Arquivos de estilo (SCSS)
│       ├── components/          # Estilos dos componentes
│       ├── _mixins.scss         # Funções reutilizáveis de estilo
│       ├── _variables.scss      # Variáveis (cores, tamanhos, etc)
│       └── main.scss            # Arquivo principal de estilos
│
├── public/                       # Arquivos públicos (ícones, imagens)
├── node_modules/                # Bibliotecas instaladas (não mexer!)
├── package.json                 # Informações e dependências do projeto
├── tsconfig.json                # Configurações do TypeScript
└── vite.config.ts               # Configurações do Vite (ferramenta de build)
```

### 📝 Entenda cada parte:

**`components/`** - Componentes que aparecem em várias páginas (botões, campos de texto, etc)

**`pages/`** - As telas principais do sistema (Login e Dashboard)

**`routes/`** - Define as URLs e o que cada uma mostra

**`context/`** - Armazena informações globais (como se o usuário está logado)

**`styles/`** - Arquivos de visual (cores, tamanhos, layout)

**`_auth.tsx`** - Páginas que só funcionam se você estiver logado

**`_guest.tsx`** - Páginas que qualquer um pode ver (como login)

---

## 🛠️ Comandos Úteis

```bash
# Rodar em modo de desenvolvimento (modo de testes)
npm run dev

# Criar versão para produção
npm run build

# Instalar novas dependências
npm install nome-da-biblioteca

# Verificar se há erros no código
npm run lint
```

---

## 📚 Tecnologias Utilizadas

- **React Router** - Navegação entre páginas
- **TypeScript** - Linguagem com tipagem
- **Vite** - Ferramenta de build rápida
- **SCSS** - Pré-processador de CSS
- **React** - Biblioteca JavaScript

---

## 🔐 Sistema de Autenticação

O projeto possui autenticação que controla:
- Quem pode acessar o dashboard (apenas usuários logados)
- Quem pode ver a página de login (apenas usuários não logados)

---

## 💡 Dicas para Desenvolvedores

- Sempre execute `npm install` após baixar o projeto
- Use `npm run dev` para desenvolvimento
- Os estilos estão em SCSS (mais poderoso que CSS normal)
- Adicione novos componentes na pasta `app/components/`

---

Desenvolvido com ❤️ para monitoramento florestal.