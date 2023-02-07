import React, { Component } from "react";
import Input from "../components/Input";
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
    errors: {},
    passwordRepeatConfirmed: false,
  };

  handleChange = (event) => {
    if (
      event.target.name === "password" ||
      event.target.name === "repeatPassword"
    ) {
      this.handlePasswordChange(event);
    }

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    let passwordRepeatConfirmed = true;
    if (event.target.name === "repeatPassword") {
      console.log("1. Repeat pw field: ", event.target.name);
      console.log("1. Current PW: ", this.state.password);
      console.log("1. Current repeat PW: ", this.state.repeatPassword);
      console.log("--------------------------");

      passwordRepeatConfirmed = this.state.password === event.target.value;
    } else if (event.target.name === "password") {
      console.log("2. Pw field: ", event.target.name);
      console.log("2. Current PW: ", this.state.password);
      console.log("2. Current repeat PW: ", this.state.repeatPassword);

      passwordRepeatConfirmed =
        this.state.repeatPassword === event.target.value;
    }

    this.setState({ passwordRepeatConfirmed: passwordRepeatConfirmed });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ pendingApiCall: true });
    this.props.actions
      .sendSignUpForm(this.state)
      .then((response) => {
        this.setState({ pendingApiCall: false });
      })
      .catch((apiError) => {
        let errors = { ...this.state.errors };
        if (apiError.response.data && apiError.response.data.validationErrors) {
          errors = { ...apiError.response.data.validationErrors };
        }
        this.setState({ pendingApiCall: false, errors });
      });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="text-center">Sign Up</h1>
        <div className="signup-section">
          <form onSubmit={this.handleSubmit} className="signup-form">
            <Input
              type="text"
              label="First name"
              name="firstName"
              value={this.state.firstName}
              placeholder="Your first name"
              onChange={this.handleChange}
              hasError={this.state.errors.firstName && true}
              error={this.state.errors.firstName}
            />
            <Input
              type="text"
              label="Last name"
              name="lastName"
              value={this.state.lastName}
              placeholder="Your last name"
              onChange={this.handleChange}
              hasError={this.state.errors.lastName && true}
              error={this.state.errors.lastName}
            />
            <Input
              type="email"
              label="Email address"
              name="email"
              value={this.state.email}
              placeholder="Your email"
              onChange={this.handleChange}
              hasError={this.state.errors.email && true}
              error={this.state.errors.email}
            />
            <Input
              type="text"
              label="Phone number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              placeholder="Your phone number"
              onChange={this.handleChange}
              hasError={this.state.errors.phoneNumber && true}
              error={this.state.errors.phoneNumber}
            />
            <Input
              type="text"
              label="Username"
              name="username"
              value={this.state.username}
              placeholder="Your username"
              onChange={this.handleChange}
              hasError={this.state.errors.username && true}
              error={this.state.errors.username}
            />
            <Input
              type="password"
              label="Password"
              name="password"
              value={this.state.password}
              placeholder="Your password"
              onChange={this.handleChange}
              hasError={this.state.errors.password && true}
              error={this.state.errors.password}
            />
            <Input
              type="password"
              label="Repeat your password"
              name="repeatPassword"
              value={this.state.repeatPassword}
              placeholder="Repeat your password"
              onChange={this.handleChange}
              hasError={this.state.errors.repeatPassword && true}
              error={this.state.errors.repeatPassword}
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={
                this.state
                  .pendingApiCall /* || this.state.passwordRepeatConfirmed*/
              }
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
