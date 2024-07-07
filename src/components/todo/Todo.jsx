import React, { useState } from "react";
import "./todo.css";

export default function Todo({ todo, setTodos }) {
  const [editId, setEditId] = useState();
  const [editText, setEdiText] = useState();

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
        {todo.id === editId ? (
          <input
            defaultValue={todo.text}
            onChange={(event) => setEdiText(event.target.value)}
          />
        ) : (
          <li>{todo.text}</li>
        )}
        <div className="action-div">
          <input type="checkbox" onChange={handleCheck} />

          <button
            className="edit-btn"
            onClick={
              todo.id === editId
                ? () => {
                    setTodos((prevTodos) => [
                      ...prevTodos.map((item) =>
                        item.id === editId ? { ...item, text: editText } : item
                      ),
                    ]);
                    setEditId();
                  }
                : () => {
                    setEditId(todo.id), setEdiText(todo.text);
                  }
            }
          >
            {todo.id === editId ? "Save" : "Edit"}
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
