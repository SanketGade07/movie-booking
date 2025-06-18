const mongoose = require('mongoose');

const bookingSeatSchema = new mongoose.Schema({
  booking_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
  seat_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Seat' }
});

module.exports = mongoose.model('BookingSeat', bookingSeatSchema);
