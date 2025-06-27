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


// ✅ Allowed origins for both local and production
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:5500',
  'http://localhost',
  'http://127.0.0.1',
  'https://movie-booking-roan.vercel.app' 
];

// ✅ Apply CORS with origin function
app.use(cors({
  origin: function (origin, callback) {
    console.log('🌍 Incoming Origin:', origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // ✅ Allow origin
    } else {
      console.warn('❌ CORS Blocked Origin:', origin);
      callback(null, false); // ❌ Block safely (no crash)
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));





// Movie routes
app.use('/api/movies', movieRoutes);

// Serve static images (if used in frontend)
app.use('/images', express.static('frontend/images'));

// Default root route
app.get('/', (req, res) => {
  res.send('🎬 Movie Booking API is running...');
});

// Global error handler to avoid silent 500 crashes
app.use((err, req, res, next) => {
  console.error('💥 Unhandled Error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Catch-all 404 with CORS
app.use((req, res) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.status(404).json({ error: 'Not Found - with CORS headers' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT,'0.0.0.0' ,() => console.log(`🚀 Server running on port ${PORT}`));
