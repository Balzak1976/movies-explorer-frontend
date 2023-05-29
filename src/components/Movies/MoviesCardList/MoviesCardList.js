import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const testImg =
  'https://vsegda-pomnim.com/uploads/posts/2022-04/1648929945_58-vsegda-pomnim-com-p-avatar-les-foto-68.jpg';

const MOVIES = [
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

function MoviesCardList() {
  return (
    <section className="cards page_width_l">
      <ul className="cards__list reset-ul">
        {MOVIES.map((v, i) => (
          <li key={i}>
            <MoviesCard props={v} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
