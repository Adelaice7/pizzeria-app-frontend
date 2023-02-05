import React, { Component } from "react";
import "./SideBar.css";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <aside className="sidebar">
          <div className="login-section">
            <form name="login-form" className="login-form">
              <h3 className="text-center">Login</h3>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                placeholder="Your username"
              />
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Your password"
              />
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
              <span>
                No account yet? <a className="sign-up-link">Sign up!</a>
              </span>
            </form>
          </div>
        </aside>
      </React.Fragment>
    );
  }
}

export default SideBar;
