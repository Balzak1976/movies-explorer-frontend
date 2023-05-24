import './Nav.css';

function Nav({ class: { nav, ul, li, a }, LINKS, children }) {
  return (
    <nav className={nav}>
      <ul className={`${ul} reset-ul`}>
        {LINKS.map((v, i) => (
          <li className={li} key={i}>
            <a href={v.link} className={`${a} reset-a`}>
              {v.text}
              {children}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
