// backend/routes/bug.js
const express = require('express');
const router = express.Router();
const bugController = require('../controllers/bug');

// Submit a bug
router.post('/', bugController.submitBug);

// Get all bugs
router.get('/', bugController.getBugs);

module.exports = router;