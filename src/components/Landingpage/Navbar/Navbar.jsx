import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "./assests/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-white" id="main-navbar">
        <div className="container-fluid">
          <img src={logo} alt="" className="img-item" />
          <Link className="navbar-brand" to="#">
            OrganizeMe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  BLOG
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/guide">
                  GUIDE
                </Link>
              </li>
            </ul>
            <div className="btn-section">
              <button type="button" className="btn btn-primary btn-sm">
                <Link to='/login'>LogIn</Link>
              </button>{" "}
              <button
                type="button"
                className="btn btn-primary btn-sm bg-none"
                id="sign"
              >
              <Link to='/sign'>SignUp</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    
    </div>
  );
};

export default Navbar;
