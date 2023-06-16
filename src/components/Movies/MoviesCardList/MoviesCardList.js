import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Preloader/Preloader';
import InfoToolTip from '../../InfoToolTip/InfoToolTip';

function MoviesCardList({ movies, onCardClick, onCardDelete, onCardLike, isPreload, infoToolTip, error }) {
  return (
    <div className="cards">
      {isPreload && <Preloader />}

      {infoToolTip.notFound && <InfoToolTip infoToolTip={infoToolTip} error={error} />}

      {error?.status && <InfoToolTip infoToolTip={infoToolTip} error={error} />}

      {infoToolTip.isSuccess && (
        <ul className="cards__list reset-ul">
          {movies.map((movie) => (
            <li key={movie.id}>
              <MoviesCard movie={movie} onCardClick={onCardClick} onCardDelete={onCardDelete} onCardLike={onCardLike} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MoviesCardList;
