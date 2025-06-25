const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movies.controllers');

router.get('/', movieController.getAllMovies);

router.get('/:id', movieController.getMovieById);


module.exports = router;
