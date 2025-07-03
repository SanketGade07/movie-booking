// models/Theater.js
const mongoose = require('mongoose');

const TheaterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    chain: { type: String, enum: ["Cinepolis", "INOX", "PVR ICON"], required: true },
    facilities: [{ type: String, enum: ["M-Ticket", "Food & Beverage"] }],
    cancellable: { type: Boolean, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Theater', TheaterSchema);
