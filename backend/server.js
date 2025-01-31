// backend/server.js
require('dotenv').config(); // Load environment variables
const app = require('./app'); // Import the app
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});