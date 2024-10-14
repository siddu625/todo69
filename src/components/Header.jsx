import React from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  return (
    <div className="p-1 border-b-2 flex items-center gap-4 pb-3 text-gray-500 font-semibold">
      <AiOutlineMenuUnfold className="text-[1.4rem] cursor-pointer hover:text-black" />
      <MdKeyboardArrowRight className="text-[1.6rem]" />
      <h3 className="cursor-pointer hover:text-black">Dashboard</h3>
      <MdKeyboardArrowRight className="text-[1.6rem]" />
      <h3 className="cursor-pointer hover:text-black">Profile</h3>
      <MdKeyboardArrowRight className="text-[1.6rem]" />
      <h3 className="cursor-pointer hover:text-black">Overview</h3>
    </div>
  );
};

export default Header;