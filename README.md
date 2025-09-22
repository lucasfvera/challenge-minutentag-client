# Minutentag React Challenge - Frontend

This is the frontend for the React Beer E-Commerce Challenge. It's a small part of a beer e-commerce web-app for mobile devices built with JavaScript and React. The server is built in Node + express which is also part of the challenge.

Backend Repo: https://github.com/lucasfvera/challenge-minutentag-server

## Features

- A Product Listing Page (PLP) displaying a list of products.
- A Product Details Page (PDP) displaying detailed information for each product.
- Real-time stock and price updates on the PDP every 5 seconds.

## Technical Stack

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool for modern web projects.
- **React Query:** For data fetching and caching.
- **Wouter:** A minimalist routing library for React.
- **Vitest:** For running unit tests.
- **React Testing Library:** For testing React components.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest version)
- [pnpm](https://pnpm.io/installation) (or npm/yarn)

### Installation

1.  Clone the repository.
2.  Navigate to the `client` directory.
3.  Install the dependencies:

    ```bash
    pnpm install
    ```

### Running the Development Server

To run the app in development mode, execute the following command:

```bash
pnpm dev
```

This will start the development server, and you can view the application at `http://localhost:5173` (or another port if 5173 is busy).

## Available Scripts

- `pnpm dev`: Runs the app in development mode.
- `pnpm build`: Builds the app for production.
- `pnpm lint`: Lints the code using ESLint.
- `pnpm test`: Runs the unit tests with Vitest.
- `pnpm coverage`: Generates a test coverage report.
- `pnpm preview`: Serves the production build locally.
