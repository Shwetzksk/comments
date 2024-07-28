import "./App.css";
import { FiEye } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

import { twMerge } from "tailwind-merge";

function App() {
  return (
    <>
      <Login />
    </>
  );
}

function Login() {
  return (
    <Card closeIcon={true}>
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
      <Button className="w-full">Login now</Button>
      <p className="text-gray-3 mt-3 text-left">
        Not registered yet? <span className="text-gray-2">Register →</span>
      </p>
    </Card>
  );
}

function Card({ closeIcon, children }) {
  return (
    <div className="max-w-md form-border bg-card rounded-lg before:before:bg-gray-300 py-10 px-6">
      {closeIcon && (
        <span className="absolute bg-bg-dark rounded-full flex justify-center items-center h-8 w-8 top-7 right-4">
          <IoCloseSharp />
        </span>
      )}
      {children}
    </div>
  );
}
function Textfield({ label, icon, ...others }) {
  return (
    <div className="flex flex-col items-start gap-2.5">
      <label className="text-sm text-gray-2 w-full text-left">{label}</label>
      <div className="flex items-center justify-between rounded border-[1.5px] border-gray-3 w-full p-3 text-base">
        <input {...others} className=" placeholder:text-gray-3 w-full" />
        {icon && <span className="text-gray-3">{icon}</span>}
      </div>
    </div>
  );
}

function Button({ children, className }) {
  return (
    <button
      className={twMerge(
        "bg-accent text-center py-3 px-9 rounded font-semibold ",
        className
      )}
    >
      {children}
    </button>
  );
}

export default App;
