import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Contact from "../pages/contact/Contact";
import Menu from "../pages/ourMenu/Menu";
import Ourshop from "../pages/ourShop/Ourshop";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";
import UserProfile from "../pages/dashboard/userProfile/UserProfile";
import ToDo from "../pages/Dashboard/ToDo/ToDo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }, 
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "menu",
                element: <Menu></Menu>
            },
            {
                path: "ourShop",
                element: <Ourshop></Ourshop>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            }
        ]},
        {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
            children: [
                {
                    path: 'cart',
                    element: <Cart></Cart>
                },
                {
                    path: 'userProfile',
                    element: <UserProfile></UserProfile>
                },
                {
                    path: 'todo',
                    element: <ToDo></ToDo> 
                }
            ]
        }
]);
export default router;