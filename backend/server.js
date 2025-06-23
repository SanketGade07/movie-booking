// server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movies.routes');

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for your frontend origin

const allowedOrigins = [
  'http://localhost:5500',
  'https://movie-booking-roan.vercel.app/',
  'http://127.0.0.1:5500'
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed for origin: ' + origin));
    }
  }
}));




// Movie routes
app.use('/api/movies', movieRoutes);

// Serve static images (if used in frontend)
app.use('/images', express.static('frontend/images'));

// Default root route
app.get('/', (req, res) => {
  res.send('🎬 Movie Booking API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT,'0.0.0.0' ,() => console.log(`🚀 Server running on port ${PORT}`));
