import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

interface ICardProps {
  closeIcon?: boolean;
  children: React.ReactNode;
}
const Card: React.FC<ICardProps> = ({ closeIcon, children }) => {
  const location = useLocation();
  return (
    <div className="min-w-[463px] max-w-md form-border bg-card rounded-lg before:before:bg-slate-200 py-10 px-6">
      {closeIcon && (
        <Link to={location.pathname}>
          <span className="absolute bg-dark rounded-full flex justify-center items-center h-8 w-8 top-7 right-4">
            <IoCloseSharp />
          </span>
        </Link>
      )}
      {children}
    </div>
  );
};
export default Card;
