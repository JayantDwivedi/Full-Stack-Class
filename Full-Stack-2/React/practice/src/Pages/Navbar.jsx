import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li className="nav-item" className="nav-brand">
            Navbar
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link" exact>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" exact>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" exact>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
