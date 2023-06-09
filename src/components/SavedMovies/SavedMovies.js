import './SavedMovies.css';
import SearchPanel from '../Movies/SearchPanel/SearchPanel';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Pagination from '../Movies/Pagination/Pagination';

const testImg =
  'https://static.tildacdn.com/tild3439-6264-4437-b130-353631643363/kot-zhalost.jpg';

const movies = [
  {
    link: testImg,
    name: '33 слова о дизайне',
    duration: '1ч42м',
    isShortMovie: true,
  },
  {
    link: testImg,
    name: '33 слова о дизайне',
    duration: '1ч42м',
    isShortMovie: true,
  },
  {
    link: testImg,
    name: '33 слова о дизайне',
    duration: '1ч42м',
    isShortMovie: true,
  },
];

const isSavedMovie = true;

function SavedMovies() {
  return (
    <div className="movies">
      <SearchPanel />
      <MoviesCardList movies={movies} isSavedMovie={isSavedMovie} />
      <Pagination isNextPage={false} />
    </div>
  );
}

export default SavedMovies;
