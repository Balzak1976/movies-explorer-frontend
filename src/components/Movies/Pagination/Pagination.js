import './Pagination.css';

function Pagination({ isNextPage }) {
  return (
    <section className="pagination">
      {isNextPage && (
        <button className="pagination__btn" type="button" aria-label="переход на следующую страницу">
          Ещё
        </button>
      )}
    </section>
  );
}

export default Pagination;
