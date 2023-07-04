import { DURATION_SHORT_MOVIES_MINUTES, HOUR_IN_MINUTES } from '../constants/movieCardUtils';

function getFormattedDuration(duration) {
  const hours = Math.floor(duration / HOUR_IN_MINUTES); // целое количество часов
  const minute = duration % HOUR_IN_MINUTES; // остаток от деления на 60
  return `${hours}ч${minute > 0 ? minute : '0' + minute}м`;
}

const filterMovies = (requestData, moviesData) => {
  const { savedReq = '', isShortMovies = false } = requestData;

  const filterKeyword = (movie) => movie.nameRU.toLowerCase().includes(savedReq.toLowerCase());

  const filterShortMovie = (movie) => movie.duration <= DURATION_SHORT_MOVIES_MINUTES;

  if (isShortMovies) {
    return moviesData.filter(filterShortMovie).filter(filterKeyword);
  } else {
    return moviesData.filter(filterKeyword);
  }
};

const mixMoviesWithUniqueMovieId = (biggerArr, lowerArr) => {
  return biggerArr?.map((movie) => {
    const savedMovie = lowerArr?.find((savedMovie) => {
      return movie.movieId === savedMovie.movieId;
    });

    return savedMovie ? savedMovie : movie;
  });
};

export { getFormattedDuration, filterMovies, mixMoviesWithUniqueMovieId };
