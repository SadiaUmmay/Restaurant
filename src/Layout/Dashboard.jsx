import { FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";

import { Link, NavLink, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="flex ">  
      <div className="w-96 text-center bg-orange-400 h-screen flex flex-col gap-5">
       <li className=" justify-center items-center  flex gap-3">
       <FaHome className="text-white"></FaHome>
        <NavLink className="text-white text-2xl" to="/">Home</NavLink>
        </li> 
       <li className=" justify-center items-center  flex gap-3">
        <FaUser className="text-white"></FaUser>
        <NavLink className="text-white text-2xl" to="userProfile"> Profile</NavLink>
        </li> 
       <li className=" justify-center items-center  flex gap-3">
      <FaShoppingCart className="text-white"></FaShoppingCart>
        <NavLink className="text-white text-2xl" to="cart">Cart</NavLink>
        </li> 
       <li className=" justify-center items-center  flex gap-3">
      <RiLogoutBoxFill className="text-white" ></RiLogoutBoxFill>
        <NavLink className="text-white text-2xl" to="cart">Logout</NavLink>
        </li> 
        <li className=" justify-center items-center  flex gap-3">
      <RiLogoutBoxFill className="text-white" ></RiLogoutBoxFill>
        <NavLink className="text-white text-2xl" to="todo">ToDo</NavLink>
        </li> 
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Dashboard;