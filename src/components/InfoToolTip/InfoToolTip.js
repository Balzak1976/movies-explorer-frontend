import './InfoToolTip.css';

const NOT_FOUND = 'Ничего не найдено';
const ERROR_MSG =
  'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

function InfoToolTip({ infoToolTip: { notFound }, error: { status, message } }) {
  return (
    <div className="info">
      <h3 className="info__title">
        {notFound && NOT_FOUND}
        {status ?? ''}
      </h3>
      <p className="info__subtitle">{message && ERROR_MSG}</p>
    </div>
  );
}

export default InfoToolTip;
