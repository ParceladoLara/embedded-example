# Copilot Instructions - Lara Health

This is a comprehensive health management platform built as a monorepo with a Node.js/Express API backend and a React frontend, featuring integrated financial services through Lara API.

## Project Structure

This is a PNPM workspace monorepo with two main packages:

### 1. API (`/api`)
- **Technology Stack**: Node.js, Express, TypeScript, MySQL with Prisma ORM
- **Architecture**: Clean architecture with controllers, services, and routes
- **Authentication**: JWT-based authentication
- **Database**: MySQL database with Prisma ORM for schema management
- **External Integrations**: Lara API for financial services and payment plans
- **Environment**: Supports dev/stage/prod environments with corresponding `.env` files

### 2. Frontend (`/app`)
- **Technology Stack**: React, TypeScript, Vite, TanStack Router
- **UI Library**: Radix UI components with custom UI components
- **Styling**: CSS with Tailwind CSS for modern UI patterns
- **Charts**: Recharts for data visualization
- **State Management**: React hooks, context, and TanStack Query
- **Payment Integration**: WASM-based payment plan calculations

## Key Modules & Features

### API Modules:
- **Companies**: Company management with API key support for Lara integration
- **Employees**: Employee management with Lara ID linking
- **Patients**: Complete patient management with address and contact information
- **Appointments**: Healthcare appointment system with financial proposal integration
- **Lara Integration**: Financial proposal initialization and completion workflows
- **Gatekeeper**: Authentication and authorization (login, onboarding)
- **Webhooks**: External integrations

### Frontend Features:
- Dashboard with interactive charts and health metrics
- Patient and appointment management interfaces
- Lara proposal flow with payment plan visualization
- Data tables with sorting/filtering capabilities
- Sidebar navigation with modern UI
- User authentication flow
- Responsive design with accessibility features

## Database Schema

### Core Models:
- **Company**: Organizations with CNPJ, name, and API keys for Lara integration
- **Employee**: Staff members with Lara ID for SSO authentication
- **Patient**: Healthcare recipients with complete personal and address information
- **Appointment**: Healthcare consultations with financial proposal tracking
- **Address**: Geographic information for patients

### Key Relationships:
- Companies have many employees and patients
- Patients belong to companies and have addresses
- Appointments belong to patients and track Lara proposal status

## Development Guidelines

### Code Style:
- Use TypeScript strict mode
- Follow clean architecture patterns
- Implement proper error handling
- Use Biome for linting and formatting
- Prefer functional components in React
- Use Prisma for database operations

### API Patterns:
- Controllers handle HTTP requests/responses
- Services contain business logic
- Routes define endpoint mappings
- Use proper HTTP status codes
- Implement input validation
- Integrate with Lara API for financial services

### Database:
- Use Prisma ORM with MySQL for production-ready database management
- Follow migration patterns with `prisma migrate`
- Implement proper indexing for performance
- Use Prisma Client for type-safe database queries

### Frontend Patterns:
- Use TanStack Router for routing
- Implement proper loading states with TanStack Query
- Use Radix UI for accessibility
- Follow React best practices with hooks
- Implement proper error boundaries
- Use WASM modules for performance-critical calculations (payment plans)

## Environment Setup:
- Use `pnpm` as the package manager
- Run `pnpm start` from root to start both API and frontend
- API runs on port 3000 by default
- Frontend runs with Vite dev server
- Configure `.env.{environment}` files for different environments
- Set up MySQL database connection in environment variables
- Configure Lara API endpoints and credentials

## Security Considerations:
- JWT tokens for authentication
- CORS properly configured
- Input validation on all endpoints
- Environment variables for sensitive data
- API key management for Lara integration
- Secure database connections with Prisma

## Lara Integration:

### Financial Proposal Flow:
1. **Initialize Proposal**: Create financial proposal through Lara API
2. **Payment Plan Calculation**: Use WASM module for installment calculations
3. **Complete Proposal**: Finalize contract and send via WhatsApp
4. **Status Tracking**: Monitor proposal status throughout the process

### Key Components:
- Lara API client for external service communication
- JWT authentication for secure API access
- Payment plan WASM module for performance-critical calculations
- Proposal status management in appointment records

When helping with this codebase:
1. Maintain the existing architecture patterns
2. Use TypeScript throughout
3. Follow the established folder structure
4. Implement proper error handling
5. Consider both API and frontend implications for changes
6. Use the existing UI components when building frontend features
7. Follow the established authentication patterns
8. Integrate properly with Lara API for financial services
9. Use Prisma for all database operations
10. Consider payment plan calculations when working with financial features
