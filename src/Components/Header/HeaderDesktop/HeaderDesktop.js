import { Link } from "react-scroll";

export default function HeaderDesktop() {
  return (
    <div className="header-container">
      <a href="./index.html" className="header__logo">
        <svg width="65" height="55">
          <use href="icons.svg#icon-Logo"></use>
        </svg>
      </a>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="about" smooth={true} className="nav__link">
              О нас
            </Link>
          </li>
          <li className="nav__item">
            <Link to="service" smooth={true} className="nav__link">
              Услуги и цены
            </Link>
          </li>
          <li className="nav__item">
            <Link to="masters" smooth={true} className="nav__link">
              Мастера
            </Link>
          </li>
          <li className="nav__item">
            <Link to="book" smooth={true} className="nav__link">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>

      <ul className="header-contacts">
        <li className="header-contacts__item">
          <button className="btn header__btn" type="button">
            онлайн-запись
          </button>
        </li>
        <li className="header-contacts__item">
          <a
            href="tel:+380441111111"
            className="header-contacts__link header-contacts__tel"
          >
            +38 044 111 11 11
          </a>
        </li>
      </ul>
    </div>
  );
}
