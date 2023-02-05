import React, { Component } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1 className="page-title">
            <a href="#">Pizza Almighty</a>
          </h1>
          <div className="cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>0 €</span>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
