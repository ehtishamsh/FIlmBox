import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./componets/Header";
import Footer from "./componets/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
