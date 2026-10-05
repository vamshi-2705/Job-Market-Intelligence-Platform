const express = require('express');
const cors = require('cors');

// Create the Express application instance
const app = express();

// Enable Cross-Origin Resource Sharing so the frontend can call this API
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(express.json());

// Health check endpoint to confirm the server is running
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = app;
