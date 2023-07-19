import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__logo">
          <h1 className="navbar__title">Holidays</h1>
        </div>
        <div className="navbar__menu">
          <ul className="navbar__links">
            <li className="navbar__link">
              <a href="/">Home</a>
            </li>
            <li className="navbar__link">
              <a href="/holidays">Holidays</a>
            </li>
            <li className="navbar__link">
              <a href="/login">Login</a>
            </li>
          </ul>
          <div className="navbar__search">
            <input type="text" placeholder="Search" />
            <button type="submit">Enter</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
