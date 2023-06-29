const addAllMoviesToStorage = (movies) => {
  localStorage.setItem('allMovies', JSON.stringify(movies));
};

const getAllMoviesFromStorage = () => JSON.parse(localStorage.getItem('allMovies'));

const addMovieSearchResultToStorage = ({ localMovies, localSearchData, localSavedSearchData }) => {
  localStorage.setItem('foundMovies', JSON.stringify({ localMovies, localSearchData, localSavedSearchData }));
};

const getMovieSearchResultFromStorage = () => JSON.parse(localStorage.getItem('foundMovies')) || {};

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
