import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  static defaultProps = {
    name: "",
  };

  render() {
    return (
      <div className="product">
        <h2 className="product-name">{this.props.product.name}</h2>
        <img
          className="product-img"
          src="https://picsum.photos/200"
          alt={this.props.product.name}
        />
        <span className="product-desc">{this.props.product.desc}</span>
        <div className="product-options">
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    );
  }
}

export default Product;
