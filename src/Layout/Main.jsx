import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const Main = () => {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname.includes("login") || location.pathname.includes ("signup")
  return (
    <div>
        {
       hideNavbarAndFooter || < Navbar></Navbar>
       }
      <Outlet></Outlet>
      {
       hideNavbarAndFooter ||
      <Footer></Footer>
}
    </div>
  );
};

export default Main;