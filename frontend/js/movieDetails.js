document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('movie_id');

    if (!movieId) {
        console.error("No movie_id in URL");
        return;
    }

    try {
        const baseURL =
            window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost'
                ? 'http://localhost:5000'
                : 'https://movie-booking-backend-gd5g.onrender.com';

        const response = await fetch(`${baseURL}/api/movies/${movieId}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const movie = await response.json();

        // Render movie Details after fetch
        
        renderMovieDetails(movie);

    } catch (error) {
        console.error("Fetch error: ", error);
    }
});

function renderMovieDetails(movie){
        renderMovieHeader(movie);
        renderMovieAbout(movie);
        renderMovieCast(movie);
        renderMovieCrew(movie);
}

function renderMovieHeader(movie){
    const movieHeader=document.querySelector('.movie-header');
    movieHeader.innerHTML=`
      <img src="images/${movie.src}" alt="${movie.title}" class="poster">
      <div class="details">
        <h1>${movie.title}</h1>
        <div class="rating">⭐ IMDb: ${movie.rating.score}/10 (${movie.rating.reviews} Reviews)</div>
        <p class="languages">Available in: ${movie.language}</p>
        <p class="duration">${movie.duration_minutes}m  • ${movie.genre.join(', ')}</p>
        <button class="book-btn">Book Tickets</button>
      </div> `

}

function renderMovieAbout(movie){
    const movieAbout=document.querySelector('.about');
    movieAbout.innerHTML=` <h2>About the movie</h2>
      <p>
       ${movie.description}
      </p> 
    `
}

function renderMovieCast(movie){
    const castDiv=document.querySelector('.cast');
    const h2 = document.createElement('h2');
    h2.textContent="Cast";
    castDiv.prepend(h2);
    const movieCastGrid=document.querySelector('.cast-grid');
    let html=``;
    movie.cast.forEach(cast => {
        html+=`
        <div class="person">
            <div class="circle-image">
                <img src="${cast.image}" alt="${cast.name}">
            </div>
            <p><strong>${cast.name}</strong><br>${cast.role}</p>
        </div>`;
        
    });
    movieCastGrid.innerHTML=html;
}

function renderMovieCrew(movie){
    const crewDiv=document.querySelector('.crew');
    const h2 = document.createElement('h2');
    h2.textContent="Crew";
    crewDiv.prepend(h2);
    const movieCrewGrid=document.querySelector('.crew-grid');
    let html=``;
    movie.crew.forEach(crew => {
        html+=`
        <div class="person">
            <div class="circle-image">
                <img src="${crew.image}" alt="${crew.name}">
            </div>
            <p><strong>${crew.name}</strong><br>${crew.role}</p>
        </div>`;
        
    });
    movieCrewGrid.innerHTML=html;
}
