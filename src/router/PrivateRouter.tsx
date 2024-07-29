import * as routes from "@/router/routes";
import useStore from "@/store";
import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}
const PrivateRouter: React.FC<Props> = ({ children }) => {
  const { login } = useStore();

  if (!login) {
    return <Navigate to={`/${routes.LOGIN}`} replace />;
  }

  return <>{children}</>;
};

export default PrivateRouter;
