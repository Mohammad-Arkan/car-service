import { createBrowserRouter } from "react-router-dom";
import MainLayoute from "../Layoute/MainLayoute";

import HomeRoute from "../pages/HomePage.jsx/Home/HomeRoute";
import Login from "../pages/LogIn/Login";
import SingUp from "../pages/LogIn/SingUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayoute />,
      children: [
       {
        path:"/",
        element:<HomeRoute></HomeRoute>
       },
       {
        path:"/login",
        element:<Login></Login>
       },
       {
        path:"/register",
        element:<SingUp></SingUp>
       }
      ],
    },
  ]);
  export default router;