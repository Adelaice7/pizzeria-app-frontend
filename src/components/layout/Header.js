import React, { Component } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="container-fluid">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8 text-center p-1">
              <h1 className="page-title">
                <NavLink to="/" className="page-title-link">
                  Pizza Almighty
                </NavLink>
              </h1>
            </div>
            <div className="col-2 p-1 justify-content-end d-flex">
              <div className="cart px-2 w-100 d-none d-md-flex">
                <FontAwesomeIcon icon={faShoppingCart} className="ml-0" />
                <span className="cart-price-tag mr-0">0 €</span>
              </div>
              <div className="cart d-md-none p-2 text-center">
                <FontAwesomeIcon icon={faShoppingCart} />
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
