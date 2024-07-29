import React from "react";
import { IoCloseSharp } from "react-icons/io5";

interface ICardProps {
  closeIcon?: boolean;
  children: React.ReactNode;
}
const Card: React.FC<ICardProps> = ({ closeIcon, children }) => {
  return (
    <div className="min-w-[463px] max-w-md form-border bg-card rounded-lg before:before:bg-gray-300 py-10 px-6">
      {closeIcon && (
        <span className="absolute bg-bg-dark rounded-full flex justify-center items-center h-8 w-8 top-7 right-4">
          <IoCloseSharp />
        </span>
      )}
      {children}
    </div>
  );
};
export default Card;
