const filterMovies = (requestData, moviesData) => {
  const { savedReq = '', isShortMovies = false } = requestData;

  const filterKeyword = (movie) => movie.nameRU.toLowerCase().includes(savedReq.toLowerCase());

  const filterShortMovie = (movie) => movie.duration <= 40;

  if (isShortMovies) {
    return moviesData.filter(filterShortMovie).filter(filterKeyword);
  } else {
    return moviesData.filter(filterKeyword);
  }
};

export default filterMovies;
