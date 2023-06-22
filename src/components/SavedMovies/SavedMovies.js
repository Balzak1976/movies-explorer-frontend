import './SavedMovies.css';
import Movies from '../Movies/Movies';

function SavedMovies(props) {
  return <Movies {...props} isSavedMovies={true} />;
}

export default SavedMovies;
