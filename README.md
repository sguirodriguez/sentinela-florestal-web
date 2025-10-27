# Sentinela Florestal Web

Sistema web para monitoramento florestal desenvolvido com React Router e TypeScript.

## 📋 O que é este projeto?

Este é um sistema de monitoramento florestal que permite:
- **Login e autenticação** de usuários
- **Dashboard** para visualização de dados
- Interface moderna e responsiva

## 🚀 Como rodar o projeto (Passo a Passo)

---

## 🧩 1. Configurando sua máquina

### 📥 1.1. Instalar o NVM (Node Version Manager)

O NVM permite que você tenha várias versões do Node.js instaladas e altere entre elas facilmente.

#### 🖥️ Para Windows:

1. Baixe o instalador:
   
   👉 **[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)**
   
   - Baixe o arquivo `nvm-setup.exe`
   - Execute o instalador
   - Siga as instruções de instalação

2. Após instalar, **feche e reabra o terminal** (PowerShell ou CMD)

3. Verifique se instalou corretamente:
   
   ```bash
   nvm version
   ```
   
   Deve mostrar algo como `1.1.12`

---

### ⚙️ 1.2. Instalar o Node.js 23.11.1

Agora vamos instalar a versão correta do Node.js para este projeto:

```bash
nvm install 23.11.1
```

Verifique se instalou corretamente:

```bash
nvm ls
```

Deve aparecer algo como:

```
->     v23.11.1
        system
```

---

### 🎯 1.3. Definir o Node.js 23.11.1 como padrão

```bash
nvm use 23.11.1
```

Assim, toda vez que abrir o terminal, essa versão será usada automaticamente.

---

### ✅ 1.4. Verificar versões do Node e npm

```bash
node -v
# deve mostrar v23.11.1

npm -v
# deve mostrar algo como 11.x.x
```

---

## 📥 2. Baixando o projeto

### 2.1. Pré-requisitos

- **Git** instalado: [https://git-scm.com](https://git-scm.com/)
- **GitHub** configurado (veja: [Como configurar o Git](https://git-scm.com/book/pt-br/v2/Começando-Configuração-Inicial-do-Git))

---

### 2.2. Clonar o repositório

Abra o terminal e execute:

```bash
git clone https://github.com/sguirodriguez/sentinela-florestal-web.git
cd sentinela-florestal-web
```

**O que faz?** Isso baixa o código do projeto do GitHub para o seu computador.

---

## ⚙️ 3. Instalando as dependências

Na pasta do projeto, execute:

```bash
npm install
```

**O que faz?** Instala todas as bibliotecas necessárias para o projeto funcionar. Isso pode levar alguns minutos.

Você verá muitas mensagens no terminal - isso é normal! Aguarde até aparecer algo como "added 250 packages" ou similar.

---

## 🎮 4. Rodando o projeto

Depois que a instalação terminar, execute:

```bash
npm run dev
```

### 4.1. Acessar o projeto

Abra seu navegador e acesse:

```
http://localhost:5173
```

Pronto! O projeto está rodando! 🎉

**O que verá:**
- Uma mensagem no terminal mostrando que o servidor está rodando
- O navegador abrirá automaticamente ou você pode abrir manualmente

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