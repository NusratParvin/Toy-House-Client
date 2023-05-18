import { createBrowserRouter  } from "react-router-dom";
import PrimaryLayout from "../layouts/PrimaryLayout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrimaryLayout></PrimaryLayout>,
    },
  ]);

  export default router;