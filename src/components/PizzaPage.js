import React, { Component } from "react";
import Product from "./Product";
import "./PizzaPage.css";

class PizzaPage extends Component {
  static defaultProps = {
    actions: {
      getPizzas: () => {
        new Promise((resolve, reject) => {
          resolve({});
        });
      },
    },
  };

  state = {
    pizzas: [
      {
        id: 0,
        name: "",
        desc: "",
        price: 0.0,
      },
    ],
  };

  componentDidMount = () => {
    this.loadPizzas();
  };

  loadPizzas = () => {
    console.log("LOad pizza");
    this.props.actions
      .getPizzas()
      .then((response) => {
        this.setState({ pizzas: response.data });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  render() {
    console.log("State: ", this.state.pizzas);
    return (
      <main className="main-content pizza-page">
        <h1 className="product-page-title">Pizzas</h1>
        <div className="product-list pizza-list">
          {this.state.pizzas.map((pizza) => (
            <Product product={pizza} />
          ))}
        </div>
      </main>
    );
  }
}

export default PizzaPage;
