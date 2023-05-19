import { createBrowserRouter  } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrimaryLayout></PrimaryLayout>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    },
    
  ]);

  export default router;