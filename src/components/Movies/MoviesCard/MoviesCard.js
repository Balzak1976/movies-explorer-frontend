import './MoviesCard.css';
import { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { getFormattedDuration } from '../../../utils/movieCardUtils';

function MoviesCard({ movie, onCardClick, onCardLike, onCardDelete, isSavedMovies }) {
  const currentUser = useContext(CurrentUserContext);
  const [isLiked, setIsLiked] = useState(false);

  const handleCardLike = () => {
    setIsLiked(!isLiked);
    isLiked ? onCardDelete(movie) : onCardLike(movie);
  };

  useEffect(() => {
    const isOwner = movie?.owner?.email === currentUser.email;
    setIsLiked(isOwner);
  }, []);

  return (
    <article className="card">
      <img className="card__img" src={movie?.image} alt={movie?.name} onClick={onCardClick} />
      <div className="card__body">
        <h2 className="card__title">{movie?.nameRU}</h2>
        <div className="card__duration">{getFormattedDuration(movie?.duration)}</div>
        {isSavedMovies ? (
          <button className="card__delete" onClick={() => {onCardDelete(movie)}} type="button" aria-label="удалить карточку" />
        ) : (
          <button
            className={`card__like ${isLiked && 'card__like_active'}`}
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
