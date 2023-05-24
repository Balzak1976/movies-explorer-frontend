import './AboutProject.css';
import Section from '../Section/Section';

const PROJECT_HEADER = 'О проекте';
const PROJECT_LIST = [
  {
    title: 'Дипломный проект включал 5 этапов',
    subtitle: 'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.',
  },
  {
    title: 'На выполнение диплома ушло 5 недель',
    subtitle: 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.',
  },
];
const TIMELINE_LIST = [
  { graph: '1 неделя', caption: 'Back-end' },
  { graph: '4 неделя', caption: 'Front-end' },
];

function AboutProject() {
  return (
    <Section classMix={'section_project'} title={PROJECT_HEADER}>
      <article className="project">
        <ul className="project__list">
          {PROJECT_LIST.map((v, i) => (
            <li className="project__item" key={i}>
              <h3 className="project__title">{v.title}</h3>
              <p className="project__subtitle">{v.subtitle}</p>
            </li>
          ))}
        </ul>
        <ul className="timeline">
          {TIMELINE_LIST.map((v, i) => (
            <li>
              <figure className="timeline__week">
                <div className="timeline__graph">{v.graph}</div>
                <figcaption className="timeline__caption">{v.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </article>
    </Section>
  );
}

export default AboutProject;
