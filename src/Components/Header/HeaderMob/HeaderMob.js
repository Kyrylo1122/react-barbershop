import { ImCross } from "react-icons/im";
import "./_mob-header.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function HeaderMob({ onClick, isOpen }) {
  const transition = { type: "spring", duration: 0.33 };

  return (
    <motion.div
      key={isOpen}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={transition}
      className={`backdrop ${isOpen ? "is-open" : ""}`}
    >
      <div className="modal">
        <div className="modal-top">
          <button
            className="mob-button js-close-menu"
            onClick={() => {
              onClick();
            }}
          >
            <ImCross size="2rem" />
          </button>

          <ul className="modal-nav">
            <li className="modal-nav__item">
              <Link
                to="about"
                smooth={true}
                className="modal-nav__link"
                onClick={() => {
                  onClick();
                }}
              >
                About{" "}
              </Link>
            </li>
            <li className="modal-nav__item">
              <Link
                to="service"
                smooth={true}
                className="modal-nav__link "
                onClick={() => {
                  onClick();
                }}
              >
                Services and prices{" "}
              </Link>
            </li>
            <li className="modal-nav__item">
              <Link
                to="masters"
                smooth={true}
                className="modal-nav__link "
                onClick={() => {
                  onClick();
                }}
              >
                Masters
              </Link>
            </li>
            <li className="modal-nav__item">
              <Link
                to="book"
                smooth={true}
                className="modal-nav__link "
                onClick={() => {
                  onClick();
                }}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <div className="modal-bottom">
          <ul className="header-contacts">
            <li className="mob-contacts__item">
              <a
                href="tel:+380441111111"
                className="header-contacts__link mob-contacts__link"
              >
                +38 044 111 11 11
              </a>
            </li>
            <li className="mob-contacts__item">
              <button className="btn modal__btn">booking</button>
            </li>
          </ul>
          <ul className="mob-social">
            <li className="mob-social__item">
              <a href="https://www.instagram.com/" className="mob-social__link">
                {" "}
                Instagram{" "}
              </a>
            </li>
            <li className="mob-social__item">
              <a
                href="https://www.youtube.com/"
                className="mob-social__link mob-social__link--youtube"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
