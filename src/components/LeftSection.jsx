import React from "react";
import DashBoardButton from "./DashBoardButton";

const LeftSection = () => {
  return (
    <div className="h-full w-[15%] p-6">
      <div className="flex flex-col items-start gap-10">
        <h1 className="text-4xl text-white font-semibold">ToDo</h1>
        <DashBoardButton />
      </div>
    </div>
  );
};

export default LeftSection;