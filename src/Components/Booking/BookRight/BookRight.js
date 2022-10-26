import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import "./_bookRight.scss";
export default function BookRight() {
  return (
    <div className="book__right book__wrapp--padding book__wrapp--half">
      <div className="book__right--container">
        <h2 className="title contacts__title">Contacts</h2>
        <ul className="contacts-wrap">
          <li className="contacts-wrap__item">
            <div className="contacts__left">
              <address className="contacts__address">
                <ul className="contacts__list">
                  <li className="contacts__item">
                    <a
                      href="https://goo.gl/maps/2rJZJG8QaF56uuci6"
                      className="contacts__link"
                    >
                      <FiMapPin size="1.5rem" color="white" />
                      <span>Vasilkova street, 7A, Kyiv, 08132</span>
                    </a>
                  </li>
                  <li className="contacts__item">
                    <a href="tel:+380441111111" className="contacts__link ">
                      <FiPhone size="1.5rem" color="white" />
                      <span>+38 044 111 11 11</span>
                    </a>
                  </li>
                  <li className="contacts__item">
                    <a
                      href="mailto:barbershop@email.com"
                      className="contacts__link"
                    >
                      <FiMail size="1.5rem" color="white" />
                      <span>barbershop@email.com</span>
                    </a>
                  </li>
                </ul>
              </address>
            </div>
          </li>
          <li className="contacts-wrap__item">
            <div className="contacts__right">
              <p className="pre-title contacts__pre-title">working hours</p>
              <p className="contacts__text">Daily from 9:00 to 22:00</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
