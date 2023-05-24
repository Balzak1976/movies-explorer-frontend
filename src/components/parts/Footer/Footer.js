import './Footer.css';
import Nav from '../Nav/Nav';

const FOOTER_LINKS = [
  { text: 'Яндекс Практикум', link: 'https://practicum.yandex.ru/profile/web/' },
  { text: 'Github', link: 'https://github.com/Balzak1976' },
];
const NAV_CLASS = { ul: 'footer__links', a: 'footer__link' };

function Footer() {
  const date = new Date();

  return (
    <footer className="footer page_width_l">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__body">
        <p className="footer__copyright">&copy; {date.getFullYear()}. Максим Скороходов</p>
        <Nav class={NAV_CLASS} links={FOOTER_LINKS} />
      </div>
    </footer>
  );
}

export default Footer;
