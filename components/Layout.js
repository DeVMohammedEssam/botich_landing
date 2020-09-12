import Navbar from "components/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div className="content">{children}</div>
    </>
  );
}

export default Layout;
