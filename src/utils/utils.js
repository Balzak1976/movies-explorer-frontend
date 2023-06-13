const addAllMoviesToStorage = (res) => {
  const url = 'https://api.nomoreparties.co';
  res.splice(8);
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

export { addAllMoviesToStorage, getAllMoviesFromStorage, filterMovies };
