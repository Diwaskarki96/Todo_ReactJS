import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import NavBar from "./components/NavBar";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEdit = () => {};
  const handleDelete = () => {};
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleCheckbox = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto my-5 rounded-xl text-black p-5  bg-violet-100 min-h-[80vh]">
        <div className="addtodo my-5">
          <h2>Add a Todo</h2>
          <input
            onChange={handleChange}
            value={todo}
            className="w-1/2"
            type="text"
          />
          <button
            onClick={handleAdd}
            className="bg-violet-800 text-white p-2 py-1 mx-1 font-bold text-sm rounded-md hover:bg-violet-900"
          >
            Add
          </button>
        </div>
        <h1 className="mx-5 font-bold text-2xl"> Your Todos</h1>
        <div className="todos ">
          {todos.map((item) => {
            return (
              <div key={item} className="todo flex my-3 justify-between w-1/4">
                <input
                  onChange={() => handleCheckbox(item.id)}
                  type="checkbox"
                  checked={item.isCompleted}
                />

                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
                <div className="button">
                  <button
                    onClick={handleEdit}
                    className="bg-violet-800 text-white p-2 py-1 mx-1 font-bold text-sm rounded-md hover:bg-violet-900"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    className="bg-violet-800 text-white p-2 py-1 mx-1 font-bold text-sm rounded-md hover:bg-violet-900"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
