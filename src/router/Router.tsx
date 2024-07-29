import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import * as routes from "./routes";

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
