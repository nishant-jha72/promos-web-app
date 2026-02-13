import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {useLocation } from "react-router-dom";

const Layout = () => {
const location = useLocation();
const hideFooterRoutes = ["/profile"];
  return (
    <>
      <Navbar />
      <Outlet />
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

export default Layout;
