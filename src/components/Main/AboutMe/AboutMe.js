import './AboutMe.css';
import avatar from '../../../images/me_small.jpg';
import Nav from '../../parts/Nav/Nav';
import { getCurrentAge } from '../../../utils/getCurrentAge';

const currentAge = getCurrentAge({ birthYear: 1976, birthMonth: 11, birthDay: 26 });

const ABOUT_HEADER = 'Студент';
const ABOUT_TITLE = 'Максим';
const ABOUT_SUBTITLE = `Фронтенд-разработчик, ${currentAge} лет`;
const ABOUT_DESCRIPTION =
  'Я родился в Ухте живу в Чебоксарах, закончил УГТУ по квалификации инженер-электрик. Мы с женой воспитываем троих сыновей. Я люблю слушать аудиокниги и бегаю по утрам. В 2019 проходил курс по  верстке, изучал PHP. В 2023 закончил курс Веб-разработчик в Яндекс Практикум.';

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
