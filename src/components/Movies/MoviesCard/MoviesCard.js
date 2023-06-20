import { getFormattedDuration } from '../../../utils/movieCardUtils';
import './MoviesCard.css';
import { /* useContext, */ useState } from 'react';

// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function MoviesCard({ movie, onCardClick, onCardDelete, onCardLike }) {
  // const currentUser = useContext(CurrentUserContext);
  // const isOwn = owner._id === currentUser._id;
  // const [isLiked, setIsLiked] = useState(false)
  
  const handleCardLike = () => {
    // setIsLiked(!isLiked)
    onCardLike(movie);
  };


  return (
    <article className="card">
      <img className="card__img" src={movie?.image} alt={movie?.name} onClick={onCardClick}/>
      <div className="card__body">
        <h2 className="card__title">{movie?.nameRU}</h2>
        <div className="card__duration">{getFormattedDuration(movie?.duration)}</div>
        {false ? (
          <button className="card__delete" onClick={onCardDelete} type="button" aria-label="удалить карточку" />
        ) : (
          <button
            className={`card__like ${movie?.isLiked && 'card__like_active'}`}
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
