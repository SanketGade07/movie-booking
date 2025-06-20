const Movie = require('../models/movie.model');

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();  // Calls Mongoose model to get all movies
    res.json(movies);                  // Sends the data as response
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
