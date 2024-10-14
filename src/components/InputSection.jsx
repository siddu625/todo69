import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useTodo } from "../context/TodoContext";

const InputSection = () => {
  const { todos } = useTodo();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCards = todos.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section className="flex justify-between mt-6">
      <div className="relative">
        <input
          placeholder="Search..."
          className="border-2 border-[#C1CDEA]  px-3 py-1 rounded-md"
          type="text"
          name="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <IoSearchOutline
          style={{
            position: "absolute",
            top: "7",
            right: "14",
            fontSize: "1.3rem",
            color: "gray",
          }}
        />
      </div>

      <div className="flex gap-6">
        <input
          className="border-2 border-[#C1CDEA] px-3 py-1 rounded-md"
          type="date"
          name="fromDate"
          id=""
        />
        <input
          className="border-2 border-[#C1CDEA] px-3 py-1 rounded-md"
          type="date"
          name="ToDate"
          id=""
        />
      </div>
    </section>
  );
};

export default InputSection;