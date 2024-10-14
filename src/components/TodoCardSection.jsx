import React, { useEffect, useState } from "react";
import AddTodoCard from "./AddTodoCard";
import NewTask from "./NewTask";
import { useTodo } from "../context/TodoContext";
import TodoCardContent from "./TodoCardContent";

const TodoCardSection = ({ status }) => {
  const { addTodo, todos } = useTodo();
  const [newTaskClicked, setNewTaskClicked] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const titleHandler = (e) => setTitleInput(e.target.value);
  const descriptionHandler = (e) => setDescriptionInput(e.target.value);

  const newTaskClickedHandler = () => {
    setNewTaskClicked(true);
  };

  const setCancelTaskHandler = () => {
    setNewTaskClicked(false);
    setTitleInput("")
    setDescriptionInput("")
  };

  const addTaskHandler = () => {
    if (titleInput !== "" && descriptionInput !== "") {
      addTodo(titleInput, descriptionInput, status); // Pass status here
      setTitleInput("");
      setDescriptionInput("");
      setNewTaskClicked(false);
    } else {
      alert("Fields should not be empty!!");
    }
  };

  const todoData = {
    setCancelTaskHandler,
    titleHandler,
    descriptionHandler,
    titleInput,
    descriptionInput,
    addTaskHandler,
  };

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="h-full w-96 bg-[#F2F6FF] rounded-md p-4 flex flex-col items-center justify-center gap-4">
      {todos
        .filter((todoItem) => todoItem.status === status)
        .map((todoItem, index) => (
          <TodoCardContent key={index} todoItem={todoItem} />
        ))}

      {newTaskClicked && <AddTodoCard {...todoData} />}
      <NewTask newTaskClickedHandler={newTaskClickedHandler} />
    </div>
  );
};

export default TodoCardSection;