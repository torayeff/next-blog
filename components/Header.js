import React, { useState } from "react";

export default function Header() {
  const [isBurgerActive, activateBurger] = useState(false);

  const onClick = () => {
    console.log("clicked");
    activateBurger(!isBurgerActive);
  }

  return (
    <div className="columns is-centered">
      <div className="column is-8">
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
                <a className="navbar-item">About me</a>
                <a className="navbar-item">Blog</a>
                <a className="navbar-item">Projects</a>
              </div>
            </div>

          </div>
        </nav>
      </div>
    </div>
  );
}