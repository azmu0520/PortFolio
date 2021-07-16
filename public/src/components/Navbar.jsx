import React from "react";
import logo from "../logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/Navbar">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/Navbar">
                Home <span className="sr-only"> </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Navbar">
                about me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Navbar">
                services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Navbar">
                how work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Navbar">
                portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Navbar">
                contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
