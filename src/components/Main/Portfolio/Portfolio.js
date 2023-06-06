import Nav from '../../parts/Nav/Nav';
import './Portfolio.css';

const PORTFOLIO_HEADER = 'Портфолио';
const PORTFOLIO_LINKS = [
  { text: 'Статичный сайт', link: 'https://balzak1976.github.io/how-to-learn/' },
  { text: 'Адаптивный сайт', link: 'https://balzak1976.github.io/russian-travel/' },
  { text: 'Одностраничное приложение', link: 'https://balzak1976.github.io/react-mesto-auth/' },
];
const NAV_CLASS = { ul: 'portfolio__links', li: 'portfolio__item', a: 'portfolio__link' };

function Portfolio() {
  return (
    <section className="portfolio edge-padding">
      <h2 className="portfolio__header">{PORTFOLIO_HEADER}</h2>
      <Nav class={NAV_CLASS} links={PORTFOLIO_LINKS}>
        <span className="portfolio__icon">↗</span>
      </Nav>
    </section>
  );
}

export default Portfolio;
