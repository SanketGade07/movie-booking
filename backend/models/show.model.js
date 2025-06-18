const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  movie_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  screen_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Screen' },
  show_time: Date,
  price_per_seat: Number
});

module.exports = mongoose.model('Show', showSchema);
