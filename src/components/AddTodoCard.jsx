import React from "react";

const AddTodoCard = ({
  setCancelTaskHandler,
  titleHandler,
  descriptionHandler,
  addTaskHandler,
  titleInput,
  descriptionInput,
}) => {
  return (
    <div className="h-auto w-full bg-white border-2 rounded-md p-3 flex flex-col items-center overflow-auto">
      {/* Input fields for new task */}
      <div className="mb-1">
        <input
          type="text"
          placeholder="Title"
          className="border-2 border-gray-300 rounded-md p-2 mb-2 w-full"
          value={titleInput}
          onChange={titleHandler}
        />
        <textarea
          placeholder="Description"
          className="border-2 border-gray-300 rounded-md p-2 w-full"
          value={descriptionInput}
          onChange={descriptionHandler}
        />
      </div>
      <div className="flex gap-[7.8rem]">
        <button
          onClick={addTaskHandler}
          className="px-3 py-1 rounded bg-[#202D48] text-white font-semibold transition duration-300"
        >
          Add Task
        </button>
        <button
          onClick={setCancelTaskHandler}
          className="px-3 py-1 rounded bg-[#DDE8FF] text-black font-semibold transition duration-300"
        >
          Cancel Task
        </button>
      </div>
    </div>
  );
};

export default AddTodoCard;