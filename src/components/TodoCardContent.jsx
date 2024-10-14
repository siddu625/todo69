import React, { useState } from "react";
import ThreeDots from "./ThreeDots";
import EditDeleteSection from "./EditDeleteSection";

const TodoCardContent = ({ todoItem }) => {
  const currentDate = new Date().toDateString();
  const [toggleThreeDots, setToggleThreeDots] = useState(false);

  const toggleThreeDotsHandler = () => setToggleThreeDots((prev) => !prev);
  return (
    <div className="relative h-auto w-80 bg-white border-2 border-[#BDCAE8] rounded-md p-4 overflow-hidden">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-xl">{todoItem.title}</h3>
        <ThreeDots toggleThreeDotsHandler={toggleThreeDotsHandler} toggleThreeDots={toggleThreeDots} />
        {toggleThreeDots && <EditDeleteSection id={todoItem.id} />}
      </div>
      <p className="mt-3 text-base font-normal text-black text-left">
        {todoItem.description}
      </p>
      <h4 className="mt-6 text-gray-500 text-xs font-medium text-left">
        {currentDate}
      </h4>
    </div>
  );
};

export default TodoCardContent;