# Copilot Instructions - Lara Health

This is a health management platform built as a monorepo with a Node.js/Express API backend and a React frontend.

## Project Structure

This is a PNPM workspace monorepo with two main packages:

### 1. API (`/api`)
- **Technology Stack**: Node.js, Express, TypeScript, SQLite (better-sqlite3)
- **Architecture**: Clean architecture with controllers, services, and routes
- **Authentication**: JWT-based authentication
- **Database**: SQLite database located at `src/database/database.sqlite`
- **Environment**: Supports dev/stage/prod environments with corresponding `.env` files

### 2. Frontend (`/example`)
- **Technology Stack**: React, TypeScript, Vite, TanStack Router
- **UI Library**: Radix UI components with custom UI components
- **Styling**: CSS with modern UI patterns
- **Charts**: Recharts for data visualization
- **State Management**: React hooks and context

## Key Modules & Features

### API Modules:
- **Companies**: Company management (create, update)
- **Employees**: Employee management and operations
- **Gatekeeper**: Authentication and authorization (login, onboarding)
- **Webhooks**: External integrations

### Frontend Features:
- Dashboard with interactive charts
- Data tables with sorting/filtering
- Sidebar navigation
- User authentication flow
- Responsive design

## Development Guidelines

### Code Style:
- Use TypeScript strict mode
- Follow clean architecture patterns
- Implement proper error handling
- Use Biome for linting and formatting
- Prefer functional components in React

### API Patterns:
- Controllers handle HTTP requests/responses
- Services contain business logic
- Routes define endpoint mappings
- Use proper HTTP status codes
- Implement input validation

### Database:
- Use SQLite with better-sqlite3 for local development
- Follow database migration patterns
- Implement proper indexing for performance

### Frontend Patterns:
- Use TanStack Router for routing
- Implement proper loading states
- Use Radix UI for accessibility
- Follow React best practices
- Implement proper error boundaries

## Environment Setup:
- Use `pnpm` as the package manager
- Run `pnpm start` from root to start both API and frontend
- API runs on port 3000 by default
- Frontend runs with Vite dev server

## Security Considerations:
- JWT tokens for authentication
- CORS properly configured
- Input validation on all endpoints
- Environment variables for sensitive data

When helping with this codebase:
1. Maintain the existing architecture patterns
2. Use TypeScript throughout
3. Follow the established folder structure
4. Implement proper error handling
5. Consider both API and frontend implications for changes
6. Use the existing UI components when building frontend features
7. Follow the established authentication patterns
