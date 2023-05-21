import { createBrowserRouter } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import MyToys from "../pages/MyToys/MyToys";
import AddNewToy from "../pages/AddNewToy/AddNewToy";
import UpdateToy from "../pages/MyToys/UpdateToy";

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
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: '/addNew',
        element: <PrivateRoute><AddNewToy></AddNewToy></PrivateRoute>
      },
      {
        path: '/toyDetails/:id',
        element: <PrivateRoute>
          <ToyDetails></ToyDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://toy-house-server-beige.vercel.app/carDetails/${params.id}`)
      },
      {
        path: '/updateToy/:id',
        element: <UpdateToy></UpdateToy>,
        // loader: ({ params }) => fetch(`https://toy-house-server-beige.vercel.app/carDetails/${params.id}`)
      },
      {
        path: '/allToys',
        element: <AllToys></AllToys>
      }
    ]
  },

]);

export default router;