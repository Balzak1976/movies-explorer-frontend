function Nav({ class: { nav, ul, li, a }, links, children }) {
  return (
    <nav className={nav}>
      <ul className={`${ul} reset-ul`}>
        {links.map((v, i) => (
          <li className={li} key={i}>
            <a href={v.link} target="_blank" rel="noreferrer" className={`button ${a}`}>
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
