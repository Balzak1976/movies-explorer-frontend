import './Pagination.css';

function Pagination({ isNextPage }) {
  return (
    <div className="pagination">
      {isNextPage && (
        <button className="pagination__btn" type="button" aria-label="переход на следующую страницу">
          Ещё
        </button>
      )}
    </div>
  );
}

export default Pagination;
