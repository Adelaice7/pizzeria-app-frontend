import React, { Component } from "react";
import Product from "./Product";

class SaladPage extends Component {
  static defaultProps = {
    actions: {
      getSalads: () => {
        new Promise((resolve, reject) => {
          resolve({});
        });
      },
    },
  };

  state = {
    salads: [
      {
        id: 0,
        name: "",
        desc: "",
        price: 0.0,
      },
    ],
  };

  componentDidMount = () => {
    this.loadSalads();
  };

  loadSalads = () => {
    console.log("LOad salad");
    this.props.actions
      .getSalads()
      .then((response) => {
        this.setState({ salads: response.data });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  render() {
    return (
      <main className="main-content salad-page">
        <h1 className="product-page-title">Salads</h1>
        <div className="product-list salad-list">
          {this.state.salads.map((salad) => (
            <Product product={salad} />
          ))}
        </div>
      </main>
    );
  }
}

export default SaladPage;
