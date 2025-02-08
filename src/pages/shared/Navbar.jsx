import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import usecart from "../../Hooks/usecart";
const Navbar = () => {
  const [cart] = usecart()
  
  const { user, logOut } = useContext(AuthContext)
  console.log(user)
  const handleLogOut = () => {
    logOut()
  }
  const navlink = <div className="flex gap-6 font-semibold">
    <Link to="/">HOME</Link>
    <Link to="/contact">CONTACT US</Link>
    <Link to="menu">OUR MENU</Link>
    <Link to="/ourShop">OUR SHOP</Link>
    {
      user ?
        <Link to="/dashboard">DASHBOARD</Link>
        :
        <></>
    }
    <Link to="/dashboard/cart">
      <FaShoppingCart className="text-2xl">
      </FaShoppingCart>
      <div className="badge badge-secondery text-bold absolute top-0 mt-2 ml-3 bg-rose-200">+{cart?.length}</div>
    </Link>

    {
      user ?
        <button onClick={handleLogOut} className="pb-1">LOGOUT</button>
        :
        <Link to="/login">SIGN IN</Link>
    }

  </div>
  return (
    <div className="bg-black bg-opacity-30 fixed z-10 w-full">
      <div className="navbar max-w-7xl mx-auto text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navlink}
            </ul>
          </div>
          <Link to="" className=" text-xl font-semibold">BISTRO BOSS <br /> Restaurant</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlink}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;