import { useEffect, useState } from 'react';
import { NO_MOVIES } from '../../constants/movieCard';
import { filterMovies } from '../../utils/movieCardUtils';
import Movies from '../Movies/Movies';
import { useLocalStorage } from '../../hooks/useLocalStorage';

function SavedMovies({ savedMovies, onCardDelete, onCardLike, isPreload, error }) {
  const [infoSavedMovies, setInfoSavedMovies] = useState({});
  const [savedSearchResult, setSavedSearchResult] = useLocalStorage({}, 'savedMovies');
  const [filtered, setFiltered] = useState(null);

  const handleSearchSavedMovies = (submitted) => {
    // console.log('поиск в сохраненных фильмах')
    setInfoSavedMovies({ notFound: false });

    setFiltered(filterMovies(submitted, savedMovies));

    setSavedSearchResult(submitted);

    setInfoSavedMovies({ ...infoSavedMovies, notFound: filtered?.length === NO_MOVIES });
  };

  useEffect(() => {
    setFiltered(null);
  }, []);

  return (
    <Movies
      onSearchForm={handleSearchSavedMovies}
      searchData={savedSearchResult}
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
