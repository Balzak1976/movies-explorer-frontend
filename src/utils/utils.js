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
    };
  });

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
    const userMovie = lowerArr.find((userMovie) => {
      return movie.movieId === userMovie.movieId;
    });

    return userMovie ? userMovie : movie;
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
