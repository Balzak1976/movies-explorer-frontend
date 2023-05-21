import './Promo.css';
import imgLink from '../../../images/promo__main-illustration.svg';

function Promo() {
  return (
    <section className="promo page_width_l bg_blue">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img class="promo__main-illustration" src={imgLink} alt="иллюстрация земного шара" />
      <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <a href="#aboutMe" className="promo__link">
        Узнать больше
      </a>
    </section>
  );
}

export default Promo;
