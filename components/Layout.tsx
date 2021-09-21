import React from "react";
import { Navbar } from "./NavBar";

const Layout = ({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) => {
  return (
    <div className="content">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
