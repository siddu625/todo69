import React from "react";
import { useTodo } from "../context/TodoContext";

const EditDeleteSection = ({ id }) => {
  const { deleteTodo } = useTodo();
  return (
    <div className="absolute top-6 left-[10.6rem] bg-white h-16 w-28 border-2 border-[#BDCAE8] flex flex-col items-start justify-center overflow-hidden rounded-md">
      <button className="px-3 py-1 mb-1 hover:bg-[#DDE8FF] font-semibold w-full transition-all duration-200">
        Edit
      </button>
      <button
        onClick={() => {
          deleteTodo(id);
        }}
        className="px-3 py-1 hover:bg-[#DDE8FF]  w-full font-semibold transition-all duration-200 "
      >
        Delete
      </button>
    </div>
  );
};

export default EditDeleteSection;