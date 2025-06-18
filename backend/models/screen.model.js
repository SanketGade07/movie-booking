const mongoose = require('mongoose');

const screenSchema = new mongoose.Schema({
  theatre_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Theatre' },
  screen_name: String,
  total_seats: Number
});

module.exports = mongoose.model('Screen', screenSchema);
