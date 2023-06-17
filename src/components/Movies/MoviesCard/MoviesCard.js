import './MoviesCard.css';
import { /* useContext, */ useState} from 'react';
// import { CurrentUserContext } from '../contexts/CurrentUserContext';

function MoviesCard({ movie, onCardClick, onCardDelete, onCardLike }) {
  // const currentUser = useContext(CurrentUserContext);
  // const isOwn = owner._id === currentUser._id;
  const [isLiked, setIsLiked] = useState(false)
  
  const handleCardLike = () => {
    movie.like();
    setIsLiked(!isLiked)
    // onCardLike(movie);
  };


  return (
    <article className="card">
      <img className="card__img" src={movie.link} alt={movie.name} onClick={onCardClick}/>
      <div className="card__body">
        <h2 className="card__title">{movie.name}</h2>
        <div className="card__duration">{/* movie.getFormattedDuration() */}</div>
        {false ? (
          <button className="card__delete" onClick={onCardDelete} type="button" aria-label="удалить карточку" />
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
