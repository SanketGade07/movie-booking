const mongoose = require('mongoose');
const Theater = require('../models/theatre.model');
const Showtime = require('../models/show.model');
const Movie = require('../models/movie.model');
const connectDB = require('../config/db');

async function seed() {
    await connectDB();

    // Clear theaters and showtimes
    await Theater.deleteMany({});
    await Showtime.deleteMany({});

    // Fetch existing movies
    const movies = await Movie.find();
    if (movies.length === 0) {
        console.error("❌ No movies found in the database. Please add movies before seeding showtimes.");
        process.exit(1);
    }

    // Insert theaters
    const theaters = await Theater.insertMany([
        {
            name: "Nexus Seawoods",
            location: "Nerul, Navi Mumbai",
            chain: "Cinepolis",
            facilities: ["M-Ticket", "Food & Beverage"],
            cancellable: true
        },
        {
            name: "Viviana Mall",
            location: "Thane",
            chain: "Cinepolis",
            facilities: ["M-Ticket", "Food & Beverage"],
            cancellable: false
        },
        {
            name: "Megaplex, Inorbit Mall",
            location: "Malad",
            chain: "INOX",
            facilities: ["M-Ticket", "Food & Beverage"],
            cancellable: true
        },
        {
            name: "R-City",
            location: "Ghatkopar",
            chain: "INOX",
            facilities: ["M-Ticket", "Food & Beverage"],
            cancellable: true
        },
        {
            name: "Phoenix Palladium",
            location: "Lower Parel Mumbai",
            chain: "PVR ICON",
            facilities: ["M-Ticket", "Food & Beverage"],
            cancellable: true
        },
    ]);

    const showtimesData = [
        ["10:00 AM", "01:15 PM", "04:30 PM", "07:45 PM", "11:00 PM"],
        ["10:00 AM", "01:15 PM", "04:30 PM", "07:45 PM", "11:00 PM"],
        ["09:30 AM", "12:45 PM", "04:00 PM", "07:15 PM", "10:30 PM"],
        ["09:30 AM", "12:45 PM", "04:00 PM", "07:15 PM", "10:30 PM"],
        ["10:00 AM", "01:15 PM", "04:30 PM", "07:45 PM", "11:00 PM"],
    ];

    const showtimes = [];

    // ✅ For *each movie*:
    for (const movie of movies) {
        // ✅ For *each theater*:
        for (let i = 0; i < theaters.length; i++) {
            // For each time slot in the theater:
            for (const time of showtimesData[i]) {
                showtimes.push({
                    movieId: movie._id,
                    theaterId: theaters[i]._id,
                    time,
                    screenType: "IMAX"
                });
            }
        }
    }

    await Showtime.insertMany(showtimes);

    console.log(`✅ Seed completed: Inserted showtimes for ${movies.length} movies across ${theaters.length} theaters.`);
    await mongoose.connection.close();
    process.exit();
}

seed();
