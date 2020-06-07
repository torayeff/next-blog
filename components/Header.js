import React, {useState} from "react";

export default function Header() {
  const [isBurgerActive, activateBurger] = useState(false);

  const onClick = () => {
    activateBurger(!isBurgerActive);
  }

  return (
    <nav className="navbar">
      <div className="container">

        <div className="navbar-brand">
          <a className="navbar-item" href="../">
            <img src="/logo.png" alt="Logo"/>
          </a>
          <span className={`navbar-burger burger ${isBurgerActive ? "is-active" : ""}`}
                data-target="navbarMenu"
                onClick={onClick}>
                <span/>
                <span/>
                <span/>
              </span>
        </div>

        <div id="navbarMenu" className={`navbar-menu ${isBurgerActive ? "is-active" : ""}`}>
          <div className="navbar-end">
            <a className="navbar-item">Blog</a>
            <a className="navbar-item">Projects</a>
            <a className="navbar-item">Quotes</a>
          </div>
        </div>

      </div>
    </nav>
  );
}