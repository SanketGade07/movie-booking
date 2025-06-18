const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password_hash: String,
  role: {
    type: String,
    enum: ['ADMIN', 'THEATRE_MANAGER']
  }
});

module.exports = mongoose.model('Admin', adminSchema);
