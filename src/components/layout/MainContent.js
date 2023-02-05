import React, { Component } from "react";
import CustomerSignUpPage from "../../pages/CustomerSignupPage";
import "./MainContent.css";
import * as apiCalls from "../../api/apiCalls";

class MainContent extends Component {
  state = {};

  render() {
    const actions = {
      sendSignUpForm: apiCalls.signup,
    };

    return (
      <React.Fragment>
        <main className="main-content">
          <CustomerSignUpPage actions={actions} />
        </main>
      </React.Fragment>
    );
  }
}

export default MainContent;
