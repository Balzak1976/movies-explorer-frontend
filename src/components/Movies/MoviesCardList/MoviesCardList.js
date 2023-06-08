import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
  return (
    <section className="cards">
      <ul className="cards__list reset-ul">
        {movies.map((v, i) => (
          <li key={i}>
            <MoviesCard props={v} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
