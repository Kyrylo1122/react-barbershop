import "./_footer.scss";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="https://www.instagram.com/" className="footer__link">
              Instagram
            </a>
          </li>
          <li className="footer__item">
            <a href="https://www.instagram.com/" className="footer__link">
              Youtube
            </a>
          </li>
        </ul>
        <p className="footer__text">Copyright 2020</p>
      </div>
    </footer>
  );
}
