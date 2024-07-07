import React from "react";

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
      <input
        value={inputValue}
        onChange={handleInput}
        type="text"
        placeholder="Enter To-Do . . ."
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}
