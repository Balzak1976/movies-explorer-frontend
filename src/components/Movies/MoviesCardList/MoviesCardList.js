import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
  return (
    <div className="cards">
      <ul className="cards__list reset-ul">
        {movies.map((v, i) => (
          <li key={i}>
            <MoviesCard props={v} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesCardList;
