import './Footer.css';

function Footer() {
  const date = new Date();

  return (
    <footer className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__body">
        <p className="footer__copyright"> {date.getFullYear()}. Максим Скороходов</p>

        <nav>
          <ul className="footer__links">
            <li>
              <a href="https://practicum.yandex.ru/profile/web/" className="footer__link">
                Яндекс Практикум
              </a>
            </li>
            <li>
              <a href="https://github.com/Balzak1976" className="footer__link">
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
