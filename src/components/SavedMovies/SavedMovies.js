import { useEffect, useState } from 'react';
import { NO_MOVIES } from '../../constants/movieCard';
import { filterMovies } from '../../utils/movieCardUtils';
import Movies from '../Movies/Movies';

function SavedMovies({ savedMovies, onCardDelete, onCardLike, isPreload, error }) {
  const [infoSavedMovies, setInfoSavedMovies] = useState({});
  const [searchResult, setSearchResult] = useState({});
  const [filtered, setFiltered] = useState(null);

  const handleSearchSavedMovies = (submitted) => {
    // console.log('поиск в сохраненных фильмах')
    setInfoSavedMovies({ notFound: false });

    setFiltered(filterMovies(submitted, savedMovies));

    setSearchResult(submitted);

    setInfoSavedMovies({ notFound: filtered?.length === NO_MOVIES });
  };

  useEffect(() => {
    setFiltered(null);
  }, []);

  return (
    <Movies
      onSearchForm={handleSearchSavedMovies}
      searchData={searchResult}
      dataMovies={filtered ? filtered : savedMovies}
      onCardDelete={onCardDelete}
      onCardLike={onCardLike}
      isPreload={isPreload}
      infoToolTip={infoSavedMovies}
      error={error}
      isSavedMovies={true}
    />
  );
}

export default SavedMovies;
