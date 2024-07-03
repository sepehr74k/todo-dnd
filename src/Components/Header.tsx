import React from "react";
import { HeaderType } from "../types/Types";

const Header: React.FC<HeaderType> = ({ text, bg, count }) => {
  return (
    <div
      className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}
    >
      {text}{" "}
      <div className="ml-2 bg-white rounded-full w-6 h-6 flex items-center justify-center text-black">
        {count}
      </div>
    </div>
  );
};

export default Header;
