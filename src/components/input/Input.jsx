import React from "react";
import "./input.css";

export default function Input({ setTodos, inputValue, setInputValue }) {
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };
  const handleAdd = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { text: inputValue, completed: false, id: Math.random() },
    ]);
    setInputValue("");
  };

  return (
    <>
      <div className="input-div">
        <input
          value={inputValue}
          onChange={handleInput}
          type="text"
          placeholder="Enter To-Do . . ."
        />
        <button className="add-btn" onClick={handleAdd}>
          Add
        </button>
      </div>
    </>
  );
}
