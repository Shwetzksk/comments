import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import { createBrowserRouter } from "react-router-dom";
import * as routes from "./routes";

const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <Home />,
  },
  {
    path: routes.LOGIN,
    element: <Login />,
  },
  {
    path: routes.SIGNUP,
    element: <Signup />,
  },
]);

export default router;
