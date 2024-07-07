# Budgeting App Backend

This is the backend for a budgeting application. It is built using Express.js and includes basic CRUD operations for managing transactions.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Wireframe](#wireframe)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AbdelSayedahmed/budgeting-app-backend.git
   cd budgeting-app-backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and set the port:

   ```
   PORT=6298
   ```

4. Start the server:
   ```bash
   npm start
   ```

## Usage

Once the server is running, you can access the following endpoints to manage your transactions.

## API Endpoints

- **GET** `/transactions` - Retrieve all transactions.
- **GET** `/transactions/:id` - Retrieve a specific transaction by ID.
- **POST** `/transactions` - Create a new transaction.
- **PUT** `/transactions/:id` - Update a specific transaction by ID.
- **DELETE** `/transactions/:id` - Delete a specific transaction by ID.

## Wireframe

```
budgeting-app-backend/
│
├── controllers/
│   └── transactionController.js    # Controller for handling transactions
│
├── models/
│   └── transactions.json           # JSON file to store transactions
│
├── node_modules/                   # Node.js modules
│
├── .env                            # Environment variables
├── .gitignore                      # Files and directories to ignore in Git
├── app.js                          # Main application setup
├── package.json                    # Project metadata and dependencies
├── server.js                       # Server configuration and startup
└── README.md                       # Project documentation
```

## Detailed Explanation

### app.js

Sets up the Express application, enabling CORS, JSON parsing, and defines the main routes.

### server.js

Loads environment variables using `dotenv`, sets the application to listen on the port defined in the `.env` file.

### .env

Contains environment-specific variables such as the port number.

### models/transactions.json

Stores transaction data in JSON format.

### controllers/transactionController.js

Handles CRUD operations for transactions, including GET, POST, PUT, and DELETE requests.

### .gitignore

Specifies files and directories to be ignored by Git, such as `node_modules` and `.env`.

### package.json

Defines the project dependencies and scripts.

## Links

[Live Site](https://budgetwise-demo.netlify.app/)
[Frontend Repo](https://github.com/AbdelSayedahmed/budgeting-app-frontend)
