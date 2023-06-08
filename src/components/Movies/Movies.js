import './Movies.css';
import SearchPanel from './SearchPanel/SearchPanel';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Pagination from './Pagination/Pagination';

const testImg =
  'https://vsegda-pomnim.com/uploads/posts/2022-04/1648929945_58-vsegda-pomnim-com-p-avatar-les-foto-68.jpg';

const movies = [
  {
    link: testImg,
    name: '33 слова о дизайне',
    duration: '1ч42м',
    isShortMovie: false,
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
    isShortMovie: false,
  },
  {
    link: testImg,
    name: '33 слова о дизайне',
    duration: '1ч42м',
    isShortMovie: false,
  },
  {
    link: testImg,
    name: '33 слова о дизайне',
    duration: '1ч42м',
    isShortMovie: false,
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
    isShortMovie: false,
  },
  {
    link: testImg,
    name: '33 слова о дизайне',
    duration: '1ч42м',
    isShortMovie: false,
  },
  {
    link: testImg,
    name: '33 слова о дизайне',
    duration: '1ч42м',
    isShortMovie: false,
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
    isShortMovie: false,
  },
  {
    link: testImg,
    name: '33 слова о дизайне',
    duration: '1ч42м',
    isShortMovie: false,
  },
  {
    link: testImg,
    name: '33 слова о дизайне',
    duration: '1ч42м',
    isShortMovie: false,
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
    isShortMovie: false,
  },
  {
    link: testImg,
    name: '33 слова о дизайне',
    duration: '1ч42м',
    isShortMovie: false,
  },
];

function Movies() {

  return (
    <div className="movies">
      <SearchPanel />
      <MoviesCardList movies={movies} />
      <Pagination isNextPage={true} />
    </div>
  );
}

export default Movies;
