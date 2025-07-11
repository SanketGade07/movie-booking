document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('movie_id');

    if (!movieId) {
        console.error("No movie_id in URL");
        return;
    }

    const movieName= params.get('name');

    if (!movieName) {
        console.error("No movie_id in URL");
        return;
    }


    try {
        const baseURL =
            window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost'
                ? 'http://localhost:5000'
                : 'https://movie-booking-backend-q6sq.onrender.com';

        const response = await fetch(`${baseURL}/api/movies/${movieId}/shows`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const shows = await response.json();
        
        
        // Render theatres and shows after fetch
        renderTheatresWithShowtimes(shows,movieName);
        
        

    } catch (error) {
        console.error("Fetch error: ", error);
    }
});

function renderTheatresWithShowtimes(shows, movieName) {
    const container = document.querySelector('.container');

    // Set movie title
    renderMovieTitle(movieName);

    shows.forEach(entry => {
        const { theater, showtimes } = entry;

        // Create the main theater block
        const theaterDiv = document.createElement('div');
        theaterDiv.className = 'theater';

        // Create theater details
        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'details';
        detailsDiv.innerHTML = `
            <h3>${theater.chain || ''}: ${theater.name}, ${theater.location}</h3>
            <div class="features">
                <span><img class="icon-m-ticket" src="https://in-cdn.bmscdn.com/moviesmaster/movies-showtimes/v4/common/mticket.png" alt="M-Ticket"></span>
                <span><img class="icon-food" src="https://in-cdn.bmscdn.com/moviesmaster/movies-showtimes/v4/common/fnb.png" alt="Food and Beverages"></span>
            </div>
        `;

        // Create showtimes buttons
        const showtimesDiv = document.createElement('div');
        showtimesDiv.className = 'showtimes';

        showtimes.forEach(show => {
            const showLink = document.createElement('a');
            showLink.href = `seating.html?show_id=${show._id}`; // pass show_id for seat selection

            const showButton = document.createElement('button');
            showButton.className = 'show';
            showButton.innerHTML = `
                ${show.time}<br>
                <span>${show.screenType}</span>
            `;

            showLink.appendChild(showButton);
            showtimesDiv.appendChild(showLink);
        });

        // Assemble and append
        theaterDiv.appendChild(detailsDiv);
        theaterDiv.appendChild(showtimesDiv);
        container.appendChild(theaterDiv);
    });
}

function renderMovieTitle(movieName) {
    const titleContainer = document.querySelector('.title');

    if (titleContainer) {
        const h1 = document.createElement('h1');
        h1.textContent = movieName;
        titleContainer.appendChild(h1);
    } else {
        console.error("No .title container found in the DOM.");
    }
}



