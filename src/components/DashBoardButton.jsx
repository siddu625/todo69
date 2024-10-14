import React from "react";
import { RxDashboard } from "react-icons/rx";

const DashBoardButton = () => {
  return (
    <button className="h-10 w-44 rounded-md bg-[#334977] flex items-center justify-center gap-2 px-3 py-1">
      <RxDashboard style={{ color: "white", fontSize: "1.4rem" }} />
      <h2 className="text-xl text-white font-semibold">DashBoard</h2>
    </button>
  );
};

export default DashBoardButton;