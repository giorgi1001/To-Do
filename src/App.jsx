import { useState } from "react";
import "./App.css";
import Input from "./components/input/Input";
import Todo from "./components/todo/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
      <Input
        setTodos={setTodos}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
}

export default App;
