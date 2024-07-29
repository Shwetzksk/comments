import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import * as routes from "./routes";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path={routes.HOME}
        element={
          <PrivateRouter>
            <Home />
          </PrivateRouter>
        }
      />
      <Route path={routes.LOGIN} element={<Login />} />
      <Route path={routes.SIGNUP} element={<Signup />} />
    </Route>
  )
);

export default router;
