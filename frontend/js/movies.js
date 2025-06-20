let movies = [];

export async function getMovies() {
  try {
    const response = await fetch('http://127.0.0.1:5000/api/movies');
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    movies = await response.json();
    renderMoviesList();
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

function createMovieCard(movie) {
  return `
    <a class="movie-card" href="movie.html?movie_id=${movie._id}">
      <img src="images/${movie.src}" alt="${movie.title}" />
      <div class="title">${movie.title}</div>
    </a>`;
}

function renderMoviesList() {
  const container = document.querySelector('.movie-grid');
  if (!container) return;
  container.innerHTML = movies.map(createMovieCard).join('');
}
