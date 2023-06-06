import './Promo.css';
import imgLink from '../../../images/promo__main-illustration.svg';

const PROMO_TITLE = 'Учебный проект студента факультета \n Веб-разработки.';
const PROMO_SUBTITLE = 'Листайте ниже, чтобы узнать больше \n про этот проект и его создателя.';
const PROMO_BTN = 'Узнать больше';

function Promo() {
  return (
    <section className="promo edge-padding">
      <img className="promo__main-illustration" src={imgLink} alt="иллюстрация земного шара" />
      <h1 className="promo__title">{PROMO_TITLE}</h1>
      <p className="promo__subtitle">{PROMO_SUBTITLE}</p>
      <a href="#aboutMe" className="promo__link">
        {PROMO_BTN}
      </a>
    </section>
  );
}

export default Promo;
