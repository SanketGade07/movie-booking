
export async function getMovies() {
  try {
    const baseURL=
    (window.location.hostname==='127.0.0.1'||
    window.location.hostname==='localhost')
    ?'http://localhost:5000'
    :
    'https://movie-booking-backend-q6sq.onrender.com';

  
    const response = await fetch(`${baseURL}/api/movies`);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const movies = await response.json();

    // Render Movies after response recieved from fetch
    
    renderMoviesList(movies);
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

function createMovieCard(movie) {
  return `
    <a class="movie-card" href="movie.html?movie_id=${movie._id}" data-id="${movie._id}">
      <img src="images/${movie.src}" alt="${movie.title}" />
      <div class="title">${movie.title}</div>
    </a>`;
}

function renderMoviesList(movies) {
  const container = document.querySelector('.movie-grid');
  if (!container) return;
  container.innerHTML = movies.map(createMovieCard).join('');
}

