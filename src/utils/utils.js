const addAllMoviesToStorage = (movies) => {
  localStorage.setItem('allMovies', JSON.stringify(movies));
};

const getAllMoviesFromStorage = () => JSON.parse(localStorage.getItem('allMovies'));

const addMovieSearchResultToStorage = (value) => {
  localStorage.setItem('movies', JSON.stringify(value));
};

const getMovieSearchResultFromStorage = () => JSON.parse(localStorage.getItem('movies')) || {};

export {
  addAllMoviesToStorage,
  getAllMoviesFromStorage,
  addMovieSearchResultToStorage,
  getMovieSearchResultFromStorage,
};
