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
import UpdateItems from "../Layout/DashBoard/UpdateItem/UpdateItems";
import Payment from "../Layout/DashBoard/Payment/Payment";
import PaymentHistory from "../Layout/DashBoard/Payment/PaymentHistory";
import AdminHome from "../Layout/DashBoard/AdminHome/AdminHome";
import UserHome from "../Layout/DashBoard/UserHome/UserHome";



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
        path: 'order',
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
         path : "userHome",
         element: <UserHome></UserHome>
        },
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },


      // admin only routes
      {
        path: "adminHome",
        element : <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
       path: "manageItems",
       element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
       path: "updateItem/:id",
       element: <UpdateItems></UpdateItems>,
       loader: ({params}) => fetch(`https://bistro-boss-server-xi-two.vercel.app/menu/${params.id}`)
      },
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      }

    ]
  }
]);
