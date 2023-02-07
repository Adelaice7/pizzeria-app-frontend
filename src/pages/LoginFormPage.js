import React, { Component } from "react";
import Input from "../components/Input";

class LoginFormPage extends Component {
  static defaultProps = {
    actions: {
      postLogin: () => new Promise((resolve, reject) => resolve({})),
    },
  };

  state = {
    username: "",
    password: "",
    apiError: undefined,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      apiError: undefined,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const body = this.state;

    this.props.actions.postLogin(body).catch((error) => {
      if (error.response) {
        this.setState({ apiError: error.response.data.message });
      }
    });
  };

  render() {
    let disableSubmit = false;
    if (this.state.username === "") {
      disableSubmit = true;
    }
    if (this.state.password === "") {
      disableSubmit = true;
    }

    return (
      <div className="login-section">
        <form
          name="login-form"
          className="login-form"
          onSubmit={this.handleSubmit}
        >
          <h3 className="text-center">Login</h3>
          <Input
            label="Username"
            type="text"
            name="username"
            id="username"
            placeholder="Your username"
            onChange={this.handleChange}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Your password"
            onChange={this.handleChange}
            hasError={this.state.apiError && true}
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={disableSubmit}
          >
            Log In
          </button>
          <span>
            No account yet? <a className="sign-up-link">Sign up!</a>
          </span>
        </form>
      </div>
    );
  }
}

export default LoginFormPage;
