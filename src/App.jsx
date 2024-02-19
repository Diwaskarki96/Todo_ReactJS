import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import NavBar from "./components/NavBar";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(false);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleFinished = () => {
    setshowFinished(!showFinished);
  };

  const handleEdit = (e, id) => {
    let todoEdit = todos.filter((item) => item.id === id);
    setTodo(todoEdit[0].todo);
    setTodos(todos.filter((item) => item.id !== id));
    saveToLS();
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
    saveToLS();
  };

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    saveToLS();
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleCheckbox = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        } else {
          return item;
        }
      })
    );
    saveToLS();
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
            disabled={todo.length <= 0}
            className="bg-violet-800 text-white p-2 py-1 mx-1 font-bold text-sm rounded-md hover:bg-violet-900 disabled:bg-violet-900"
          >
            Add
          </button>
        </div>
        <input
          type="checkbox"
          onChange={toggleFinished}
          checked={showFinished}
          className="mx-1"
        />
        Show Finished
        <h1 className="mx-5 font-bold text-2xl"> Your Todos</h1>
        <div className="todos ">
          {todos.length === 0 && (
            <div className="text-red-600 ml-9">No Todos</div>
          )}
          {todos.map((item) => {
            return (
              (showFinished || !item.isCompleted) && (
                <div
                  key={item.id}
                  className="todo flex my-3 justify-between w-1/4"
                >
                  <div className="flex gap-5">
                    <input
                      onChange={() => handleCheckbox(item.id)}
                      type="checkbox"
                      checked={item.isCompleted}
                    />
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="button flex h-full ">
                    <button
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                      className="bg-violet-800 text-white p-2 py-1 mx-1 font-bold text-sm rounded-md hover:bg-violet-900"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-violet-800 text-white p-2 py-1 mx-1 font-bold text-sm rounded-md hover:bg-violet-900"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
