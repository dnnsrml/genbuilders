import React, { useState } from "react";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          &#9776;
        </button>
        <div className={`navbar-collapse ${isNavExpanded ? "open" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Dropdown
              </a>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="/action1" className="dropdown-item">
                    Action 1
                  </a>
                  <a href="/action2" className="dropdown-item">
                    Action 2
                  </a>
                </div>
              )}
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
