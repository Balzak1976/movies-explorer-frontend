import { useEffect, useState } from 'react';
import { NO_MOVIES } from '../../constants/movieCard';
import { filterMovies } from '../../utils/movieCardUtils';
import Movies from '../Movies/Movies';

let filtered = null;

function SavedMovies({ savedMovies, onCardDelete, onCardLike, isPreload, error }) {
  const [infoSavedMovies, setInfoSavedMovies] = useState({});
  const [savedSearchResult, setSavedSearchResult] = useState({});

  const handleSearchSavedMovies = (submitted) => {
    // console.log('поиск в сохраненных фильмах')
    setInfoSavedMovies({ notFound: false });

    filtered = filterMovies(submitted, savedMovies);

    setSavedSearchResult(submitted);

    localStorage.setItem('savedMovies', JSON.stringify({ localSavedSearchData: submitted }));

    setInfoSavedMovies({ ...infoSavedMovies, notFound: filtered.length === NO_MOVIES });
  };

  useEffect(() => {
    const { localSavedSearchData = {} } = JSON.parse(localStorage.getItem('savedMovies')) || {};
    setSavedSearchResult({ ...localSavedSearchData });
    filtered = null;
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
