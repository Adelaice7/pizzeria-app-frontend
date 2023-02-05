import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <MainContent />
      <SideBar />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
