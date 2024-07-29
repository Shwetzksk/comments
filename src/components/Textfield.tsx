import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: "string" | React.ReactNode;
  icon?: React.ReactNode;
}

const Textfield: React.FC<Props> = ({ label, icon, ...others }) => {
  return (
    <div className="flex flex-col items-start gap-2.5">
      <label className="text-sm text-gray-2 w-full text-left">{label}</label>
      <div className="flex items-center justify-between rounded border-[1.5px] border-gray-3 w-full p-3 text-base">
        <input
          {...others}
          className=" placeholder:text-gray-3 w-full focus:outline-none"
        />
        {icon && <span className="text-gray-3">{icon}</span>}
      </div>
    </div>
  );
};
export default Textfield;
