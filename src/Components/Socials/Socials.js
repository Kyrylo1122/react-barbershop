import "./_socials.scss";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

export default function Socials() {
  return (
    <ul className="social">
      <li className="social__item">
        <a href="https://www.instagram.com/" className="social__link">
          <FaInstagram size="2rem" className="social__icon" />
        </a>
      </li>
      <li className="social__item">
        <a href="https://twitter.com/" className="social__link">
          <FaTwitter size="2rem" className="social__icon" />
        </a>
      </li>
      <li className="social__item">
        <a href="https://www.facebook.com/" className="social__link">
          <FaFacebook size="2rem" className="social__icon" />
        </a>
      </li>
      <li className="social__item">
        <a href="https://www.linkedin.com/" className="social__link">
          <FaLinkedinIn size="2rem" className="social__icon" />
        </a>
      </li>
    </ul>
  );
}
