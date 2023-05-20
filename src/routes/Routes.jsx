import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout></PrimaryLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/toyDetails/:id',
        element: <PrivateRoute>
          <ToyDetails></ToyDetails>
        </PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/carDetails/${params.id}`)
      }, {
        path: '/allToys',
        element: <AllToys></AllToys>
      }
    ]
  },

]);

export default router;