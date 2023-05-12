export async function getMovie(id) {
  const movie = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=fr-FR`
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Impossible de récupérer le film");
    }
    return res.json();
  });
  return movie;
}

export async function getPopularMovies() {
  const movies = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=fr-FR&page=1`
  )
    .then((res) => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .then((data) => data.results);
  return movies;
}

export async function getTopRatedMovies() {
  const movies = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=fr-FR&page=1`
  )
    .then((res) => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .then((data) => data.results);
  return movies;
}

export async function getTrendingMovies() {
  const movies = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.API_KEY}&language=fr-FR&page=1`
  )
    .then((res) => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .then((data) => data.results);
  return movies;
}

export async function getMoviesWithGenre(genreId) {
  const movies = await await fetch(
    `${process.env.API_URL}/discover/movie/?api_key=${process.env.API_KEY}&language=fr-FR&external_source=imdb_id&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  });
  return movies;
}

export async function getGenres() {
  const genres = await fetch(
    `${process.env.API_URL}/genre/movie/list?api_key=${process.env.API_KEY}&language=fr-FR`,
    { next: { revalidate: 10000 } }
  ).then((res) => {
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  });
  return genres;
}

export async function getResultsOnSearch(search) {
  const results = await fetch(
    `${process.env.API_URL}/search/movie?api_key=${process.env.API_KEY}&language=fr-FR&query=${search}&page=1&include_adult=false`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      return res.json();
    })
    .then((data) => data.results);
  return results;
}
