import Navbar from "components/Navbar";
import React from "react";
function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <div className="content">{children}</div>
      <footer className="footer text-center p-2 text-light mt-4 bg-dark" >
      Botich © 2020 <br/>
      
      <a className="text-light" href="mailto: careers@Botich.com">
        careers@Botich.com
      </a>
   
      </footer>
    </React.Fragment>
  );
}

export default Layout;
