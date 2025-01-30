// backend/models/Bug.js
const mongoose = require('mongoose');

const bugSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  severity: { type: String, enum: ['low', 'medium', 'high'], default: 'low' },
  proof: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bug', bugSchema);