// backend/app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bugRoutes = require('./routes/bug');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Root route
// backend/app.js
app.get('/', (req, res) => {
    res.redirect('/login'); // Redirect to the login page
  });

// Bug routes
app.use('/api/bugs', bugRoutes);

module.exports = app;