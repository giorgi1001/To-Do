import React from "react";
import "./todo.css";

export default function Todo({ todo, setTodos, todos }) {
  const handleCheck = (event) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === todo.id
          ? { ...item, completed: event.target.checked }
          : item
      )
    );
  };

  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todo.id));
  };

  return (
    <>
      <div className="list">
        <li>{todo.text}</li>
        <input type="checkbox" onChange={handleCheck} />
        <button>Add</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
}
