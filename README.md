# Lara Health

Uma plataforma abrangente de gestão de saúde construída com tecnologias web modernas. Este monorepo contém tanto o backend da API quanto a aplicação frontend para gerenciar dados de saúde, registros de saúde de funcionários e programas de saúde corporativa.

## 🏗️ Arquitetura

Este projeto está estruturado como um monorepo PNPM workspace com dois pacotes principais:

- **API** (`/api`) - Backend Node.js/Express com banco de dados SQLite
- **Frontend** (`/example`) - Aplicação React com componentes de UI modernos

## 🚀 Início Rápido

### Pré-requisitos

- Node.js (v18 ou superior)
- PNPM (v9 ou superior)

### Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd lara-health
```

2. Instale as dependências:
```bash
pnpm install
```

3. Inicie o ambiente de desenvolvimento:
```bash
pnpm start
```

Isso iniciará tanto o servidor da API (porta 3000) quanto o servidor de desenvolvimento do frontend simultaneamente.

## 📁 Estrutura do Projeto

```
lara-health/
├── api/                     # API Backend
│   ├── src/
│   │   ├── controllers/     # Manipuladores de requisição
│   │   ├── services/        # Lógica de negócio
│   │   ├── routes/          # Rotas da API
│   │   ├── database/        # Configuração do banco e arquivo SQLite
│   │   └── server.ts        # Configuração do servidor Express
│   └── package.json
├── example/                 # Aplicação Frontend
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── routes/          # Rotas do TanStack Router
│   │   ├── services/        # Serviços cliente da API
│   │   └── main.tsx         # Ponto de entrada da aplicação
│   └── package.json
└── package.json            # Configuração do workspace raiz
```

## 🛠️ Stack Tecnológica

### Backend (API)
- **Runtime**: Node.js com TypeScript
- **Framework**: Express.js
- **Banco de Dados**: SQLite com better-sqlite3
- **Autenticação**: JWT (JSON Web Tokens)
- **Qualidade de Código**: Biome para linting e formatação
- **Desenvolvimento**: ts-node-dev para hot reloading

### Frontend
- **Framework**: React 18 com TypeScript
- **Ferramenta de Build**: Vite
- **Roteamento**: TanStack Router
- **Componentes UI**: Primitivos do Radix UI
- **Estilização**: CSS com padrões de design modernos
- **Gráficos**: Recharts para visualização de dados
- **Ícones**: Tabler Icons
- **Desenvolvimento**: Servidor dev do Vite com HMR

## 🏥 Funcionalidades

### Funcionalidade Principal
- **Gestão de Empresas**: Criar e gerenciar organizações de saúde
- **Gestão de Funcionários**: Gerenciar registros e dados de saúde dos funcionários
- **Autenticação**: Login seguro e gestão de usuários
- **Dashboard**: Gráficos interativos e análises de saúde
- **Tabelas de Dados**: Visualizações de dados de saúde ordenáveis e filtráveis

### Endpoints da API
- **Empresas**: `/company` - Operações CRUD de empresas
- **Funcionários**: Endpoints de gestão de funcionários
- **Autenticação**: `/login` - Autenticação de usuários
- **Webhooks**: Integrações com sistemas externos

### Funcionalidades do Frontend
- Dashboard responsivo com métricas de saúde
- Visualização interativa de dados
- Barra lateral de navegação amigável
- Atualizações de dados em tempo real
- Componentes de UI acessíveis

## 🔧 Desenvolvimento

### Configuração de Ambiente

A API suporta múltiplos ambientes:
- `dev` - Ambiente de desenvolvimento
- `stage` - Ambiente de homologação
- `prod` - Ambiente de produção

Crie arquivos `.env` específicos para cada ambiente no diretório da API:
- `.env.dev`
- `.env.stage`
- `.env.prod`

### Scripts Disponíveis

#### Nível Raiz
```bash
pnpm start          # Iniciar tanto API quanto frontend
```

#### API (`/api`)
```bash
pnpm start:dev      # Iniciar API em modo desenvolvimento
pnpm start:stage    # Iniciar API em modo homologação
pnpm start:prod     # Iniciar API em modo produção
```

#### Frontend (`/example`)
```bash
pnpm dev            # Iniciar servidor de desenvolvimento
pnpm build          # Build para produção
pnpm preview        # Visualizar build de produção
pnpm lint           # Executar ESLint
```

### Banco de Dados

O projeto usa SQLite para armazenamento de dados:
- Arquivo do banco: `api/src/database/database.sqlite`
- ORM: Implementação customizada com better-sqlite3
- Suporta migrações e seeding

## 🔐 Autenticação

A plataforma usa autenticação baseada em JWT:
- Endpoint de login fornece tokens de acesso
- Rotas protegidas requerem tokens JWT válidos
- Suporta onboarding de usuários e acesso à plataforma

## 🎨 Componentes UI

O frontend inclui um conjunto abrangente de componentes UI:
- **Navegação**: Barra lateral, breadcrumbs, cabeçalhos
- **Exibição de Dados**: Tabelas, gráficos, cards, badges
- **Formulários**: Inputs, selects, checkboxes, botões
- **Layout**: Sheets, drawers, abas, separadores
- **Feedback**: Toasts, skeletons, tooltips

## 📊 Análises de Saúde

A plataforma fornece várias funcionalidades de análise de saúde:
- Gráficos de área interativos para tendências de saúde
- Tabelas de dados para registros detalhados de saúde
- Cards do dashboard com métricas-chave de saúde
- Capacidades de monitoramento de saúde em tempo real

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch para sua funcionalidade
3. Faça suas alterações
4. Certifique-se de que os testes passem e o código esteja formatado
5. Envie um pull request

### Estilo de Código
- Use TypeScript em todo o projeto
- Siga os padrões de arquitetura existentes
- Use Biome para formatação e linting de código
- Implemente tratamento adequado de erros
- Escreva mensagens de commit descritivas

## 📝 Licença

Este projeto está licenciado sob a Licença ISC.

## 🆘 Suporte

Para suporte e dúvidas, por favor abra uma issue no repositório ou entre em contato com a equipe de desenvolvimento.

---

Construído com ❤️ para uma melhor gestão de saúde
