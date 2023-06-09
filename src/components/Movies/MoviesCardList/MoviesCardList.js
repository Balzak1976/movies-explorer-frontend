import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, isSavedMovie }) {
  return (
    <div className="cards">
      <ul className="cards__list reset-ul">
        {movies.map((v, i) => (
          <li key={i}>
            <MoviesCard props={v} isSavedMovie={isSavedMovie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesCardList;
