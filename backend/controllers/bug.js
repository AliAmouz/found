// backend/controllers/bug.js
const Bug = require('../models/bug');

const submitBug = async (req, res) => {
  const { title, description, severity, proof } = req.body;
  try {
    const bug = await Bug.create({ title, description, severity, proof });
    res.status(201).json(bug);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit bug' });
  }
};

const getBugs = async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bugs' });
  }
};

module.exports = { submitBug, getBugs };