# Learning Notes - Job Market Intelligence Platform

## Step 1: Project Skeleton & Express Server Setup

- **Project Layout**: We organized the project into three distinct folders: `client/` for the React frontend, `server/` for the Express backend, and `python/` for data scraping and NLP tasks.
- **Git Tracking Empty Folders**: Git does not track empty directories by default, so we added `.gitkeep` files inside `client/` and `python/` to ensure Git tracks the folders.
- **Separating `app.js` and `index.js`**:
  - `app.js` configures the Express app (middleware and routes). It does not start listening on a network port. This allows automated tests (like Supertest) to test endpoints without starting a real network server.
  - `index.js` is the entry point that reads environment variables from `.env` and calls `app.listen()` to start listening for requests.
- **Environment Variables**:
  - Sensitive values and ports belong in `.env`, which is ignored by `.gitignore`.
  - `.env.example` serves as a safe template for other developers to know what variables are expected without exposing secrets.
- **Middleware**:
  - `cors()` allows our frontend (which will run on a different port like 3000 or 5173) to send requests to our backend (running on port 5000) without getting blocked by the browser.
  - `express.json()` automatically parses incoming JSON payloads from request bodies into `req.body`.
