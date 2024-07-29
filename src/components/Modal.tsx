import React from "react";

interface Props {
  children: React.ReactNode;
  open: boolean;
}
const Modal: React.FC<Props> = ({ children, open }) => {
  if (!open) return;
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen overflow-hidden backdrop-blur-sm">
      {children}
    </div>
  );
};

export default Modal;
