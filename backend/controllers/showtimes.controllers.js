
const Showtime= require('../models/show.model');
const Theater = require('../models/theatre.model');

exports.getShowtimes = async (req, res) => {
    try {
        const showtimes = await Showtime.find({ movieId: req.params.id })
                                        .populate('theaterId');
    
        const grouped = {};
    
        for (const show of showtimes) {
            const theaterId = show.theaterId._id.toString();
            if (!grouped[theaterId]) {
                grouped[theaterId] = {
                    theater: show.theaterId,
                    showtimes: []
                };
            }
            grouped[theaterId].showtimes.push({
                _id: show._id,
                time: show.time,
                screenType: show.screenType
            });
        }
    
        res.json(Object.values(grouped));
    } catch (error) {
        console.error("🔥 Internal Server Error in getShowtimes:", error);
        res.status(500).json({ message: error.message, stack: error.stack });
    }
    
 
};