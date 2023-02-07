import React, { Component } from "react";
import LoginFormPage from "../../pages/LoginFormPage";
import "./SideBar.css";

class SideBar extends Component {
  render() {
    return (
      <React.Fragment>
        <aside className="sidebar">
          <LoginFormPage actions={this.props.actions} />
        </aside>
      </React.Fragment>
    );
  }
}

export default SideBar;
