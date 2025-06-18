const mongoose = require('mongoose');

const theatreSchema = new mongoose.Schema({
  name: String,
  city: String,
  address: String
});

module.exports = mongoose.model('Theatre', theatreSchema);
