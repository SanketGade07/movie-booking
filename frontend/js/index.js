async function getMovies() {
    try {
      

    const response = await fetch(`http://127.0.0.1:5000/api/movies`, {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json'
      },
     
  });

      const data = await response.json();
     
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }
  
  getMovies();
  