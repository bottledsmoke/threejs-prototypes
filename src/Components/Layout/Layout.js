import React from "react";

import Nav from "Components/Nav/Nav";
import Footer from "Components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
