import React from "react";

export default function Header() {
  return (
    <div className="columns is-centered">
      <div className="column is-8">
        <nav className="navbar">
          <div className="container">

            <div className="navbar-brand">
              <a className="navbar-item" href="../">
                <img src="/bulma.png" alt="Logo"/>
              </a>
              <span className="navbar-burger burger" data-target="navbarMenu">
              <span/>
              <span/>
              <span/>
            </span>
            </div>

            <div id="navbarMenu" className="navbar-menu">
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