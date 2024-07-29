import { FiEye } from "react-icons/fi";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Textfield from "@/components/Textfield";
import { Link, useLocation } from "react-router-dom";
import * as routes from "@/router/routes";
import useStore from "@/store";

export default function SignupForm({ isModal }: { isModal: boolean }) {
  const location = useLocation();
  const { onLogin } = useStore();
  return (
    <Card closeIcon={isModal}>
      <div>
        <p className="text-slate-3 font-medium text-sm uppercase">SIGN UP</p>
        <h3 className="font-semibold text-lg">Create an account to continue</h3>
      </div>
      <div className="flex flex-col gap-4 mb-5 mt-11">
        <Textfield label="Email" placeholder="Enter your email" />
        <Textfield label="Username" placeholder="Choose a preferred username" />
        <Textfield
          label="Password"
          type="password"
          placeholder="Choose a strong password"
          icon={<FiEye className="text-lg" />}
        />
      </div>
      <Link to={routes.HOME}>
        <Button className="w-full" onClick={onLogin}>
          Continue
        </Button>
      </Link>
      <p className="text-slate-2 mt-3 text-left">
        Already have an account?
        <Link
          to={
            isModal
              ? `${location.pathname}?modal=${routes.LOGIN}`
              : `/${routes.LOGIN}`
          }
        >
          <span className="text-slate-1"> Login →</span>
        </Link>
      </p>
    </Card>
  );
}
