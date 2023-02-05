import React, { Component } from "react";
import "./CustomerSignupPage.css";

class CustomerSignUpPage extends Component {
  static defaultProps = {
    actions: {
      sendSignUpForm: (signupForm) => {
        new Promise((resolve, reject) => {
          resolve({});
        });
      },
    },
  };

  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
    repeatPassword: "",
    pendingApiCall: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ pendingApiCall: true });
    this.props.actions
      .sendSignUpForm(this.state)
      .then((response) => {
        this.setState({ pendingApiCall: false });
      })
      .catch((error) => {
        this.setState({ pendingApiCall: false });
      });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center">Sign Up</h1>
        <div className="signup-section">
          <form onSubmit={this.handleSubmit} className="signup-form">
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={this.state.firstName}
              placeholder="Your first name"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="lastName"
              className="form-control"
              value={this.state.lastName}
              placeholder="Your last name"
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="email"
              className="form-control"
              value={this.state.email}
              placeholder="Your email"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="phoneNumber"
              className="form-control"
              value={this.state.phoneNumber}
              placeholder="Your phone number"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="username"
              className="form-control"
              value={this.state.username}
              placeholder="Your username"
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              className="form-control"
              value={this.state.password}
              placeholder="Your password"
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="repeatPassword"
              className="form-control"
              value={this.state.repeatPassword}
              placeholder="Repeat your password"
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={this.state.pendingApiCall}
            >
              {this.state.pendingApiCall && (
                <div
                  className="spinner-border text-light spinner-border-sm mr-sm-1"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              )}
              Sign Up
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default CustomerSignUpPage;
