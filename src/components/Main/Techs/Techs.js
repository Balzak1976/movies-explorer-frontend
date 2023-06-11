import './Techs.css';

const TECHS_HEADER = 'Технологии';
const TECHS_TITLE = '7 технологий';
const TECHS_SUBTITLE = 'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.';
const TECHS_LIST = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__header">{TECHS_HEADER}</h2>
      <article className="techs__text">
        <h3 className="techs__title">{TECHS_TITLE}</h3>
        <p className="techs__subtitle">{TECHS_SUBTITLE}</p>
        <ul className="techs__list">
          {TECHS_LIST.map((v, i) => (
            <li className="techs__item" key={i}>{v}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default Techs;
