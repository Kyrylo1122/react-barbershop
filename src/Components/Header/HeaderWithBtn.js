import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderMob from "./HeaderMob/HeaderMob";
import "./_headerWithBtn.scss";

export default function HeaderWithBtn() {
  const [open, setOpen] = useState(false);
  return (
    <div className="header__with-btn">
      <button
        type="button"
        style={{
          backgroundColor: "transparent",
          color: "white",
          outline: "none",
          border: "none",
        }}
        onClick={() => {
          setOpen((s) => !s);
        }}
      >
        <GiHamburgerMenu size="2rem" />
      </button>
      {open && <HeaderMob isOpen={open} onClick={() => setOpen(false)} />}
    </div>
  );
}
