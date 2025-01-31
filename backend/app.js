// backend/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Import auth routes

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes); // Mount auth routes

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Bug Bounty Platform API!');
});

module.exports = app;