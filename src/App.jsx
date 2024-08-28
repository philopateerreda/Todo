import { useState } from "react";
import wood from "./assets/wood.jpg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos(prevTodos => [...prevTodos, newTodo]);
      setInputValue("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const actualTodos=todos.map(todo => (
    <label key={todo.id}>
      <input
        type="checkbox"
        className="checkB"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {todo.text}
    </label>
  ))

  return (
    <div className="main">
      <div className="todos">
        {actualTodos}
      </div>

      <div className="neck"></div>

      <div className="input">
        <input
          type="text"
          placeholder="add your todos"
          id="I"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button id="sub" onClick={addTodo}>
          add
        </button>
      </div>

      <div className="table">
        <img src={wood} alt="Wooden background" id="img" />
      </div>
    </div>
  );
}

export default App;