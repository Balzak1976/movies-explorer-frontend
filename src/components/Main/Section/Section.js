import './Section.css';


function Section( {classMix, title, children}) {
  return (
    <section className={`section page_width_l ${classMix}`}>
      <h2 className="section__header">{title}</h2>
      { children}
    </section>
  );
}

export default Section;