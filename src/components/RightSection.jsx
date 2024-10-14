import React from "react";
import Header from "./Header";
import TasklistHeader from "./TasklistHeader";
import InputSection from "./InputSection";
import TodoMainSection from "./TodoMainSection";

const RightSection = () => {
  return (
    <div className="h-full w-full bg-white rounded-md p-6 overflow-hidden">
      <Header />
      <TasklistHeader />
      <InputSection />
      <TodoMainSection />
    </div>
  );
};

export default RightSection;