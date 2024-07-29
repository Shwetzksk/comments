import React from "react";
import { twMerge } from "tailwind-merge";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
}) => {
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
};

export default Button;
