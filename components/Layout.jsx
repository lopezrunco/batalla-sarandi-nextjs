import Navbar from "./Navbar";
import Bottom from "./Bottom";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Bottom />
      <Footer />
    </div>
  );
};

export default Layout;
