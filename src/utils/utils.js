const addAllMoviesToStorage = (movies) => {
  localStorage.setItem('allMovies', JSON.stringify(movies));
};

const getAllMoviesFromStorage = () => JSON.parse(localStorage.getItem('allMovies'));

const filterMovies = (req, movies) => {
  return movies.filter((movie) => movie.nameRU.toLowerCase().includes(req.toLowerCase()));
};

const addMovieSearchResultToStorage = (searchData, movies) => {
  localStorage.setItem('foundMovies', JSON.stringify({ searchData, movies }));
};

const getMovieSearchResultFromStorage = () => JSON.parse(localStorage.getItem('foundMovies')) || {};

const mergeWithUniqueMovieId = (biggerArr, lowerArr) => {
  return biggerArr.map((movie) => {
    const savedMovie = lowerArr.find((savedMovie) => {
      return movie.movieId === savedMovie.movieId;
    });

    return savedMovie ? savedMovie : movie;
  });
};

export {
  addAllMoviesToStorage,
  getAllMoviesFromStorage,
  filterMovies,
  addMovieSearchResultToStorage,
  getMovieSearchResultFromStorage,
  mergeWithUniqueMovieId,
};
