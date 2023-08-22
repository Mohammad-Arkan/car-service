import { createBrowserRouter } from "react-router-dom";
import MainLayoute from "../Layoute/MainLayoute";
import HomeRoute from "../pages/HomePage.jsx/Home/HomeRoute";
import Login from "../pages/LogIn/Login";
import SingUp from "../pages/LogIn/SingUp";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

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
       },
       {
        path:'/book/:id',
        element:<BookService></BookService>,
        loader:({params})=> fetch(`http://localhost:5000/service/${params.id}`)
       },
       {
        path:"/bookings",
        element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>
       }
      ],
    },
  ]);
  export default router;