import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, onCardClick, onCardDelete, onCardLike }) {
  return (
    <div className="cards">
      <ul className="cards__list reset-ul">
        {movies.map((movie) => (
          <li key={movie.movieId}>
            <MoviesCard movie={movie} onCardClick={onCardClick} onCardDelete={onCardDelete} onCardLike={onCardLike} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesCardList;
