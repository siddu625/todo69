import { createContext, useState, useEffect, useContext } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const existedtodos = JSON.parse(localStorage.getItem("todoItems"));
  const [todos, setTodos] = useState(existedtodos ? existedtodos : []);

  const addTodo = (title, description, status) => {
    const newTodo = {
      id: Date.now(), // Unique ID for the todo
      title: title,
      description: description,
      status: status, // Include the status
    };

    // Update todos state with the new todo
    setTodos((prev) => [...prev, newTodo]);
    // Log the updated todos
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((currTodo) => currTodo.id != id));
  };

  return (
    <TodoContext.Provider value={{ todos, setTodos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};