const seatButtons = document.querySelectorAll('.seats button:not(.sold)');
const payButton = document.querySelector('.pay-btn');

// Simple seat select logic
const seats = document.querySelectorAll('.seat');
const payBtn = document.querySelector('.pay-btn');
let selectedSeats = [];

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        seat.classList.toggle('selected');
        const seatNumber = seat.innerText;
        if (seat.classList.contains('selected')) {
            selectedSeats.push(seatNumber);
        } else {
            selectedSeats = selectedSeats.filter(n => n !== seatNumber);
        }
        payBtn.textContent = `Pay ₹${selectedSeats.length * 200}`; // adjust per your logic
    });
});


    // Get movie name from URL
    const urlParams = new URLSearchParams(window.location.search);
    const movieName = urlParams.get('movie_id');

    // Set movie title on page
    if (movieName) {
        document.getElementById('movie-title').innerText = movieName;
    }

