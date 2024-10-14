import React from "react";
import TodoCardSection from "./TodoCardSection";
import Status from "./Status";

const TodoMainSection = () => {
  return (
    <div className="max-h-[30rem] w-full mt-6 overflow-y-auto p-1">
      <div className="flex items-start justify-between space-x-4">
        <div className="flex flex-col items-start justify-center gap-2">
          <Status status="To Start" />
          <TodoCardSection status="To Start" />
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <Status status="Pending" />
          <TodoCardSection status="Pending" />
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <Status status="Completed" />
          <TodoCardSection status="Completed" />
        </div>
      </div>
    </div>
  );
};

export default TodoMainSection;