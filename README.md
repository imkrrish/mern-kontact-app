# Kontact - Simple MERN CRUD App

Kontact is a simple MERN (MongoDB, Express, React, Node.js) stack CRUD application for managing contacts.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (v18.14.2 recommended)
- [MongoDB](https://www.mongodb.com/)

## Getting Started

Clone the repository:

```shell
git clone https://github.com/imkrrish/mern-kontact-app.git
cd mern-kontact-app
```

### Backend (Node.js)

1. Navigate to the backend directory:

   ```shell
   cd backend
   ```

2. Install dependencies:

```shell
npm install
```

3. Set up environment variables:

Create a .env file in the backend directory with following environment variables to your .env file:

```shell
MONGODB_URI=mongodb://127.0.0.1:27017/Kontact
NODE_ENV=dev
PORT=5000
RATE_LIMIT_TIME=3000
RATE_LIMIT_REQUEST=100
```

4. Start the development server:

   ```shell
   npm run start:dev
   ```

### Frontend (Next.js)

1. In a new terminal, navigate back to the project root folder (where the frontend folder is located) and Install frontend dependencies:

   ```shell
   cd frontend
   npm install
   ```

2. Set up environment variables:
   Create a .env.local file in the frontend directory with following environment variables to your .env file:

```shell
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
```

3. Start the development server:

   ```shell
   npm run dev
   ```

# Usage

Access the frontend application at http://localhost:3000

The backend API is available at http://localhost:5000

## API Endpoints

- GET `/api/contacts` - Retrieve all contacts.
- GET `/api/contacts/:id` - Retrieve a specific contact by ID.
- POST `/api/contacts` - Create a new contact.
- PUT `/api/contacts/:id` - Update an existing contact.
- DELETE `/api/contacts/:id` - Delete a contact.

### Sorting and Filtering

- To retrieve contacts sorted by name in ascending order: `/api/contacts?sortBy=name&sortOrder=ASC`

- To filter contacts by name: `/api/contacts?name=anyname`

## Scripts

### Backend (Node.js)

- `npm run build`: Build the TypeScript code.
- `npm start`: Start the production server.
- `npm run lint`: Run ESLint to lint TypeScript files.
- `npm run lint-and-fix`: Run ESLint with automatic fixes.
- `npm run prettier-format`: Format TypeScript files using Prettier.
- `npm test`: Run tests (if available).

### Frontend (Next.js)

- `npm run build`: Build the Next.js application.
- `npm run start`: Start the production Next.js server.
- `npm run lint`: Run ESLint to lint TypeScript and React files.

## 🤩Feel free to give this repo a ⭐ if you like this repo

Contributions are welcomed!
