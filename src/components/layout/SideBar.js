import React, { Component } from "react";
import LoginFormPage from "../../pages/LoginFormPage";
import "./SideBar.css";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <aside className="sidebar">
          <LoginFormPage />
        </aside>
      </React.Fragment>
    );
  }
}

export default SideBar;
