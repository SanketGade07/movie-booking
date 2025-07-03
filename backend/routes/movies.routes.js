const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movies.controllers');
const ShowtimeController=require('../controllers/showtimes.controllers')

router.get('/', movieController.getAllMovies);

router.get('/:id', movieController.getMovieById);

router.get('/:id/showtimes', ShowtimeController.getShowtimes);



module.exports = router;
