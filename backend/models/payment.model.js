const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  booking_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
  payment_method: String,
  amount_paid: Number,
  payment_status: {
    type: String,
    enum: ['SUCCESS', 'FAILED', 'PENDING'],
    default: 'PENDING'
  },
  payment_time: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', paymentSchema);
