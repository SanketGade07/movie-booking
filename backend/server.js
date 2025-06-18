// server.js
const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');

connectDB(); // connect to MongoDB
const app = express();
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Movie Booking API is running...');
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
