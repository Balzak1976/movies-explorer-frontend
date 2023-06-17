const addAllMoviesToStorage = (res) => {
  const url = 'https://api.nomoreparties.co';
  res.splice(30);
  const movies = res.map((v) => {
    return {
      id: v?.id,
      name: v?.nameRU,
      link: url + v?.image?.url,
      trailerLink: v?.trailerLink,
      duration: v?.duration,
    };
  });

  localStorage.setItem('allMovies', JSON.stringify(movies));
};

const getAllMoviesFromStorage = () => JSON.parse(localStorage.getItem('allMovies'));

const filterMovies = (req, movies) => movies.filter((movie) => movie.name.toLowerCase().includes(req.toLowerCase()));

const addMovieSearchResultToStorage = (searchData, movies) => {
  localStorage.setItem('foundMovies', JSON.stringify({ searchData, movies }));
};

const getMovieSearchResultFromStorage = () => JSON.parse(localStorage.getItem('foundMovies')) || {};

export {
  addAllMoviesToStorage,
  getAllMoviesFromStorage,
  filterMovies,
  addMovieSearchResultToStorage,
  getMovieSearchResultFromStorage,
};
