const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  screen_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Screen' },
  seat_number: String,
  seat_type: String
});

module.exports = mongoose.model('Seat', seatSchema);
