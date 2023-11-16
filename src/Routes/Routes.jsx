import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../componanates/Home/Home/home";
import Menu from "../componanates/Menu/Menu/Menu";
import OrderFood from "../componanates/Order/OrderFood";
import Login from "../componanates/Verify/Login/Login";
import SignUp from "../componanates/Verify/SignUp/SignUp";
import Secret from "../componanates/Secret/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/DashBoard/Dashboard";
import Cart from "../componanates/Dasboard/Cart/Cart";
import PrivateRoute from "./PrivateRoutes";
import AllUsers from "../componanates/Dasboard/AllUsers/AllUsers";

 export  
 const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children : [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "menu",
          element: <Menu></Menu>
        },
        {
          path: "order",
          element: <OrderFood></OrderFood>
        },
        {
         path: "login",
         element: <Login></Login>
        },
        {
          path: "signUp",
          element: <SignUp></SignUp>
        },{
          path: "secret",
          element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
        }
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children : [
          {
            path:"cart",
            element: <Cart></Cart>
          },
          {
            path: "users",
            element: <AllUsers></AllUsers>
          }
          
      ]
    }
  ]);