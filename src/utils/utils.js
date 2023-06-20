const addAllMoviesToStorage = (res) => {
  const url = 'https://api.nomoreparties.co';
  res.splice(30);
  const movies = res.map((v) => {
    return {
      country: v?.country,
      director: v?.director,
      duration: v?.duration,
      year: v?.year,
      description: v?.description,
      image: url + v?.image?.url,
      trailerLink: v?.trailerLink,
      thumbnail: url + v?.image?.formats?.thumbnail?.url,
      movieId: v?.id,
      nameRU: v?.nameRU,
      nameEN: v?.nameEN,
      isLiked: false,
    };
  });

  localStorage.setItem('allMovies', JSON.stringify(movies));
};

const getAllMoviesFromStorage = () => JSON.parse(localStorage.getItem('allMovies'));

const filterMovies = (req, movies) => movies.filter((movie) => movie.nameRU.toLowerCase().includes(req.toLowerCase()));

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
