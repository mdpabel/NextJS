import React, { Fragment } from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
