import './AboutProject.css';

const PROJECT_HEADER = 'О проекте';
const PROJECT_TITLE = ['Дипломный проект включал 5 этапов', 'На выполнение диплома ушло 5 недель'];
const PROJECT_SUBTITLE = [
  'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.',
  'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.',
];
const TIMELINE_GRAPH = ['1 неделя', '4 неделя'];
const TIMELINE_CAPTION = ['Back-end', 'Front-end'];

function AboutProject() {
  return (
    <section className="project page_width_l">
      <h2 className="project__header">{PROJECT_HEADER}</h2>
      <ul className="project__list">
        <li className="project__item">
          <h3 className="project__title">{PROJECT_TITLE[0]}</h3>
          <p className="project__subtitle">{PROJECT_SUBTITLE[0]}</p>
        </li>
        <li className="project__item">
          <h3 className="project__title">{PROJECT_TITLE[1]}</h3>
          <p className="project__subtitle">{PROJECT_SUBTITLE[1]}</p>
        </li>
      </ul>
      <ul className="timeline">
        <li>
          <figure class="timeline__week">
            <div class="timeline__graph bg_color_1">{TIMELINE_GRAPH[0]}</div>
            <figcaption class="timeline__caption">{TIMELINE_CAPTION[0]}</figcaption>
          </figure>
        </li>
        <li>
          <figure class="timeline__week">
            <div class="timeline__graph">{TIMELINE_GRAPH[1]}</div>
            <figcaption class="timeline__caption">{TIMELINE_CAPTION[1]}</figcaption>
          </figure>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
