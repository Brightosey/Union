import "./Header.scss";
import { useState } from "react";
import { X, Menu } from "lucide-react"; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <section className="header__logo">
        <a href="#welcome" className="header__logo-link">D&amp;M</a>
      </section>

      <section className="header__menu">
        <button className="header__toggle" onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? (<X className="header__icon" />) : (<Menu className="header__icon" />)};
        </button>

        <nav className={`header__nav ${isOpen ? "header__nav--open" : ""}`}>
          <ul className="header__list">
            {[
              "#Welcome",
              "#OurStory",
              "#EventDetails",
              "#Gallery",
              "#RSVP",
              "#Gifts",
            ].map((anchor, i) => (
              <li  key={i} onClick={() => setIsOpen(false)}>
                <a href={anchor} className="header__item">
                  {anchor === "#Welcome" ? "Welcome" : anchor.replace("#", "")}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {isOpen && <div className="header__overlay"></div>}
    </header>
  );
}

export default Header;
