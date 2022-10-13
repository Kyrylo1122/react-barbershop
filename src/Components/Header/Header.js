import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import HeaderWithBtn from "./HeaderWithBtn";
import "./_header.scss";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <HeaderDesktop />
          <HeaderWithBtn />
        </div>
      </div>
    </header>
  );
}
