import './AboutProject.css';

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

const TIMELINE_GRAPH = ['1 неделя', '4 неделя'];
const TIMELINE_CAPTION = ['Back-end', 'Front-end'];

function AboutProject() {
  return (
    <section className="project page_width_l">
      <h2 className="project__header">{PROJECT_HEADER}</h2>
      <ul className="project__list">
        {PROJECT_LIST.map((v, i) => (
          <li className="project__item" key={i}>
            <h3 className="project__title">{v.title}</h3>
            <p className="project__subtitle">{v.subtitle}</p>
          </li>
        ))}
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
