const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration_minutes: Number,
  language: String,
  genre: [String],
  release_date: Date,
  rating: Number,
  cast: [String],        // Example: ["Actor A", "Actor B"]
  crew: [String]         // Example: ["Director X", "Writer Y"]
});

module.exports = mongoose.model('Movie', movieSchema);
