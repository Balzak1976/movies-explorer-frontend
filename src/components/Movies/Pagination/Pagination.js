import './Pagination.css';

function Pagination({ onAddNextCards, isNextPageBtn }) {
  return (
    <div className="pagination">
      {isNextPageBtn && (
        <button
          className="pagination__btn"
          onClick={onAddNextCards}
          type="button"
          aria-label="переход на следующую страницу">
          Ещё
        </button>
      )}
    </div>
  );
}

export default Pagination;
