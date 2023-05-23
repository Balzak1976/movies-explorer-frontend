import './Techs.css';
import Section from '../Section/Section';

const TECHS_HEADER = 'Технологии';
const TECHS_TITLE = '7 технологий';
const TECHS_SUBTITLE = 'На курсе веб-разработки мы освоили технологии, которые применили \n в дипломном проекте.';
const TECHS_LIST = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

function Techs() {
  return (
    <Section classMix={'section_techs'} title={TECHS_HEADER}>
      <article className="techs">
        <h3 className="techs__title">{TECHS_TITLE}</h3>
        <p className="techs__subtitle">{TECHS_SUBTITLE}</p>
        <ul className="techs__list">
          {TECHS_LIST.map((v, i) => <li className="techs__item" key={i}>{v}</li>)}
        </ul>
      </article>
    </Section>
  );
}

export default Techs;
