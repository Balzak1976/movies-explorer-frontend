import './AboutMe.css';
import avatar from '../../../images/myPhoto.png';
import Nav from '../../parts/Nav/Nav';

const ABOUT_HEADER = 'Студент';
const ABOUT_TITLE = 'Виталий';
const ABOUT_SUBTITLE = 'Фронтенд-разработчик, 30 лет';
const ABOUT_DESCRIPTION =
  'Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании "СКБ Контур". После того, как прошёл курс по  веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.';

const ABOUT_LINKS = [{ link: 'https://github.com/Balzak1976', text: 'Github' }];
const NAV_CLASS = { nav: 'about__nav', ul: 'about__links', a: 'about__link' };

function AboutMe() {
  return (
    <section className="about">
      <h2 className="about__header">{ABOUT_HEADER}</h2>
      <article className="about__text">
        <img src={avatar} alt="фото владельца сайта" className="about__avatar" />
        <h3 className="about__title">{ABOUT_TITLE}</h3>
        <p className="about__subtitle">{ABOUT_SUBTITLE}</p>
        <p className="about__description">{ABOUT_DESCRIPTION}</p>
        <Nav class={NAV_CLASS} links={ABOUT_LINKS} />
      </article>
    </section>
  );
}

export default AboutMe;
