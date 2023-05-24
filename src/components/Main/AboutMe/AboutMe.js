import './AboutMe.css';
import avatar from '../../../images/myPhoto.png';
import Section from '../Section/Section';

const ABOUT_HEADER = 'Студент';
const ABOUT_TITLE = 'Виталий';
const ABOUT_SUBTITLE = 'Фронтенд-разработчик, 30 лет';
const ABOUT_DESCRIPTION =
  'Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена \n и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С \n 2015 года работал в компании "СКБ Контур". После того, как прошёл курс по \n веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.';

const ABOUT_LINKS = [{ link: 'https://github.com/Balzak1976', text: 'Github' }];

function AboutMe() {
  return (
    <Section classMix={'section_about'} title={ABOUT_HEADER}>
      <article className="about">
        <h3 className="about__title">{ABOUT_TITLE}</h3>
        <p className="about__subtitle">{ABOUT_SUBTITLE}</p>
        <p className="about__description">{ABOUT_DESCRIPTION}</p>
        <nav className="about__nav">
          <ul className="about__links">
            {ABOUT_LINKS.map((v, i) => (
              <li key={i}>
                <a href={v.link} className="about__link">
                  {v.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <img src={avatar} alt="фото владельца сайта" className="about__avatar" />
      </article>
    </Section>
  );
}

export default AboutMe;
