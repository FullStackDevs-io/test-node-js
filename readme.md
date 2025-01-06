
# Node.js API and UI Tester

This project contains a simple Node.js API for managing grain prices and a static UI for testing the API endpoints. Follow the steps below to set up and run the project locally.

---

## Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 18 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [npx](https://www.npmjs.com/package/npx) (comes with npm)

### If you have [nvm](https://github.com/nvm-sh/nvm) installed:

1. Check if Node.js 18 or later is installed:
   ```bash
   node -v
   ```
   If the version is lower than 18, follow these steps:

2. Use nvm to install Node.js 18:
   ```bash
   nvm install 18
   nvm use 18
   ```

---

## Project Structure

```
project-root/
├── server.js        # Main API server file
├── public/
│   └── index.html  # Static UI for testing
├── data/
│   └── grains.json  # Mock database for grains
├── helpers/
│   └── validate.js  # Validation utilities
├── routes/
│   └── grains.js    # API routes
├── package.json     # Project metadata and dependencies
└── README.md        # Documentation
```

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/FullStackDevs-io/test-node-js
   cd test-node-js
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

---

## Running the API

1. Start the API server:
   ```bash
   npm start
   ```

2. The API will be available at:
   - `http://localhost:3000`

   Example endpoints:
   - `GET /grains` - Fetch all grains and their prices.
   - `POST /grains/:type/price` - Update the price of a specific grain.
   - `GET /grains/:type/history` - Fetch the price history of a specific grain.

3. Verify the API is running by accessing:
   - `http://localhost:3000/health`

---

## Running the UI

1. Serve the `public/index.html` file:
   ```bash
   npx serve ./public
   ```

2. The UI will be available at:
   - `http://localhost:5000` (default port)

3. Use the UI to interact with the API by:
   - Fetching all grains.
   - Updating the price of a grain.
   - Viewing the price history of a grain.

---

## Author

Feel free to reach out for any questions or issues!
