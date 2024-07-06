import { useState } from "react";
import "./App.css";
import Input from "./components/input/Input";
import Todo from "./components/todo/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
      ))}
      <Input
        setTodos={setTodos}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </>
  );
}

export default App;
