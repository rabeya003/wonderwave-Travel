import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home/Home";
import Bookings from "../Component/Bookings";
import Hotels from "../Component/Hotels";
import Private from "./Private";
import CardDetails from "../Component/CardDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/reg",
        element: <Register></Register>,
      },
      {
        path: "/bookings",
        element: <Bookings></Bookings>,
      },
      {
        path: "/travel/:id",
        element: (
          <Private>
            {" "}
            <Hotels></Hotels>
          </Private>
        ),
      },
      {
        path: "/cardDetails",
        element: <CardDetails></CardDetails>,
      },
    ],
  },
]);
