import { useEffect } from 'react';
import Movies from '../Movies/Movies';

function SavedMovies({ onGetSavedMovies, ...props }) {
  useEffect(() => {
    onGetSavedMovies();
  }, []);

  return <Movies {...props} isSavedMovies={true} />;
}

export default SavedMovies;
