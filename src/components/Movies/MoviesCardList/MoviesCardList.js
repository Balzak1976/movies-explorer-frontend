import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const testImg =
  'https://vsegda-pomnim.com/uploads/posts/2022-04/1648929945_58-vsegda-pomnim-com-p-avatar-les-foto-68.jpg';

const MOVIES = [
  {
    _id: 1,
    link: testImg,
    name: '33 слова о дизайне',
    duration: '1ч42м',
    isShortMovie: false,
  },
  {
    _id: 2,
    link: testImg,
    name: '33 слова о дизайне',
    duration: '1ч42м',
    isShortMovie: true,
  },
  {
    _id: 3,
    link: testImg,
    name: '33 слова о дизайне',
    duration: '1ч42м',
    isShortMovie: false,
  },
  {
    _id: 4,
    link: testImg,
    name: '33 слова о дизайне',
    duration: '1ч42м',
    isShortMovie: false,
  },
];

function MoviesCardList() {
  return (
    <section className="movies">
      <ul className="reset-ul">
        {MOVIES.map((v) => (
          <li key={v._id}>
            <MoviesCard props={v} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
