import React from "react";
import { TodoProvider } from "./context/TodoContext";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import EditDeleteSection from "./components/EditDeleteSection";

const App = () => {
  return (
    <TodoProvider>
      <div className="h-screen w-full bg-[#202D48] flex p-2 overflow-hidden">
        <LeftSection />
        <RightSection />
      </div>
    </TodoProvider>
  );
};

export default App;