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
  'http://localhost:3000',
  'http://127.0.0.1:5000',
  'https://movie-booking-roan.vercel.app' 
];

app.use(cors({
  origin: function (origin, callback) {
    console.log('🌍 CORS Origin:', origin);
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // ✅ allow if origin is allowed or undefined (like curl/postman)
    } else {
      callback(null, false); // ✅ silently reject instead of crashing
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
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
