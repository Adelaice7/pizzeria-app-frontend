import React, { Component } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-bs-toggle="collapse"
              data-bs-target="#pizzeria-navbar"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div
              className="collapse navbar-collapse justify-content-center"
              id="pizzeria-navbar"
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link active">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/pizzas" className="nav-link">
                    Pizzas
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/salads" className="nav-link">
                    Salads
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
