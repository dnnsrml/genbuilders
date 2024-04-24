import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHammer } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavbar = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="main-container">
      <nav className="navbar">
        <div className="nav-container">
          <a className="nav-brand" href="#">
            <span className="t-orange">
              <FontAwesomeIcon icon={faHammer} />
            </span>{" "}
            GEN
            <span className="t-500 t-orange">BUILDERS</span>
          </a>
          <button className="nav-toggler" type="button" onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className={`nav-collapse ${isNavVisible ? "nav-visible" : ""}`}>
            <div className="nav-menu">
              <a href="/" className="nav-link">
                HOME
              </a>
              <a href="/" className="nav-link">
                SERVICES
              </a>
              <a href="/" className="nav-link">
                PORTFOLIO
              </a>
              <a href="/" className="nav-link">
                CONTACT
              </a>
              <button className="light-button mr-0" type="button">
                REQUEST A QUOTE
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
