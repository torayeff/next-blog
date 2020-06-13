import React, {useState} from "react";
import Link from "next/link";

export default function Header() {
  const [isBurgerActive, activateBurger] = useState(false);

  const onClick = () => {
    activateBurger(!isBurgerActive);
  }

  return (
    <nav className="navbar">
      <div className="container">

        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img src="/logo.png" alt="Logo"/>
            </a>
          </Link>
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
            <Link href="/blog"><a className="navbar-item">Blog</a></Link>
            <Link href="/projects"><a className="navbar-item">Projects</a></Link>
          </div>
        </div>

      </div>
    </nav>
  );
}