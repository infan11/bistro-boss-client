import {
  createBrowserRouter,
} from "react-router-dom";

import Home from "../componanates/Home/Home/home";
import Menu from "../componanates/Menu/Menu/Menu";
import OrderFood from "../componanates/Order/OrderFood";
import Login from "../componanates/Verify/Login/Login";
import SignUp from "../componanates/Verify/SignUp/SignUp";
import PrivateRoute from "./PrivateRoutes";
import Secret from "../componanates/Secret/Secret";
import Dashboard from "../Layout/DashBoard/Dashboard";
import Cart from "../componanates/Dasboard/Cart/Cart";
import AdminRoute from "./AdminRoutes";
import AddItems from "../componanates/Dasboard/AddItems/AddItems";
import AllUsers from "../componanates/Dasboard/AllUsers/AllUsers";
import Main from "../Layout/Main/Main";
import ManageItems from "../Layout/DashBoard/ManageItems/ManageItems";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
          path: '/',
          element: <Home></Home>
      }, 
      {
        path: 'menu', 
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <OrderFood></OrderFood>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // normal user routes
      {
        path: 'cart',
        element: <Cart></Cart>
      },

      // admin only routes
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
       path: "manageItems",
       element: <ManageItems></ManageItems>
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      }

    ]
  }
]);
