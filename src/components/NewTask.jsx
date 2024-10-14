import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

const NewTask = ({ newTaskClickedHandler }) => {
  return (
    <button
      onClick={newTaskClickedHandler}
      className={`
         "bg-transparent text-black border-2 border-dotted border-gray-500 w-56 h-12 text-xl font-semibold" 
       flex items-center justify-center gap-1 rounded-md`}
    >
      <IoIosAddCircleOutline className="text-black text-xl" />
      Add New Task
    </button>
  );
};

export default NewTask;
