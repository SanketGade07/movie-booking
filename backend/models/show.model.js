
const mongoose = require('mongoose');

const ShowtimeSchema = new mongoose.Schema({
    theaterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Theater', required: true },
    time: { type: String, required: true }, // e.g., "10:00 AM"
    screenType: { type: String, enum: ["IMAX"], default: "IMAX" },
}, { timestamps: true });

module.exports = mongoose.model('Showtime', ShowtimeSchema);
