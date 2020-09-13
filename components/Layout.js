import Navbar from "components/Navbar";
import React from "react";
function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <div className="content">{children}</div>
    </React.Fragment>
  );
}

export default Layout;
