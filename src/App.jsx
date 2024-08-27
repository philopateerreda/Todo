import { useState } from "react";
import wood from "./assets/wood.jpg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [T, setT] = useState("a");

  const inputT = (event) => {
    setT(event.target.value);
  };

  const addtodo = () => {
    const todo = [
      <label>
        <input type="checkbox" className="checkB" />
        {T}
      </label>,
    ];
    setTodos((prevT) => prevT.concat(todo));
  };

  return (
    <>
      <div className="main">
        <div className="todos">
          {todos}

          <label>
            <input type="checkbox" className="checkB" />
            Option 1
          </label>
        </div>

        <div className="neck"></div>

        <div className="input">
          <input
            type="text"
            placeholder="add your todos"
            id="I"
            value={T}
            onChange={inputT}
          ></input>
          <button id="sub" onClick={addtodo}>
            add
          </button>
        </div>

        <div className="table">
          <img src={wood} alt="" id="img" />
        </div>
      </div>
    </>
  );
}

export default App;
