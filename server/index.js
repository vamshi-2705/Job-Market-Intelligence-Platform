const dotenv = require('dotenv');
const app = require('./app');

// Load environment variables from the .env file
dotenv.config();

// Determine the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start listening for incoming HTTP requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
