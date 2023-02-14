import React, { Component } from "react";
import "./MainContent.css";

class MainContent extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <main className="main-content">
          <h1 className="text-center">Welcome to the pizzeria!</h1>
        </main>
      </React.Fragment>
    );
  }
}

export default MainContent;
