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
      rating:{
        score:8.4,
        reviews:"1.2M"
      },
      release_date: new Date("1980-05-23"),
      cast: [{
        name:"Jack Nicholson",
        role:"Actor",
        image:"https://media.themoviedb.org/t/p/w300_and_h450_bestv2/hBHcQIEa6P48HQAlLZkh0eKSSkG.jpg"
      },
      {
        name:"Shelley Duvall",
        role:"Actor",
        image:"https://media.themoviedb.org/t/p/w300_and_h450_bestv2/6lG3fmyhXatvyAG4X9WxwMWoPUS.jpg"
      },
      {
        name:"Danny Lloyd",
        role:"Actor",
        image:"https://media.themoviedb.org/t/p/w300_and_h450_bestv2/5pEmugZ6m25RB0cXbL4t5D4kZAO.jpg"
      },
      {
        name:"Scatman Crothers",
        role:"Actor",
        image:"https://media.themoviedb.org/t/p/w300_and_h450_bestv2/jf2ooubjE5tjBJwDI9Nla0M57m2.jpg"
      },
      {
        name:"Barry Nelson",
        role:"Actor",
        image:"https://media.themoviedb.org/t/p/w300_and_h450_bestv2/fSrHmvOxZJbeKpNM0uWGvha1aK9.jpg"
      },
      {
        name:"Philip Stone",
        role:"Actor",
        image:"https://media.themoviedb.org/t/p/w300_and_h450_bestv2/eRYDsJJPfFuOpZ8dTrk9qo5hnXK.jpg"
      }
    ],
      crew: [
        {
          name:"Stanley Kubrick",
          role:"Director",
          image:"https://media.themoviedb.org/t/p/w300_and_h450_bestv2/yFT0VyIelI9aegZrsAwOG5iVP4v.jpg"
        },
        {
          name:"Michael Stevenson",
          role:"Assistant Director",
          image:"https://media.themoviedb.org/t/p/w300_and_h450_bestv2/xGgGcLtVV9k4fVVvSs8wfUTAAsS.jpg"
        },
        {
          name:"Martin Richards",
          role:"Associate Producer ",
          image:"https://media.themoviedb.org/t/p/w300_and_h450_bestv2/4CFeYvy7KTcOruzezpPIzBHlaX.jpg"
        }
      ],
      src: "the_shining.jpg"
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      duration_minutes: 169,
      language: ["English"],
      genre: ["Adventure", "Drama", "Sci-Fi"],
      rating: {
        score: 8.6,
        reviews: "2.1M"
      },
      release_date: new Date("2014-11-07"),
      cast: [
        {
          name: "Matthew McConaughey",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/mXnH0YRvUbJXQpT0n3Y5GehRjOx.jpg"
        },
        {
          name: "Anne Hathaway",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/e6PyuHZKghsM6I4n6ZK5umYfUq6.jpg"
        }
      ],
      crew: [
        {
          name: "Christopher Nolan",
          role: "Director",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/cnR6wHug3c6VxABPYyzJYdVtD2a.jpg"
        }
      ],
      src: "interstellar.jpg"
    },
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      duration_minutes: 148,
      language: ["English", "Hindi", "Tamil"],
      genre: ["Action", "Sci-Fi", "Thriller"],
      rating: {
        score: 8.8,
        reviews: "2.7M"
      },
      release_date: new Date("2010-07-16"),
      cast: [
        {
          name: "Leonardo DiCaprio",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/wpxZ9zN0tVfI4o8N0ZIm8elcgdM.jpg"
        },
        {
          name: "Cillian Murphy",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9uGHEgsiUXjCNq8wdq4r49YL8A1.jpg"
        }
      ],
      crew: [
        {
          name: "Christopher Nolan",
          role: "Director",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/cnR6wHug3c6VxABPYyzJYdVtD2a.jpg"
        }
      ],
      src: "inception.jpg"
    },
    {
      title: "Se7en",
      description: "Two detectives hunt a serial killer who uses the seven deadly sins as his motives.",
      duration_minutes: 127,
      language: ["English"],
      genre: ["Crime", "Drama", "Mystery"],
      rating: {
        score: 8.6,
        reviews: "1.8M"
      },
      release_date: new Date("1995-09-22"),
      cast: [
        {
          name: "Brad Pitt",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/kU3B75TyRiCgE270EyZnHjfivoq.jpg"
        },
        {
          name: "Morgan Freeman",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/oIciQWr8VwKoR8TmAw1owaiZFyb.jpg"
        }
      ],
      crew: [
        {
          name: "David Fincher",
          role: "Director",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9KeGWWvYv6R0sX6fJ2QXoeR9zN7.jpg"
        }
      ],
      src: "se7en.jpg"
    },
    {
      title: "Shutter Island",
      description: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
      duration_minutes: 138,
      language: ["English"],
      genre: ["Mystery", "Thriller"],
      rating: {
        score: 8.2,
        reviews: "1.5M"
      },
      release_date: new Date("2010-02-19"),
      cast: [
        {
          name: "Leonardo DiCaprio",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/wpxZ9zN0tVfI4o8N0ZIm8elcgdM.jpg"
        },
        {
          name: "Mark Ruffalo",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/z3dvKqMNDQWk3QLxzumloQVR0pv.jpg"
        }
      ],
      crew: [
        {
          name: "Martin Scorsese",
          role: "Director",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/fLmgH4pDPrlC2l9WCcS2dEqrVwQ.jpg"
        }
      ],
      src: "shutter_island.jpg"
    },
    {
      title: "Forrest Gump",
      description: "The presidencies of Kennedy and Johnson, the Vietnam War, and more through the eyes of an Alabama man.",
      duration_minutes: 142,
      language: ["English"],
      genre: ["Drama", "Romance"],
      rating: {
        score: 8.8,
        reviews: "2.4M"
      },
      release_date: new Date("1994-07-06"),
      cast: [
        {
          name: "Tom Hanks",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/xndWFsBlClOJFRdhSt4NBwiPq2o.jpg"
        },
        {
          name: "Robin Wright",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/wnVFvJ3MVfLoMT4YzsEJY2qVY9l.jpg"
        }
      ],
      crew: [
        {
          name: "Robert Zemeckis",
          role: "Director",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/4cdgwiO5nkQy01bbn3JwL6Uu6QA.jpg"
        }
      ],
      src: "forrest_gump.jpg"
    },
    {
      title: "Fight Club",
      description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club.",
      duration_minutes: 139,
      language: ["English"],
      genre: ["Drama"],
      rating: {
        score: 8.8,
        reviews: "2.2M"
      },
      release_date: new Date("1999-10-15"),
      cast: [
        {
          name: "Brad Pitt",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/kU3B75TyRiCgE270EyZnHjfivoq.jpg"
        },
        {
          name: "Edward Norton",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/5XBzD5WuTyVQZeS4VI25z2moMeY.jpg"
        }
      ],
      crew: [
        {
          name: "David Fincher",
          role: "Director",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/9KeGWWvYv6R0sX6fJ2QXoeR9zN7.jpg"
        }
      ],
      src: "fight_club.jpg"
    },
    {
      title: "2001: A Space Odyssey",
      description: "Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins.",
      duration_minutes: 149,
      language: ["English"],
      genre: ["Sci-Fi"],
      rating: {
        score: 8.3,
        reviews: "1.1M"
      },
      release_date: new Date("1968-04-03"),
      cast: [
        {
          name: "Keir Dullea",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/3Q9aCiiYaxzFc78yApv6NAg9pgL.jpg"
        }
      ],
      crew: [
        {
          name: "Stanley Kubrick",
          role: "Director",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/yFT0VyIelI9aegZrsAwOG5iVP4v.jpg"
        }
      ],
      src: "space_odyssey.jpg"
    },
    {
      title: "The Dark Knight",
      description: "Batman sets out to dismantle the remaining criminal organizations that plague Gotham.",
      duration_minutes: 152,
      language: ["English"],
      genre: ["Action", "Crime", "Drama"],
      rating: {
        score: 9.0,
        reviews: "2.8M"
      },
      release_date: new Date("2008-07-18"),
      cast: [
        {
          name: "Christian Bale",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/qCpZn2e3dimwbryLnqxZuI88PTi.jpg"
        },
        {
          name: "Heath Ledger",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/lv9fvWLn1BX8f1ZBBtdYR4OZZfU.jpg"
        }
      ],
      crew: [
        {
          name: "Christopher Nolan",
          role: "Director",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/cnR6wHug3c6VxABPYyzJYdVtD2a.jpg"
        }
      ],
      src: "the_dark_knight.jpg"
    },
    {
      title: "The Apu Trilogy",
      description: "A Bengali trilogy following the childhood, adolescence, and adulthood of Apu in early 20th-century India.",
      duration_minutes: 337,
      language: ["Bengali"],
      genre: ["Drama"],
      rating: {
        score: 8.5,
        reviews: "300K"
      },
      release_date: new Date("1955-08-26"),
      cast: [
        {
          name: "Soumitra Chatterjee",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/l8ZG3qxOVvJ8SaSsz3Vm3UewkWN.jpg"
        }
      ],
      crew: [
        {
          name: "Satyajit Ray",
          role: "Director",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1UQ8VKT9oSgjQ2cmqYxU5PlUv6T.jpg"
        }
      ],
      src: "apu_trilogy.jpg"
    },
    {
      title: "Inglourious Basterds",
      description: "In Nazi-occupied France, a group of Jewish soldiers plans to assassinate Nazi leaders.",
      duration_minutes: 153,
      language: ["English", "German", "French"],
      genre: ["Adventure", "Drama", "War"],
      rating: {
        score: 8.3,
        reviews: "1.9M"
      },
      release_date: new Date("2009-08-21"),
      cast: [
        {
          name: "Brad Pitt",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/kU3B75TyRiCgE270EyZnHjfivoq.jpg"
        }
      ],
      crew: [
        {
          name: "Quentin Tarantino",
          role: "Director",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/wmUqvqxAP5JPnWx3OeXb6TgC5xR.jpg"
        }
      ],
      src: "inglourious_basterds.jpg"
    },
    {
      title: "A Clockwork Orange",
      description: "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment.",
      duration_minutes: 136,
      language: ["English"],
      genre: ["Crime", "Drama", "Sci-Fi"],
      rating: {
        score: 8.3,
        reviews: "1.4M"
      },
      release_date: new Date("1972-02-02"),
      cast: [
        {
          name: "Malcolm McDowell",
          role: "Actor",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/2gW8LfxeKmvljHYILzq9gAYjM0k.jpg"
        }
      ],
      crew: [
        {
          name: "Stanley Kubrick",
          role: "Director",
          image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/yFT0VyIelI9aegZrsAwOG5iVP4v.jpg"
        }
      ],
      src: "clockwork_orange.jpg"
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


