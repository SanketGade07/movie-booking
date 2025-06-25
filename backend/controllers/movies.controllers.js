const Movie = require('../models/movie.model');

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    if (!movies) {
      return res.status(404).json({ error: "Movies not found" });
    }
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

