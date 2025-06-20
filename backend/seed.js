const Movie = require('./models/movie.model');
const connectDB = require('./config/db');
require('dotenv').config();
const mongoose = require('mongoose');


const movies = [
    {
      title: "The Shining",
      description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence.",
      duration_minutes: 146,
      language: "English",
      genre: ["Horror", "Drama"],
      release_date: new Date("1980-05-23"),
      rating: 8.4,
      cast: ["Jack Nicholson", "Shelley Duvall"],
      crew: ["Stanley Kubrick"],
      src: "the_shining.jpg"
    },
    {
      title: "Inglourious Basterds",
      description: "A group of Jewish-American soldiers plot to assassinate Nazi leaders in occupied France.",
      duration_minutes: 153,
      language: "English",
      genre: ["Adventure", "Drama", "War"],
      release_date: new Date("2009-08-21"),
      rating: 8.3,
      cast: ["Brad Pitt", "Mélanie Laurent"],
      crew: ["Quentin Tarantino"],
      src: "inglourious_basterds.jpg"
    },
    {
      title: "The Dark Knight",
      description: "Batman faces off against the Joker, a criminal mastermind who plunges Gotham into anarchy.",
      duration_minutes: 152,
      language: "English",
      genre: ["Action", "Crime", "Drama"],
      release_date: new Date("2008-07-18"),
      rating: 9.0,
      cast: ["Christian Bale", "Heath Ledger"],
      crew: ["Christopher Nolan"],
      src: "the_dark_knight.jpg"
    },
    {
      title: "Fight Club",
      description: "An insomniac office worker and a soap maker form an underground fight club that evolves into something more.",
      duration_minutes: 139,
      language: "English",
      genre: ["Drama", "Thriller"],
      release_date: new Date("1999-10-15"),
      rating: 8.8,
      cast: ["Brad Pitt", "Edward Norton"],
      crew: ["David Fincher"],
      src: "fight_club.jpg"
    },
    {
      title: "Se7en",
      description: "Two detectives hunt a serial killer who uses the seven deadly sins as motives.",
      duration_minutes: 127,
      language: "English",
      genre: ["Crime", "Drama", "Mystery"],
      release_date: new Date("1995-09-22"),
      rating: 8.6,
      cast: ["Brad Pitt", "Morgan Freeman"],
      crew: ["David Fincher"],
      src: "se7en.jpg"
    },
    {
      title: "Shutter Island",
      description: "A U.S. Marshal investigates the disappearance of a murderer from a hospital for the criminally insane.",
      duration_minutes: 138,
      language: "English",
      genre: ["Mystery", "Thriller"],
      release_date: new Date("2010-02-19"),
      rating: 8.2,
      cast: ["Leonardo DiCaprio", "Mark Ruffalo"],
      crew: ["Martin Scorsese"],
      src: "shutter_island.jpg"
    },
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing is given a task of planting an idea into the mind of a CEO.",
      duration_minutes: 148,
      language: "English",
      genre: ["Action", "Sci-Fi", "Thriller"],
      release_date: new Date("2010-07-16"),
      rating: 8.8,
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
      crew: ["Christopher Nolan"],
      src: "inception.jpg"
    },
    {
      title: "2001: A Space Odyssey",
      description: "A voyage to Jupiter turns into a fight between man and machine.",
      duration_minutes: 149,
      language: "English",
      genre: ["Adventure", "Sci-Fi"],
      release_date: new Date("1968-04-03"),
      rating: 8.3,
      cast: ["Keir Dullea", "Gary Lockwood"],
      crew: ["Stanley Kubrick"],
      src: "space_odyssey.jpg"
    },
    {
      title: "A Clockwork Orange",
      description: "In a dystopian future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment.",
      duration_minutes: 136,
      language: "English",
      genre: ["Crime", "Drama", "Sci-Fi"],
      release_date: new Date("1971-12-19"),
      rating: 8.3,
      cast: ["Malcolm McDowell", "Patrick Magee"],
      crew: ["Stanley Kubrick"],
      src: "clockwork_orange.jpg"
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      duration_minutes: 169,
      language: "English",
      genre: ["Adventure", "Drama", "Sci-Fi"],
      release_date: new Date("2014-11-07"),
      rating: 8.6,
      cast: ["Matthew McConaughey", "Anne Hathaway"],
      crew: ["Christopher Nolan"],
      src: "interstellar.jpg"
    },
    {
      title: "Forrest Gump",
      description: "The life story of Forrest Gump, a man with a low IQ who achieves great things and influences historical events.",
      duration_minutes: 142,
      language: "English",
      genre: ["Drama", "Romance"],
      release_date: new Date("1994-07-06"),
      rating: 8.8,
      cast: ["Tom Hanks", "Robin Wright"],
      crew: ["Robert Zemeckis", "Eric Roth"],
      src: "forrest_gump.jpg"
    },
    {
        title: "The Apu Trilogy",
        description: "The story of a boy named Apu as he grows up in rural Bengal and eventually moves to the city.",
        duration_minutes: 339,
        language: "Bengali",
        genre: ["Drama"],
        release_date: new Date("1959-05-01"),
        rating: 8.5,
        cast: ["Soumitra Chatterjee"],
        crew: ["Satyajit Ray"],
        src: "apu_trilogy.jpg"
      }
      
  
  
];

const seedMovies = async () => {
  try {
    await connectDB(); // Connect using db.js
    await Movie.insertMany(movies);
    console.log('✅ Movies seeded successfully!');
    process.exit(); // Exit the script
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seedMovies();




// DELETE Database if needed

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(async () => {
//   await Movie.deleteMany({});
//   console.log("Deleted old data");
//   process.exit();
// }).catch(err => console.log("DB Error:", err));


