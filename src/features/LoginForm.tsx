import { FiEye } from "react-icons/fi";
import Card from "@/components/Card";
import Textfield from "@/components/Textfield";
import Button from "@/components/Button";
import * as routes from "@/router/routes";
import { Link, useLocation } from "react-router-dom";

export default function LoginForm({ isModal }: { isModal: boolean }) {
  const location = useLocation();
  return (
    <Card closeIcon={isModal}>
      <div>
        <p className="text-gray-4 font-medium text-sm uppercase">
          WELCOME BACK
        </p>
        <h3 className="font-semibold text-lg">Log into your account</h3>
      </div>
      <div className="flex flex-col gap-4 mb-5 mt-11">
        <Textfield
          label="Email or Username"
          placeholder="Enter your email or username"
        />
        <Textfield
          label={
            <div className="flex justify-between w-full">
              <p>Password</p>
              <p>Forgot Password?</p>
            </div>
          }
          type="password"
          placeholder="Enter your password"
          icon={<FiEye className="text-lg" />}
        />
      </div>
      <Link to={routes.HOME}>
        <Button className="w-full">Login now</Button>
      </Link>
      <p className="text-gray-3 mt-3 text-left">
        Not registered yet?{" "}
        <Link
          to={
            isModal
              ? `${location.pathname}?modal=${routes.SIGNUP}`
              : `/${routes.SIGNUP}`
          }
        >
          <span className="text-gray-2">Register →</span>
        </Link>
      </p>
    </Card>
  );
}
