import React, { Component } from "react";

class Pizza extends Component {
  static defaultProps = {
    name: "",
  };

  render() {
    return (
      <div className="pizza">
        <h2>{this.props.pizza.name}</h2>
        <img src="https://picsum.photos/200" alt={this.props.pizza.name} />
        <span className="pizza-desc">{this.props.pizza.desc}</span>
        <div className="pizza-options">
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    );
  }
}

export default Pizza;
