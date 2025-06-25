const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration_minutes: Number,
  language: [String],
  genre: [String],
  rating:{
    score: Number,
    reviews: String
  },
  release_date: Date,
  cast: [
    {
      name:String,
      role:String,
      image:String
    }
  ],        
  crew: [
    {
      name:String,
      role:String,
      image:String
    }
  ] ,        
  src: String
});

module.exports = mongoose.model('Movie', movieSchema);
