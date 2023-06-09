import './MoviesCard.css';

function MoviesCard({ props: { link, name, duration, isShortMovie }, isSavedMovie, onDeleteMovie: onDelMovie }) {
  return (
    <article className="card">
      <img className="card__img" src={link} alt={name} />
      <div className="card__body">
        <h2 className="card__title">{name}</h2>
        <div className="card__duration">{duration}</div>
        {isSavedMovie ? (
          <button className="card__delete" onClick={onDelMovie} type="button" aria-label="редактировать" />
        ) : (
          <div className={`card__mark ${isShortMovie && 'card__mark_type_marked'}`} />
        )}
      </div>
    </article>
  );
}

export default MoviesCard;
