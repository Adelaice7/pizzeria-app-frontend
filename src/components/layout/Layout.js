import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import SideBar from "./SideBar";
import Footer from "./Footer";
import * as apiCalls from "../../api/apiCalls";
import { Routes, Route } from "react-router-dom";
import PizzaPage from "../PizzaPage";
import SaladPage from "../SaladPage";

const Layout = ({ children }) => {
  const actions = {
    postLogin: apiCalls.login,
  };

  const productActions = {
    getPizzas: apiCalls.getPizzas,
    getSalads: apiCalls.getSalads,
  };

  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route
          path="/pizzas"
          element={<PizzaPage actions={productActions} />}
        />
        <Route path="/salads" element={<SaladPage />} />
      </Routes>
      {/* <MainContent /> */}
      <SideBar actions={actions} />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
