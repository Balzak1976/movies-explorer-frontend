import './MoviesCard.css';
import { useContext } from 'react';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { getFormattedDuration } from '../../../utils/movieCardUtils';

function MoviesCard({ movie, onCardLike, onCardDelete, isSavedMovies }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwner = movie?.owner?.email === currentUser.email;

  const handleCardLike = () => {
    isOwner ? onCardDelete(movie) : onCardLike(movie);
  };

  return (
    <article className="card">
      <a className="card__link" href={movie?.trailerLink} target="_blank" rel="noopener noreferrer">
        <img className="card__img" src={movie?.image} alt={movie?.name} />
      </a>
      <div className="card__body">
        <h2 className="card__title">{movie?.nameRU}</h2>
        <div className="card__duration">{getFormattedDuration(movie?.duration)}</div>
        {isSavedMovies ? (
          <button
            className="card__delete"
            onClick={() => {
              onCardDelete(movie);
            }}
            type="button"
            aria-label="удалить карточку"
          />
        ) : (
          <button
            className={`card__like ${isOwner && 'card__like_active'}`}
            onClick={handleCardLike}
            type="button"
            aria-label="лайкнуть карточку"
          />
        )}
      </div>
    </article>
  );
}

export default MoviesCard;
