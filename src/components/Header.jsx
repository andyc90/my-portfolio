import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container-wrapper">
      <header className="header-container">
        <div className="email">
          <a href="/">andrewcookson@email.com</a>
        </div>
        <nav>
          <ul className="nav-list">
            <li>
              <Link className="nav-link" to="/">
                About
              </Link>{" "}
              /
            </li>
            <li>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>{" "}
              /
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>{" "}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
