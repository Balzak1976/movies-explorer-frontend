const addAllMoviesToStorage = (movies) => {
  localStorage.setItem('allMovies', JSON.stringify(movies));
};

const getAllMoviesFromStorage = () => JSON.parse(localStorage.getItem('allMovies'));

const addMovieSearchResultToStorage = (value) => {
  localStorage.setItem('movies', JSON.stringify(value));
};

const getMovieSearchResultFromStorage = () => JSON.parse(localStorage.getItem('movies')) || {};

const mixMoviesWithUniqueMovieId = (biggerArr, lowerArr) => {
  return biggerArr?.map((movie) => {
    const savedMovie = lowerArr?.find((savedMovie) => {
      return movie.movieId === savedMovie.movieId;
    });

    return savedMovie ? savedMovie : movie;
  });
};

export {
  addAllMoviesToStorage,
  getAllMoviesFromStorage,
  addMovieSearchResultToStorage,
  getMovieSearchResultFromStorage,
  mixMoviesWithUniqueMovieId,
};
