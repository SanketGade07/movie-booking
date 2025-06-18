const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  show_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Show' },
  booking_time: { type: Date, default: Date.now },
  total_amount: Number,
  status: {
    type: String,
    enum: ['CONFIRMED', 'CANCELLED', 'PENDING'],
    default: 'PENDING'
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
