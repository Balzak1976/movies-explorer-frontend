import './Portfolio.css';

const PORTFOLIO_HEADER = 'Портфолио';
const PORTFOLIO_LINKS = [
  { text: 'Статичный сайт', link: 'https://balzak1976.github.io/how-to-learn/' },
  { text: 'Адаптивный сайт', link: 'https://balzak1976.github.io/russian-travel/' },
  { text: 'Одностраничное приложение', link: 'https://balzak1976.github.io/react-mesto-auth/' },
];

function Portfolio() {
  return (
    <section className='portfolio page_width_l' >
      <h2 className="portfolio__header">{PORTFOLIO_HEADER}</h2>
      <nav>
        <ul className="portfolio__links nav_portfolio">
          {PORTFOLIO_LINKS.map((v, i) => (
            <li key={i}>
              <a href={v.link} className="portfolio__link">
                {v.text}
                <span className="portfolio__icon">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
    </section>
  );
}

export default Portfolio;