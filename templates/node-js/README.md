# Node.js Typescript Boilerplate

A modern Node.js boilerplate project with best practices and essential configurations.

## Features

- Express.js server setup
- Environment configuration with dotenv
- Error handling middleware
- Request validation
- Logging with Winston/Morgan
- Database integration (MongoDB/PostgreSQL)
- Authentication & Authorization
- API documentation with Swagger
- Testing setup with Jest
- Docker support
- ESLint & Prettier configuration

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Docker (optional)

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd node-js-boilerplate
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Start the development server:

   `npm run dev / yarn dev `

## Project Structure

src/
├── config/ # Configuration files
├── controllers/ # Route controllers
├── middleware/ # Custom middleware
├── models/ # Database models
├── routes/ # API routes
├── services/ # Business logic
├── utils/ # Utility functions
└── app.js # App entry point

## Available Scripts

- `npm run dev` - Start development server
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
