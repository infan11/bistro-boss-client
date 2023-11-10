import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../componanates/Home/Home/home";

 export  
 const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children : [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
  ]);