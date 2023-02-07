import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import Footer from "./Footer";
import * as apiCalls from "../../api/apiCalls";

const Layout = ({ children }) => {
  const actions = {
    postLogin: apiCalls.login,
  };

  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <MainContent />
      <SideBar actions={actions} />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
