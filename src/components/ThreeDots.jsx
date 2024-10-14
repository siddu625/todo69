import React from "react";

const ThreeDots = ({ toggleThreeDotsHandler }) => {
  return (
    <div onClick={toggleThreeDotsHandler} className="cursor-pointer h-5 w-5 flex flex-col items-center justify-center">
      <div className="h-1 w-1 bg-gray-500 rounded-full mb-[0.1rem]"></div>
      <div className="h-1 w-1 bg-gray-500 rounded-full mb-[0.1rem]"></div>
      <div className="h-1 w-1 bg-gray-500 rounded-full mb-[0.1rem]"></div>
    </div>
  );
};

export default ThreeDots;